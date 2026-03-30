import { fetchLocaleFragment, fetchLocaleString } from '$lib/i18n/index.js';
import { renderFragmentToHtml, renderLocaleMarkdown } from '$lib/i18n/render-md.js';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
  return [
    { lang: 'en', format: '' },
    { lang: '', format: '' }
  ];
};

export async function load({ cookies, url, parent }) {
  const lite = false;
  const { lang } = await parent();
  
  return { 
    lite,
    lang,
    t: {
      ui: {
        about: {
          title: await fetchLocaleString("ui.about.title", lang),
          question: {
            introduction: await fetchLocaleString("ui.about.question.introduction", lang)
          },
          introduction: await renderFragmentToHtml(await fetchLocaleFragment("ui/about/introduction", lang))
        }
      }
    },
  };
}

export type LoadData = {
  lite: boolean;
  lang: string;
  t: {
    ui: {
      about: {
        title: string;
        question: {
          introduction: string;
        };
        introduction: string;
      };
    };
  };
}