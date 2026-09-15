import OrnamentalDivider from '@/components/ui/OrnamentalDivider';

// END OF RECORD — the archival colophon that closes a page the way a
// file closes in the Hall of Whispers. Quiet by design: a baseline
// divider (the ladder's workhorse, never vesper here) and three small
// lines of institutional voice.
//
// Every page may carry a different Warden's signature; the defaults are
// the Calendar's signatory. Proposed touch: as the archive grows, the
// hall and archivist can rotate per wing of the collection.
export default function EndOfRecord({
  hall = 'the Hall of Whispers',
  archivist = 'Muirne Fionnuala',
  role = 'Senior Archivist',
}) {
  return (
    <div className="mt-16 text-center" role="note" aria-label="End of record">
      <OrnamentalDivider variant="baseline" lineClass="w-12" className="mb-6" />
      <p className="font-heading text-xs uppercase tracking-[0.35em] text-gothic-bronze">
        End of Record
      </p>
      <p className="font-body italic text-sm text-gothic-parchment/55 leading-relaxed mt-3 max-w-xl mx-auto">
        This document is kept in {hall}, Ashen Athenaeum. It may be consulted
        by Memory-Wardens and approved scholars. Do not remove from the archives.
      </p>
      <p className="font-body text-[11px] uppercase tracking-widest text-gothic-bronze/80 mt-3">
        {archivist}, {role}
      </p>
    </div>
  );
}
