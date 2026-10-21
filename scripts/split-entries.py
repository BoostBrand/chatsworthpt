"""Splits the blueprint into one text file per page (the subagent's spec) and writes the SEO fields of every
entry to reference/blueprint-seo.json for the content validator.
Usage: python3 -I scripts/split-entries.py <out-dir> [P-007 P-008 ...]"""
import json, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'scripts/lib'))
import blueprint  # noqa: E402

out = Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
ids = sys.argv[2:] or blueprint.entry_ids()
seo = {pid: blueprint.seo(pid) for pid in blueprint.entry_ids()}
(ROOT / 'reference/blueprint-seo.json').write_text(json.dumps(seo, indent=1, ensure_ascii=False) + '\n')
for pid in ids:
    e = blueprint.entry(pid)
    lines = [f"# {e['heading']}", '']
    for k, v in e['fields'].items():
        lines.append(f'## {k}')
        lines.append(v)
        lines.append('')
    (out / f'{pid}.md').write_text('\n'.join(lines), encoding='utf-8')
print(f'{len(ids)} entries written to {out}; reference/blueprint-seo.json updated')
