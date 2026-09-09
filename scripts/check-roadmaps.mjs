/**
 * Integrity check for src/_data/roadmaps.js — the hand-edited content behind
 * /roadmaps.html.
 *
 * html-validate already catches duplicate category ids (they become
 * duplicate `id="tab-…"` / `id="panel-…"` attributes). This covers the
 * failure modes that render as silently-wrong HTML instead: empty labels or
 * items, a section with no clusters, a cluster with no items, or a shape
 * typo like `section` for `sections`.
 *
 * Run via `npm run check:data` (part of the CI build job).
 */
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const categories = require("../src/_data/roadmaps.js");

const errors = [];
const seenCategoryIds = new Set();

const nonEmptyString = (v) => typeof v === "string" && v.trim() !== "";

if (!Array.isArray(categories) || categories.length === 0) {
  errors.push("roadmaps.js must export a non-empty array of categories");
}

for (const [ci, category] of (categories ?? []).entries()) {
  const where = `category[${ci}]${category?.id ? ` "${category.id}"` : ""}`;

  if (!nonEmptyString(category?.id)) errors.push(`${where}: missing or empty id`);
  if (!nonEmptyString(category?.label)) errors.push(`${where}: missing or empty label`);
  if (!/^[a-z0-9-]+$/.test(category?.id ?? "")) {
    errors.push(`${where}: id must be kebab-case ([a-z0-9-])`);
  }
  if (seenCategoryIds.has(category?.id)) errors.push(`${where}: duplicate id`);
  seenCategoryIds.add(category?.id);

  // A category with no `sections` is a deliberate "coming soon" stub.
  if (category?.sections === undefined) continue;

  if (!Array.isArray(category.sections) || category.sections.length === 0) {
    errors.push(`${where}: \`sections\` is present but not a non-empty array`);
    continue;
  }

  const seenSectionIds = new Set();
  for (const [si, section] of category.sections.entries()) {
    const sWhere = `${where} > section[${si}]${section?.id ? ` "${section.id}"` : ""}`;

    if (!nonEmptyString(section?.id)) errors.push(`${sWhere}: missing or empty id`);
    if (!nonEmptyString(section?.title)) errors.push(`${sWhere}: missing or empty title`);
    if (seenSectionIds.has(section?.id)) errors.push(`${sWhere}: duplicate section id`);
    seenSectionIds.add(section?.id);

    if (!Array.isArray(section?.clusters) || section.clusters.length === 0) {
      errors.push(`${sWhere}: no clusters`);
      continue;
    }

    for (const [ki, cluster] of section.clusters.entries()) {
      const kWhere = `${sWhere} > cluster[${ki}]${cluster?.title ? ` "${cluster.title}"` : ""}`;
      if (!nonEmptyString(cluster?.title)) errors.push(`${kWhere}: missing or empty title`);
      if (!Array.isArray(cluster?.items) || cluster.items.length === 0) {
        errors.push(`${kWhere}: no items`);
        continue;
      }
      cluster.items.forEach((item, ii) => {
        if (!nonEmptyString(item)) errors.push(`${kWhere}: item[${ii}] is empty or not a string`);
      });
    }
  }
}

if (errors.length > 0) {
  console.error(`roadmaps.js: ${errors.length} problem(s) found:`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

const written = categories.filter((c) => c.sections).length;
console.log(
  `roadmaps.js OK — ${categories.length} categories (${written} written, ${categories.length - written} "coming soon").`,
);
