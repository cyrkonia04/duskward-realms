import { Fragment } from 'react';

// One data source, two presentations: stacked cards on mobile, real table on md+.
//
// GROUPED MODE (opt-in): if a row carries a `group` string, a divider is
// printed whenever that string changes from the previous row's — e.g. the
// Calendar's 28 Naming Days grouped into seven "Month of ..." bands.
// Rows without a `group` field render exactly as before.
function LoreTable({ columns, rows }) {
  const primary = columns.find((c) => c.emphasis) ?? columns[0];
  const rest = columns.filter((c) => c !== primary);

  // Walk the rows once, marking where each new group begins.
  const withGroups = rows.map((row, i) => ({
    row,
    groupStart: row.group && row.group !== rows[i - 1]?.group,
  }));

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden space-y-4">
        {withGroups.map(({ row, groupStart }) => (
          <Fragment key={row[primary.key]}>
            {groupStart && (
              <h3 className="pt-3 font-heading text-sm uppercase tracking-[0.25em] text-gothic-gold/90 text-center">
                {row.group}
              </h3>
            )}
            <div className="bg-gothic-parchment/10 border border-gothic-gold/30 p-4">
              <h4 className="font-heading text-gothic-gold text-lg">{row[primary.key]}</h4>
              <dl className="mt-3 space-y-2.5">
                {rest.map((col) => (
                  <div key={col.key}>
                    <dt className="font-body text-[11px] uppercase tracking-widest text-gothic-bronze">{col.label}</dt>
                    <dd className="font-body text-sm text-gothic-parchment/80 leading-relaxed">{row[col.key]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Fragment>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block rounded-lg border border-gothic-gold/20">
        <table className="w-full text-left font-body text-sm border-collapse">
          <thead>
            <tr className="bg-gothic-surface/60">
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3 font-heading text-gothic-gold tracking-wide text-sm">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {withGroups.map(({ row, groupStart }) => (
              <Fragment key={row[primary.key]}>
                {groupStart && (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-4 py-2.5 bg-gothic-surface/50 border-t border-gothic-gold/15 font-heading text-xs uppercase tracking-[0.25em] text-gothic-gold/80"
                    >
                      {row.group}
                    </td>
                  </tr>
                )}
                <tr className="border-t border-gothic-gold/15">
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`px-4 py-3 align-middle ${
                        col.emphasis ? 'text-gothic-gold/90 whitespace-nowrap' : 'text-gothic-parchment/80'
                      }`}
                    >
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LoreTable;
