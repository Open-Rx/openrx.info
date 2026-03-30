import { fetchLocaleString } from '$lib/i18n/index.js';

export const prerender = false;

async function readHostname(path: string): Promise<string | null> {
  try {
    return (await Bun.file(path).text()).trim() || null;
  } catch {
    return null;
  }
}

export async function load({ setHeaders, parent }) {
  const { lang } = await parent();

  setHeaders({
    'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
  });

  const [onion, i2p] = await Promise.all([
    readHostname('/keys/tor/hostname'),
    readHostname('/keys/i2p/hostname'),
  ]);

  return {
    lite: false,
    lang,
    onion,
    i2p,
    t: {
      generic: {
        title: await fetchLocaleString('generic.title', lang),
      },
    },
  };
}

export type LoadData = Awaited<ReturnType<typeof load>>;
