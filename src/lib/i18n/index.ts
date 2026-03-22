import { getCachedLocaleString, setCachedLocaleString, getCachedLocaleFragment, setCachedLocaleFragment } from "./cache";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const localeRoot = import.meta.dir
  ? join(import.meta.dir, '../../../locale')
  : join(dirname(fileURLToPath(import.meta.url)), '../../../locale');


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
    
    try {
      const json = JSON.parse(
        await Bun.file(join(localeRoot, lang, `${filePath}.json`)).text()
      );
      if (json[keyPath.join(".")]) {
        const result = String(json[keyPath.join(".")]);
        setCachedLocaleString(lang, path, result);
        return result;
      }
      
      const value = keyPath.reduce((obj, key) => obj?.[key], json);
      
      if (value !== undefined) {
        const result = String(value);
        setCachedLocaleString(lang, path, result);
        return result;
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
  try {
    const text = await Bun.file(join(localeRoot, lang, `${path}.md`)).text();
    setCachedLocaleFragment(lang, path, text);
    return text;
  } catch {
    if (lang === 'en') throw new Error(`missing locale fragment: ${path}`);
    return fetchLocaleFragment(path, 'en');
  }
}