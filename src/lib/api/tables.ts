export type Table = { id: string; headers: string[]; rows: string[][] }

export function extractTables(markdown: string): Table[] {
  const tablePattern = /^\{%table id:([^}]+)%\}\n((?:\|.+\n)+)/gm
  return [...markdown.matchAll(tablePattern)].map(([, id, tableBody]) => {
    const [headerRow, , ...dataRows] = tableBody.trim().split('\n')
    const headers = headerRow.split('|').slice(1, -1).map(h => h.trim())
    const rows = dataRows.map(r => r.split('|').slice(1, -1).map(c => c.trim()))
    return { id, headers, rows }
  })
}

export function tablesToCsv(tables: Table[]): string {
  return tables.map(t =>
    [t.headers, ...t.rows].map(r => r.join(',')).join('\n')
  ).join('\n\n')
}