---
datapackage:
  title: "oh-my-measure size grids — open dataset"
  description: "15 adult body size grids (EU, FR, INT, IT, JP, RU, UK, US), women’s and men’s cuts, plus 2 children’s stature ladders. 9 are derived from Wikipedia articles and inherit CC BY-SA 4.0 (see /NOTICE.txt); 4 are the project’s own synthesis of retail conventions, released under the same licence by the owner’s decision (ADR-029); 2 are transcriptions of national standards, released under the same licence with the legal risk accepted explicitly and revocably (ADR-030). The 2 children’s ladders (EU, RU) are keyed by stature rather than girth and transcribe children’s national standards (GOST 17916-86 / 17917-86 and EN 13402), on the same basis. A third record shape: 2 GOST typical-figure spaces (a sparse (stature × chest × fullness) matrix, flattened to one row per combination the standard actually names) and 2 GOST 32119 infant ladders. Their chest girths are NOT the same measurement — the figure spaces use the THIRD girth (over the bust points), the infant ladders the HORIZONTAL one (across the shoulder blades); the column names say which, and merging them would be nonsense. Excludes 496 brand tables and brand children’s ladders — see README.txt."
  licenses:
  - path: "https://creativecommons.org/licenses/by-sa/4.0/"
    title: "Creative Commons Attribution-ShareAlike 4.0 International"
  sources:
  - path: "https://ohmymeasure.pebbly.space"
    title: "oh-my-measure"
  resources:
  - name: "eu-mens"
    path: "eu-mens.csv"
    title: "eu-mens"
  - name: "eu-womens"
    path: "eu-womens.csv"
    title: "eu-womens"
  - name: "fr-mens"
    path: "fr-mens.csv"
    title: "fr-mens"
  - name: "fr-womens"
    path: "fr-womens.csv"
    title: "fr-womens"
  - name: "int-mens"
    path: "int-mens.csv"
    title: "int-mens"
  - name: "int-womens"
    path: "int-womens.csv"
    title: "int-womens"
  - name: "it-mens"
    path: "it-mens.csv"
    title: "it-mens"
  - name: "it-womens"
    path: "it-womens.csv"
    title: "it-womens"
  - name: "jp-womens"
    path: "jp-womens.csv"
    title: "jp-womens"
  - name: "uk-mens"
    path: "uk-mens.csv"
    title: "uk-mens"
  - name: "uk-womens"
    path: "uk-womens.csv"
    title: "uk-womens"
  - name: "us-mens"
    path: "us-mens.csv"
    title: "us-mens"
  - name: "us-womens"
    path: "us-womens.csv"
    title: "us-womens"
  - name: "ru-mens"
    path: "ru-mens.csv"
    title: "ru-mens"
  - name: "ru-womens"
    path: "ru-womens.csv"
    title: "ru-womens"
  - name: "eu-kids-standard"
    path: "eu-kids-standard.csv"
    title: "eu-kids-standard"
  - name: "ru-kids-standard"
    path: "ru-kids-standard.csv"
    title: "ru-kids-standard"
  - name: "gost-17916-86"
    path: "gost-17916-86.csv"
    title: "gost-17916-86"
  - name: "gost-17917-86"
    path: "gost-17917-86.csv"
    title: "gost-17917-86"
  - name: "gost-32119-girls"
    path: "gost-32119-girls.csv"
    title: "gost-32119-girls"
  - name: "gost-32119-boys"
    path: "gost-32119-boys.csv"
    title: "gost-32119-boys"
---

Four record shapes: adult body size grids, national children’s stature ladders,
GOST typical-figure spaces and the 32119 infant ladders.

Each table ships with a **provenance passport** in its `.json` file — sources with
URL and capture date, the basis of the numbers, a confidence level, a version and a
content hash. A published number cannot change without the version being bumped.

> **Chest girth is not one measurement.** The figure spaces use the THIRD girth
> (`chest_third_cm`, over the bust points); the infant ladders the HORIZONTAL one
> (`chest_horizontal_cm`, across the shoulder blades). The number 48 means different
> bodies in each — the column names keep them apart.

Units differ by shape and every column says which: centimetres for girths and
stature, months for age, kilograms for weight.

Mirrors: [DOI 10.5281/zenodo.22646400](https://doi.org/10.5281/zenodo.22646400) ·
[Hugging Face](https://huggingface.co/datasets/fedorovvvv/oh-my-measure-size-grids) ·
[Kaggle](https://www.kaggle.com/datasets/fedorovvvv/body-size-grids-with-named-sources) ·
[GitHub](https://github.com/with-pebbly/oh-my-measure-datasets)
