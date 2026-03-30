// stringCache[lang][key] = { dies: timestamp, value: string }
const stringCache: Record<string, Record<string, { dies: number, value: string }>> = {};
const fragmentCache: Record<string, Record<string, { dies: number, value: string }>> = {};

// const TTL = 1000 * 60 * 60 * 24 * 7;
const TTL = 0; // for debug only

export function getCachedLocaleString(locale: string, key: string): string | null {
  if (!stringCache[locale] || !stringCache[locale][key]) return null;
  const entry = stringCache[locale][key];
  if (entry.dies > Date.now()) return entry.value;
  else delete stringCache[locale][key];
  return null;
}

export function setCachedLocaleString(locale: string, key: string, value: string): void {
  if (!stringCache[locale]) stringCache[locale] = {};
  stringCache[locale][key] = { dies: Date.now() + TTL, value };
}

export function getCachedLocaleFragment(locale: string, key: string): string | null {
  if (!fragmentCache[locale] || !fragmentCache[locale][key]) return null;
  const entry = fragmentCache[locale][key];
  if (entry.dies > Date.now()) return entry.value;
  else delete fragmentCache[locale][key];
  return null;
}

export function setCachedLocaleFragment(locale: string, key: string, value: string): void {
  if (!fragmentCache[locale]) fragmentCache[locale] = {};
  fragmentCache[locale][key] = { dies: Date.now() + TTL, value };
}

