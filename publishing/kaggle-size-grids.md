TITLE:    Body size grids with named sources (EU, FR, INT, IT, JP, RU, UK, US)
SUBTITLE: 21 tables in four record shapes — every number names where it came from
LICENCE:  CC BY-SA 4.0
---

Body size data transcribed from named public sources, in four record shapes:

- **15 adult size grids** (EU, FR, INT, IT, JP, RU, UK, US), women's and men's cuts — a printed size label mapped to bust, waist, hip and thigh bands.
- **2 national children's stature ladders** (EU, RU).
- **2 GOST typical-figure spaces** — a sparse (stature × chest × fullness) matrix.
- **2 GOST 32119 infant ladders**.

### What makes this different: every number names its source

Each table ships with a provenance passport in its `.json`:

| Field | What it says |
|---|---|
| `sources` | where the numbers came from — URL and capture date |
| `basis` | `standard`, `derived`, or `retail-convention` |
| `confidence` | `high` / `medium` / `low` |
| `provenance` | how the bands were built, in four languages |
| `version` + `contentHash` | a number cannot change without the version being bumped |

### Units differ by shape, and every column says which

Adult grids: centimetres. Children's ladders: centimetres for stature and girths, **months** for age, **kilograms** for weight — age is deliberately not converted to years, or the infant end of the ladder goes fractional. Figure spaces and infant ladders: plain centimetres as the standard prints them.

### Warning: chest girth is not one measurement

The GOST typical-figure spaces use the **third** girth (tape over the bust points, `chest_third_cm`). The 32119 infant ladders use the **horizontal** one (across the shoulder blades, `chest_horizontal_cm`). These measure the same place two different ways — **the number 48 means different bodies in each**. Merging the columns would be nonsense; the names keep them apart.

### Provenance and licensing

9 adult grids derive from Wikipedia articles and inherit CC BY-SA 4.0 (see `NOTICE.txt`); 4 are the project's own synthesis of retail conventions; the rest transcribe national standards (31396-2009, 31399-2009, 17916-86, 17917-86, 32119-2013) and EN 13402.

### Not included

496 brand size charts — published as a **separate dataset** because their rights differ: those numbers are facts about goods a brand sells, not our work.

### Citation and mirrors

DOI [10.5281/zenodo.22646400](https://doi.org/10.5281/zenodo.22646400) · [Hugging Face](https://huggingface.co/datasets/fedorovvvv/oh-my-measure-size-grids) · [GitHub](https://github.com/with-pebbly/oh-my-measure-datasets) · produced by [oh-my-measure](https://ohmymeasure.pebbly.space)
