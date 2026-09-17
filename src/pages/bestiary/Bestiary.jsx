import { Link } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import EndOfRecord from '@/components/ui/EndOfRecord';
import {
  bestiaryIntro,
  rotInfluence,
  bestiaryNature,
  classificationNote,
  cabinets,
  spiritsNote,
} from '@/data/world/bestiary';

// THE BESTIARY HUB — tier one of three. This page classifies; each
// cabinet below leads to its own category page (/bestiary/<slug>),
// where the records are listed; and each record eventually grows a
// full page of its own. No entries live here: the archive would not
// reshelve every cabinet when one gains a new creature.
const cabinetNumerals = ['I', 'II', 'III'];

export default function Bestiary() {
  return (
    <div className="pt-4 sm:pt-8">
      <Breadcrumb items={[{ label: 'Bestiary' }]} />

      <PageHeader title="The Bestiary" subtitle={bestiaryIntro.subtitle} compact />

      {/* The page's single vesper ceremony — everything below is filing work */}
      <OrnamentalDivider variant="vesper" className="mb-10" />

      {/* A WORLD OF HUNGRY SHADOWS — the author's overview, verbatim */}
      <div className="max-w-2xl mx-auto space-y-5 font-body text-gothic-parchment/80 leading-relaxed">
        <p className="first-letter:font-heading first-letter:text-5xl first-letter:text-gothic-gold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1.5">
          {bestiaryIntro.paragraphs[0]}
        </p>
        <p>{bestiaryIntro.paragraphs[1]}</p>
        {/* The beat stands alone: one sentence, its own line */}
        <p className="font-heading text-gothic-gold/90 text-lg">
          {bestiaryIntro.paragraphs[bestiaryIntro.beatIndex]}
        </p>
        <p>{bestiaryIntro.paragraphs[3]}</p>
      </div>

      {/* THE GREY ROT'S INFLUENCE — what the Rot actually does to living things */}
      <div className="mt-16">
        <SectionHeading id={rotInfluence.id} title={rotInfluence.title} />
        <p className="max-w-2xl mx-auto font-body text-gothic-parchment/80 leading-relaxed">
          {rotInfluence.text}
        </p>
      </div>

      {/* THE NATURE OF THE BESTIARY — what this archive is and is not */}
      <div className="mt-16">
        <SectionHeading id={bestiaryNature.id} title={bestiaryNature.title} />
        <p className="max-w-2xl mx-auto font-body text-gothic-parchment/80 leading-relaxed">
          {bestiaryNature.text}
        </p>
      </div>

      {/* A NOTE ON CLASSIFICATION — three cabinets, each leading to its own page */}
      <div className="mt-16">
        <SectionHeading id={classificationNote.id} title={classificationNote.title} />
        <p className="max-w-2xl mx-auto font-body text-gothic-parchment/80 leading-relaxed">
          {classificationNote.text}
        </p>

        <div className="max-w-3xl mx-auto mt-10 space-y-5">
          {cabinets.map((cabinet, i) => (
            <Link
              key={cabinet.slug}
              to={`/bestiary/${cabinet.slug}`}
              className="group block border border-gothic-gold/30 bg-gothic-parchment/10 hover:bg-gothic-parchment/15 hover:border-gothic-gold/50 transition-colors duration-300 p-6 sm:p-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gothic-bronze">
                  Cabinet {cabinetNumerals[i]}
                </p>
                <p className="font-mono text-[11px] text-gothic-bronze/80 whitespace-nowrap">
                  {cabinet.entries.length} records
                </p>
              </div>
              <h3 className="font-heading text-xl text-gothic-gold mt-2">{cabinet.title}</h3>
              <p className="font-body text-sm text-gothic-parchment/75 leading-relaxed mt-2.5">
                {cabinet.lede}
              </p>
              <span className="mt-4 inline-block font-body text-xs text-gothic-bronze group-hover:text-gothic-gold transition-colors">
                Enter the cabinet →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* A NOTE ON SPIRITS & TRUE ELEMENTALS — why they are not filed here */}
      <div className="mt-16">
        <SectionHeading id={spiritsNote.id} title={spiritsNote.title} />
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-gothic-parchment/80 leading-relaxed">
            {spiritsNote.text}
          </p>
          <p className="text-center mt-4">
            <Link
              to={spiritsNote.linkTo}
              className="font-body text-sm text-gothic-bronze hover:text-gothic-gold transition-colors"
            >
              {spiritsNote.linkLabel} →
            </Link>
          </p>
        </div>
      </div>

      {/* The record closes, the way a file closes in the Hall of Whispers */}
      <EndOfRecord />
    </div>
  );
}
