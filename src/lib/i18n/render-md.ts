import { fetchLocaleFragment, fetchLocaleString } from ".";
import { marked } from "marked";

export async function renderLocaleMarkdown(markdown: string, locale: string) {
  const keys = [...markdown.matchAll(/%([^%]+)%/g)].map(m => m[1]);
  const strings = keys.filter(k => k.includes("."));
  const fragments = keys.filter(k => k.includes("/"));
  const resolved = await Promise.all(
    [
      ...strings.map(s => fetchLocaleString(s, locale).then(value => [s, value])),
      ...fragments.map(f => fetchLocaleFragment(f, locale).then(value => [f, value])),
    ]
  );
  return resolved.reduce((acc, [key, value]) => {
    return acc.replaceAll(`%${key}%`, value);
  }, markdown);
}

export async function renderFragmentToHtml(fragment: string): Promise<string> {
  return await marked(fragment);
}