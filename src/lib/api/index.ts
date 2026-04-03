import { fetchLocaleFragment } from '$lib/i18n'
import { extractTables, tablesToCsv } from './tables'

export async function loadPage(sections: string[], lang: string) {
  const fragments = await Promise.all(
    sections.map(s => fetchLocaleFragment(s, lang))
  )
  const raw = fragments.join('\n\n')

  return {
    markdown: () => raw,
    json:     () => extractTables(raw),
    csv:      () => tablesToCsv(extractTables(raw)),
  }
}