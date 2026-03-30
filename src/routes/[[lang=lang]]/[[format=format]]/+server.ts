import { renderLocaleMarkdown } from "$lib/i18n/render-md.js";
import type { EntryGenerator } from "./$types";
import page from "./+page.md?raw"

export const entries: EntryGenerator = () => {
  return [
    { lang: 'en', format: '' },
    { lang: '', format: '' }
  ];
};

export async function GET({ params, url }) {
  if (params.format && [".csv", ".json"].includes(params.format)) {
    // here, we fetch the table data by id and return it as a response.
    // in the case of multiple tables, csv returns them all seperated
    // by two newlines. json, on the other hand, returns a single json
    // object with the table data mapped by table id.
    return new Response("no tables found for page", {
      headers: {
        'Content-Type': `text/plain`,
      },
      status: 404
    });
  } else {
    // here, we return the markdown page.
    console.log(`lang: ${params.lang} ?? en`)
    return new Response(await renderLocaleMarkdown(page, params.lang ?? 'en'), {
      headers: {
        'Content-Type': `text/markdown`,
      },
    });
  }
}