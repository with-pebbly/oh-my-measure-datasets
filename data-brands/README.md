---
datapackage:
  title: "oh-my-measure brand size charts — transcribed from the brands’ own published guides"
  description: "496 adult size charts published by 132 clothing brands (EU, FR, INT, IT, JP, RU, UK, US), plus 5 brand children’s ladders — transcribed from each brand’s own size guide and normalised into long-format tables of 9132 and 117 rows. The children’s ladders are keyed by stature, age or a house code and carry their unit per row, because a rung may state height in centimetres, age in months and weight in kilograms at once. Every chart names its source URL and capture date in passports.json. NO LICENCE IS GRANTED AND NONE IS CLAIMED: the numbers are facts about goods a brand sells, not our work — see RIGHTS.txt. Published separately from the CC BY-SA 4.0 dataset at /dataset/ for exactly that reason."
  sources:
  - path: "https://ohmymeasure.pebbly.space/brands"
    title: "oh-my-measure"
  resources:
  - name: "brand-grids"
    path: "brand-grids.csv"
    title: "brand-grids"
  - name: "brands"
    path: "brands.csv"
    title: "brands"
  - name: "brand-kids-grids"
    path: "brand-kids-grids.csv"
    title: "brand-kids-grids"
  - name: "brand-kids-aka"
    path: "brand-kids-aka.csv"
    title: "brand-kids-aka"
---

**No licence is granted over these numbers, and none is claimed.** They are facts
about goods a brand sells, transcribed from each brand’s own published size guide —
not our work, so we do not license them from our own name. See `RIGHTS.txt`.

That is why this is a separate dataset from the CC BY-SA one, not a folder inside it.

Long (tidy) format: a row is `(chart, label, measure)`. 496 charts are heterogeneous
by column — one brand prints bust, waist and hip, another bust only — so a missing
measure produces no row rather than an empty cell you must tell apart from zero.

Join `brand-grids.csv` to `passports.json` on `grid_id`, and to `brands.csv` on
`brand`. The children’s table adds `key` (what the rung measures) and `unit` per row.

**If you hold rights and think a chart should not be here, say so and it will be
removed** — every row carries `grid_id`.

Mirrors: [DOI 10.5281/zenodo.22648677](https://doi.org/10.5281/zenodo.22648677) ·
[Hugging Face](https://huggingface.co/datasets/fedorovvvv/oh-my-measure-brand-size-charts) ·
[Kaggle](https://www.kaggle.com/datasets/fedorovvvv/clothing-brand-size-charts-501-charts-132-brands) ·
[GitHub](https://github.com/with-pebbly/oh-my-measure-datasets)
