# oh-my-measure — open size datasets

Two datasets of body-size data, published separately **because their rights differ**.
Both are produced by [oh-my-measure](https://ohmymeasure.pebbly.space) and mirrored
here, on Zenodo and on Hugging Face.

| | `data/` | `data-brands/` |
|---|---|---|
| What | body size grids, children's ladders, GOST figure spaces | size charts published by the brands themselves |
| Size | 21 tables, 43 files | 501 charts from 132 brands, 9249 rows |
| Licence | **CC BY-SA 4.0** | **none granted, none claimed** |
| DOI | [10.5281/zenodo.22646400](https://doi.org/10.5281/zenodo.22646400) | [10.5281/zenodo.22648677](https://doi.org/10.5281/zenodo.22648677) |
| Hugging Face | [oh-my-measure-size-grids](https://huggingface.co/datasets/fedorovvvv/oh-my-measure-size-grids) | [oh-my-measure-brand-size-charts](https://huggingface.co/datasets/fedorovvvv/oh-my-measure-brand-size-charts) |

**Read `data-brands/RIGHTS.txt` before using the second one.** Its numbers are facts
about goods a brand sells — not our work — so we grant no licence over them. That is
exactly why the two are not mixed into one package: doing so would extend the CC BY-SA
statement over material it cannot cover.

## `data/` — the open dataset (CC BY-SA 4.0)

Four record shapes, one CSV and one JSON per table, plus a
[Frictionless Data Package](https://frictionlessdata.io/) manifest describing every column.

- **Adult size grids** — printed size label to bust, waist, hip and thigh bands, in centimetres.
- **National children's stature ladders** — keyed by stature; units differ per measure
  (`*_cm`, `*_months`, `*_kg`) and every column says which.
- **GOST typical-figure spaces** — a sparse (stature x chest x fullness) matrix, flattened
  to one row per combination the standard actually names.
- **GOST 32119 infant ladders**.

> **Chest girth is not one measurement.** The figure spaces use the THIRD girth (over the
> bust points, `chest_third_cm`); the infant ladders the HORIZONTAL one (across the shoulder
> blades, `chest_horizontal_cm`). The number 48 means different bodies in each. Merging the
> columns would be nonsense — which is why they are named differently.

Every table carries a provenance passport in its `.json`: sources with URL and capture date,
the basis of the numbers, a confidence level, a version and a content hash — so a published
number cannot change without the version being bumped.

## `data-brands/` — brand charts (no licence)

Long (tidy) format: a row is `(chart, label, measure)`. 496 charts are heterogeneous by
column — one brand prints bust, waist and hip, another bust only — so a wide table would pad
empty columns down the full height, and one file per chart would mean 992 files. A missing
measure simply produces no row.

```python
import pandas as pd
df = pd.read_csv("data-brands/brand-grids.csv")
wide = df.pivot_table(index=["grid_id", "label"], columns="measure",
                      values=["low_cm", "high_cm"])
```

Join `brand-grids.csv` -> `passports.json` on `grid_id`, and -> `brands.csv` on `brand`.
The children's table adds `key` (what the rung measures) and `unit` per row.

**If you hold rights and think a chart should not be here, open an issue and it will be
removed** — every row carries `grid_id`, so withdrawing one brand is deleting its rows and
rebuilding.

## Provenance of the open dataset

- 9 adult grids derive from Wikipedia articles and inherit CC BY-SA 4.0 — see `NOTICE.txt`.
- 4 are the project's own synthesis of retail conventions.
- The rest transcribe national standards (31396-2009, 31399-2009, 17916-86, 17917-86,
  32119-2013) and EN 13402, released under the same licence with the legal risk accepted
  explicitly and revocably.

## This repository is generated

Both directories are build output, rebuilt deterministically from the application:
`export-dataset.mjs` and `export-brand-dataset.mjs`. No generation date is written anywhere
on purpose — the same input gives byte-identical output, and a timestamp would make every
run a diff. Fix data upstream, not here.
