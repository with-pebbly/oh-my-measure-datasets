TITLE:    501 clothing brand size charts from 132 brands
SUBTITLE: Long-format, every chart naming its source URL and capture date
LICENCE:  Other (specified in description) — NOT a Creative Commons one
---

### Read this first

**No licence is granted over these numbers, and none is claimed.**

They are facts about goods a brand sells — what chest girth size 40 means in that shop — transcribed from each brand's own published size guide. They are not our work, so we do not license them from our own name: not CC BY-SA, not CC0, not anything. Granting a licence means disposing of a right, and the rights here are not ours.

That is why this is a separate dataset from the CC BY-SA one ([10.5281/zenodo.22646400](https://doi.org/10.5281/zenodo.22646400)) rather than a folder inside it.

Brand names are used nominatively, to say whose chart it is. **If you hold rights and think a chart should not be here, say so and it will be removed** — every row carries `grid_id`, so withdrawing one brand is deleting its rows and rebuilding.

### What is here

- **496 adult charts** from 132 brands (EU, FR, INT, IT, JP, RU, UK, US) — 9132 rows.
- **5 brand children's ladders** — 117 rows.
- **Every chart names its source URL and capture date.** All 504 sources carry both.

| File | What |
|---|---|
| `brand-grids.csv` | the long table — `grid_id, brand, brand_name, system, cut, label, alpha, measure, low_cm, high_cm` |
| `brand-kids-grids.csv` | children's, plus `key` and `unit` per row |
| `brand-kids-aka.csv` | what neighbouring alphabets call the same rung |
| `brands.csv` | registry — name, group, country, homepage, size-guide URL |
| `passports.json` | per-chart provenance |
| `RIGHTS.txt` | the rights statement in full |

### Why long format

496 charts are **heterogeneous by column** — one brand prints bust, waist and hip, another bust only. A wide table would pad empty columns down the full height; one file per chart would mean 992 files. In long form a row is `(chart, label, measure)`, and a missing measure produces no row rather than an empty cell you must tell apart from zero.

```python
import pandas as pd
df = pd.read_csv("brand-grids.csv")
wide = df.pivot_table(index=["grid_id", "label"], columns="measure",
                      values=["low_cm", "high_cm"])
```

Join `brand-grids.csv` → `passports.json` on `grid_id`, → `brands.csv` on `brand`.

### Mirrors

DOI [10.5281/zenodo.22648677](https://doi.org/10.5281/zenodo.22648677) · [Hugging Face](https://huggingface.co/datasets/fedorovvvv/oh-my-measure-brand-size-charts) · [GitHub](https://github.com/with-pebbly/oh-my-measure-datasets) · produced by [oh-my-measure](https://ohmymeasure.pebbly.space/brands)
