import { fetchLocaleString } from '$lib/i18n/index.js';

export const prerender = true;

export async function load({ cookies, url, parent }) {
  const lite = cookies.get('lite') === 'true';
  const { lang } = await parent();
  
  return { 
    lite,
    lang,
    t: {
      generic: {
        title: await fetchLocaleString("generic.title", lang),
      },
    },
  };
}

export type LoadData = {
  lite: boolean;
  lang: string;
  t: {
    generic: {
      title: string;
    };
    
  }
}