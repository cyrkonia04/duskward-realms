// One data source, two presentations: stacked cards on mobile, real table on md+.
function LoreTable({ columns, rows }) {
  const primary = columns.find((c) => c.emphasis) ?? columns[0];
  const rest = columns.filter((c) => c !== primary);

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden space-y-4">
        {rows.map((row) => (
          <div key={row[primary.key]} className="bg-gothic-parchment/10 border border-gothic-gold/30 p-4">
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
            {rows.map((row) => (
              <tr key={row[primary.key]} className="border-t border-gothic-gold/15">
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LoreTable;