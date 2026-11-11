"""Export the Ames sales data used by the portfolio's interactive figure.

Run manually from a checkout of github.com/lucasrod/ames-housing. The portfolio
build never runs this script; it only reads the JSON it writes.

    pip install pyreadr pandas
    python tools/export_ames.py ../ames-housing ./src/data/ames-sales.json

Input:  data/ames_tf_generic.rds (output of chapter 4, outliers > 4000 sq ft removed)
Output: compact JSON with one row per sale plus provenance metadata.
"""

from __future__ import annotations

import json
import subprocess
import sys
from datetime import date
from pathlib import Path

import pyreadr


def main(repo: Path, out: Path) -> None:
    rds = repo / "data" / "ames_tf_generic.rds"
    df = next(iter(pyreadr.read_r(str(rds)).values()))

    cols = ["Longitude", "Latitude", "Sale_Price", "Gr_Liv_Area", "Year_Sold", "Neighborhood"]
    df = df[cols].dropna().copy()

    neighborhoods = sorted(df["Neighborhood"].astype(str).unique())
    idx = {n: i for i, n in enumerate(neighborhoods)}

    rows = [
        [
            round(float(r.Longitude), 5),
            round(float(r.Latitude), 5),
            int(r.Sale_Price),
            int(r.Gr_Liv_Area),
            int(r.Year_Sold),
            idx[str(r.Neighborhood)],
        ]
        for r in df.itertuples(index=False)
    ]

    commit = subprocess.run(
        ["git", "-C", str(repo), "rev-parse", "--short", "HEAD"],
        capture_output=True, text=True, check=True,
    ).stdout.strip()

    payload = {
        "provenance": {
            "repo": "https://github.com/lucasrod/ames-housing",
            "commit": commit,
            "file": "data/ames_tf_generic.rds",
            "exported": date.today().isoformat(),
            "notes": "De Cock (2011) Ames data via modeldata::ames; sales with "
                     "above-grade living area > 4000 sq ft removed.",
        },
        "columns": ["lon", "lat", "price", "living_area_sqft", "year_sold", "neighborhood"],
        "neighborhoods": neighborhoods,
        "rows": rows,
    }
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(payload, separators=(",", ":")))
    print(f"wrote {len(rows)} rows to {out}")


if __name__ == "__main__":
    main(Path(sys.argv[1]), Path(sys.argv[2]))
