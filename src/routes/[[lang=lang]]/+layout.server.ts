export const csr = false;

export async function load({ cookies, params }) {
  const lite = cookies.get('lite') === 'true';
  return { lite, lang: params.lang ?? 'en' };
}