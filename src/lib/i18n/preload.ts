import { getCachedLocaleString, setCachedLocaleString, getCachedLocaleFragment, setCachedLocaleFragment } from "./cache";
// eslint-disable-file @typescript-eslint/no-explicit-any
// ^ we need any because we cant have cyclical types and we dont know the structure of the locale files
const LOCALE_STRINGS = import.meta.glob('/locale/**/*.json');
const LOCALE_FRAGMENTS = import.meta.glob('/locale/**/*.md', { 
  query: '?raw', 
  import: 'default' 
});

export async function fetchLocaleString(
  path: string,
  lang: string
): Promise<string> {
  const cached = getCachedLocaleString(lang, path);
  if (cached) return cached;
  
  const parts = path.split('.');
  
  for (let i = parts.length - 1; i >= 1; i--) {
    const filePath = parts.slice(0, i).join('/');
    const keyPath = parts.slice(i);
    
    const globPath = `/locale/${lang}/${filePath}.json`;
    
    try {
      // if file exists, load and check it
      if (LOCALE_STRINGS[globPath]) {
        const module = await LOCALE_STRINGS[globPath]() as { default: any };
        const json = module.default;

        const flatKey = keyPath.join(".");
        if (json[flatKey] !== undefined) {
          const result = String(json[flatKey]);
          setCachedLocaleString(lang, path, result);
          return result;
        }
        
        const value = keyPath.reduce((obj: any, key: string) => obj?.[key], json);
        
        if (value !== undefined) {
          const result = String(value);
          setCachedLocaleString(lang, path, result);
          return result;
        } 
      }
    } catch {
      continue;
    }
  }
  
  // fall back to english
  if (lang !== 'en') return fetchLocaleString(path, 'en');
  throw new Error(`missing locale string: ${path}`);
}

export async function fetchLocaleFragment(
  path: string,
  lang: string
): Promise<string> {
  const cached = getCachedLocaleFragment(lang, path);
  if (cached) return cached;  
  
  const globPath = `/locale/${lang}/${path}.md`;

  try {
    // if exists, fetch.
    if (LOCALE_FRAGMENTS[globPath]) {
      const text = await LOCALE_FRAGMENTS[globPath]() as string;
      setCachedLocaleFragment(lang, path, text);
      return text;
    }
    throw new Error('Fragment not found in glob map');
  } catch {
    if (lang === 'en') throw new Error(`missing locale fragment: ${path}`);
    return fetchLocaleFragment(path, 'en');
  }
}