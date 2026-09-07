/**
 * README.md для DataHub Cloud — генерируется из `datapackage.json`, не пишется.
 *
 * DataHub рендерит пост НЕ из `datapackage.json`, а из `README.md` с YAML-фронт-
 * маттером под ключом `datapackage:` — это выяснилось 2026-09-08 по официальному
 * шаблону `datahubio/datahub-cloud-template-dataset`, после того как обе страницы
 * поста отдавали 404 при успешно синхронизированном посте. Пост существовал,
 * заголовок вкладки был верный, рендерить было нечего.
 *
 * Список ресурсов берётся из манифеста: в `data/` их сорок шесть, и набранный
 * руками он разъедется с первой же пересборкой выгрузки. В фронтматтер едут
 * только CSV — DataHub показывает их таблицами; JSON-паспорта таблицами не
 * являются и названы в теле.
 *
 * Запуск: node publishing/build-datahub-readme.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';

/** Экранирование строки для YAML: кавычки и двоеточия ломают скаляр без них. */
const yaml = (text) => `"${String(text).replace(/"/gu, '\\"')}"`;

const DIRS = [
	{
		dir: 'data',
		body:
			'Four record shapes: adult body size grids, national children’s stature ladders,\n' +
			'GOST typical-figure spaces and the 32119 infant ladders.\n\n' +
			'Each table ships with a **provenance passport** in its `.json` file — sources with\n' +
			'URL and capture date, the basis of the numbers, a confidence level, a version and a\n' +
			'content hash. A published number cannot change without the version being bumped.\n\n' +
			'> **Chest girth is not one measurement.** The figure spaces use the THIRD girth\n' +
			'> (`chest_third_cm`, over the bust points); the infant ladders the HORIZONTAL one\n' +
			'> (`chest_horizontal_cm`, across the shoulder blades). The number 48 means different\n' +
			'> bodies in each — the column names keep them apart.\n\n' +
			'Units differ by shape and every column says which: centimetres for girths and\n' +
			'stature, months for age, kilograms for weight.\n\n' +
			'Mirrors: [DOI 10.5281/zenodo.22646400](https://doi.org/10.5281/zenodo.22646400) ·\n' +
			'[Hugging Face](https://huggingface.co/datasets/fedorovvvv/oh-my-measure-size-grids) ·\n' +
			'[Kaggle](https://www.kaggle.com/datasets/fedorovvvv/body-size-grids-with-named-sources) ·\n' +
			'[GitHub](https://github.com/with-pebbly/oh-my-measure-datasets)\n'
	},
	{
		dir: 'data-brands',
		body:
			'**No licence is granted over these numbers, and none is claimed.** They are facts\n' +
			'about goods a brand sells, transcribed from each brand’s own published size guide —\n' +
			'not our work, so we do not license them from our own name. See `RIGHTS.txt`.\n\n' +
			'That is why this is a separate dataset from the CC BY-SA one, not a folder inside it.\n\n' +
			'Long (tidy) format: a row is `(chart, label, measure)`. 496 charts are heterogeneous\n' +
			'by column — one brand prints bust, waist and hip, another bust only — so a missing\n' +
			'measure produces no row rather than an empty cell you must tell apart from zero.\n\n' +
			'Join `brand-grids.csv` to `passports.json` on `grid_id`, and to `brands.csv` on\n' +
			'`brand`. The children’s table adds `key` (what the rung measures) and `unit` per row.\n\n' +
			'**If you hold rights and think a chart should not be here, say so and it will be\n' +
			'removed** — every row carries `grid_id`.\n\n' +
			'Mirrors: [DOI 10.5281/zenodo.22648677](https://doi.org/10.5281/zenodo.22648677) ·\n' +
			'[Hugging Face](https://huggingface.co/datasets/fedorovvvv/oh-my-measure-brand-size-charts) ·\n' +
			'[Kaggle](https://www.kaggle.com/datasets/fedorovvvv/clothing-brand-size-charts-501-charts-132-brands) ·\n' +
			'[GitHub](https://github.com/with-pebbly/oh-my-measure-datasets)\n'
	}
];

for (const { dir, body } of DIRS) {
	const pkg = JSON.parse(await readFile(`${dir}/datapackage.json`, 'utf8'));
	const csv = pkg.resources.filter((resource) => resource.format === 'csv');

	const lines = ['---', 'datapackage:', `  title: ${yaml(pkg.title ?? pkg.name)}`];
	lines.push(`  description: ${yaml(pkg.description)}`);
	if (Array.isArray(pkg.licenses)) {
		lines.push('  licenses:');
		for (const licence of pkg.licenses) {
			lines.push(`  - path: ${yaml(licence.path)}`, `    title: ${yaml(licence.title)}`);
		}
	}
	if (Array.isArray(pkg.sources)) {
		lines.push('  sources:');
		for (const source of pkg.sources) {
			lines.push(`  - path: ${yaml(source.path)}`, `    title: ${yaml(source.title)}`);
		}
	}
	lines.push('  resources:');
	for (const resource of csv) {
		lines.push(
			`  - name: ${yaml(resource.name)}`,
			`    path: ${yaml(resource.path)}`,
			`    title: ${yaml(resource.name)}`
		);
	}
	lines.push('---', '', body);

	await writeFile(`${dir}/README.md`, lines.join('\n'));
	console.log(`${dir}/README.md — ${csv.length} ресурсов`);
}
