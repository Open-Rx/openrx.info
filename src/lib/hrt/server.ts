import { fetchLocaleFragment } from '$lib/i18n/index.js';
export interface TableData {
	id: string;
	title: string;
	headers: string[];
	rows: string[][];
}

export async function loadPageMarkdown(fragments: string[], lang: string): Promise<string> {
	const parts = await Promise.all(fragments.map(f => fetchLocaleFragment(f, lang)));
	return parts.join('\n\n');
}

export function extractTables(markdown: string): TableData[] {
	const tables: TableData[] = [];
	const lines = markdown.split('\n');

	for (let i = 0; i < lines.length; i++) {
		const tableMatch = lines[i].match(/^\{%table id:\s*([^}]+?)\s*\}/);
		if (!tableMatch) continue;

		const id = tableMatch[1].trim();

		// find title from nearest preceding heading
		let title = id;
		for (let j = i - 1; j >= 0; j--) {
			if (lines[j].trim() === '') continue;
			const headingMatch = lines[j].match(/^#{1,6}\s+(.+)/);
			if (headingMatch) {
				title = headingMatch[1].replace(/:$/, '').trim();
			}
			break;
		}

		// find the markdown table following the marker
		let tableStart = -1;
		for (let j = i + 1; j < lines.length; j++) {
			if (lines[j].trim() === '' || lines[j].trim().startsWith('{%')) continue;
			if (lines[j].trim().startsWith('|')) {
				tableStart = j;
			}
			break;
		}

		if (tableStart === -1) continue;

		// collect all table lines
		const tableLines: string[] = [];
		for (let j = tableStart; j < lines.length; j++) {
			if (!lines[j].trim().startsWith('|')) break;
			tableLines.push(lines[j]);
		}

		if (tableLines.length < 3) continue; // need header + separator + at least one row

		const headers = parseTableRow(tableLines[0]);
		// tableLines[1] is the separator row — skip it
		const rows: string[][] = [];
		for (let j = 2; j < tableLines.length; j++) {
			rows.push(parseTableRow(tableLines[j]));
		}

		tables.push({ id, title, headers, rows });
	}

	return tables;
}

function parseTableRow(line: string): string[] {
	return line
		.split('|')
		.slice(1, -1)
		.map(cell => cell.trim());
}

function csvEscape(value: string): string {
	if (value.includes(',') || value.includes('"') || value.includes('\n')) {
		return `"${value.replace(/"/g, '""')}"`;
	}
	return value;
}

export function tablesToCsv(tables: TableData[]): string {
	return tables
		.map(table => {
			const header = `title: ${table.title}; id: ${table.id};`;
			const csvRows = [
				table.headers.map(csvEscape).join(','),
				...table.rows.map(row => row.map(csvEscape).join(','))
			];
			return `${header}\n${csvRows.join('\n')}`;
		})
		.join('\n--BARRIER--\n');
}

export function tablesToJson(tables: TableData[]): Record<string, object> {
	const result: Record<string, object> = {};

	for (const table of tables) {
		const properties: Record<string, object> = {};
		for (const header of table.headers) {
			properties[header] = { type: 'string' };
		}

		const data = table.rows.map(row => {
			const obj: Record<string, string> = {};
			table.headers.forEach((header, i) => {
				obj[header] = row[i] ?? '';
			});
			return obj;
		});

		result[table.id] = {
			schema: {
				$schema: 'http://json-schema.org/draft-07/schema#',
				title: table.title,
				type: 'array',
				items: {
					type: 'object',
					properties
				}
			},
			data
		};
	}

	return result;
}

// For .md output: remove the actual markdown tables, keeping only {%table id} markers
// so readers know to use .csv or .json for the data.
function stripMarkdownTables(markdown: string): string {
	const lines = markdown.split('\n');
	const out: string[] = [];
	let i = 0;
	while (i < lines.length) {
		const isTableMarker = /^\{%table id:/.test(lines[i]);
		if (isTableMarker) {
			out.push(lines[i]);
			i++;
			// skip any blank lines then the table block itself
			while (i < lines.length && lines[i].trim() === '') i++;
			while (i < lines.length && lines[i].trim().startsWith('|')) i++;
		} else {
			out.push(lines[i]);
			i++;
		}
	}
	return out.join('\n');
}

export function hrtServerGet(fragments: string[]) {
	return async function GET({ params }: { params: { lang?: string; format?: string } }) {
		const lang = params.lang ?? 'en';
		const markdown = await loadPageMarkdown(fragments, lang);

		if (params.format === '.md' || !params.format) {
			return new Response(stripMarkdownTables(markdown), { headers: { 'Content-Type': 'text/markdown' } });
		}

		const tables = extractTables(markdown);

		if (tables.length === 0) {
			return new Response('no tables found', {
				headers: { 'Content-Type': 'text/plain' },
				status: 404
			});
		}

		if (params.format === '.csv') {
			return new Response(tablesToCsv(tables), { headers: { 'Content-Type': 'text/csv' } });
		}

		if (params.format === '.json') {
			return new Response(JSON.stringify(tablesToJson(tables), null, 2), {
				headers: { 'Content-Type': 'application/json' }
			});
		}

		return new Response('unsupported format', { status: 400 });
	};
}
