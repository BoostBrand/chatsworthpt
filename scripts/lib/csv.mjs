// Minimal RFC 4180 CSV reader (quoted fields, doubled quotes, CRLF or LF). No dependencies.
import { readFileSync } from 'node:fs';

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let i = 0;
  let quoted = false;
  while (i < text.length) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        quoted = false; i++; continue;
      }
      field += c; i++; continue;
    }
    if (c === '"') { quoted = true; i++; continue; }
    if (c === ',') { row.push(field); field = ''; i++; continue; }
    if (c === '\r') { i++; continue; }
    if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; i++; continue; }
    field += c; i++;
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.length > 1 || (r.length === 1 && r[0] !== ''));
}

export function readCsvObjects(path) {
  const [head, ...rest] = parseCsv(readFileSync(path, 'utf8'));
  return rest.map((r) => Object.fromEntries(head.map((h, idx) => [h, r[idx] ?? ''])));
}
