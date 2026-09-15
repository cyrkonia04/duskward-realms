import { Link } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import LoreTable from '@/components/ui/LoreTable';
import EndOfRecord from '@/components/ui/EndOfRecord';
import {
  calendarLede,
  calendarIntro,
  theThreeMeasures,
  timeVoices,
  months,
  unbound,
  greatUnbound,
  regionalNames,
  inPractice,
} from '@/data/world/calendar';

// The gap between two month bands — an Unbound Day, drawn as a skipped
// heartbeat. One dashed `deeps` rule per boundary: it REPLACES the gold
// rule of the month below it, never stacks with it. Spaced with `my-10`
// so the gap owns the breathing room the old border provided.
function UnboundGap() {
  return (
    <div className="flex items-center justify-center gap-3 my-10" role="presentation">
      <span className="w-12 border-t border-dashed border-gothic-deeps" />
      <span className="font-body italic text-[10px] uppercase tracking-[0.3em] text-gothic-deeps">
        an unbound day
      </span>
      <span className="w-12 border-t border-dashed border-gothic-deeps" />
    </div>
  );
}

export default function Calendar() {
  return (
    <div className="pt-4 sm:pt-8">
      <Breadcrumb items={[{ label: 'World', to: '/world' }, { label: 'Calendar' }]} />

      <PageHeader title="The Calendar" subtitle="Keeping the pulse of a wounded world" compact />

      {/* The page's single vesper ceremony — everything below is ledger work */}
      <OrnamentalDivider variant="vesper" className="mb-10" />

      {/* TIME, WOUNDED — why time is counted as it is */}
      <div className="max-w-2xl mx-auto space-y-5 font-body text-gothic-parchment/80 leading-relaxed">
        <p className="first-letter:font-heading first-letter:text-5xl first-letter:text-gothic-gold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1.5">
          {calendarIntro[0]}
        </p>
        {calendarIntro.slice(1).map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      {/* HOW THE DAY IS MEASURED — the pulse governs long time; the world governs short time */}
      <div className="mt-16">
        <SectionHeading
          id="measures"
          title="How the Day Is Measured"
          lede="No one counts moons to get through an afternoon. The pulse governs the long rhythm; daily life moves to smaller, observable beats."
        />
        <div className="max-w-4xl mx-auto border-y border-gothic-gold/15 py-6 grid sm:grid-cols-3 sm:divide-x divide-gothic-gold/15">
          {theThreeMeasures.map((measure) => (
            <div key={measure.name} className="px-6 first:pl-0 last:pr-0 py-4 sm:py-0">
              <h3 className="font-heading text-gothic-gold text-lg">{measure.name}</h3>
              <p className="font-body text-sm text-gothic-parchment/75 leading-relaxed mt-2">{measure.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-10 space-y-5">
          {timeVoices.map((voice, i) => (
            <blockquote
              key={voice.who}
              className={`border-l-2 border-gothic-gold/40 pl-4 ${i % 2 === 1 ? 'sm:ml-12' : ''}`}
            >
              <p className="font-body italic text-gothic-parchment/80 leading-relaxed">
                &ldquo;{voice.quote}&rdquo;
              </p>
              <cite className="not-italic font-body text-[11px] uppercase tracking-widest text-gothic-bronze mt-1.5 block">
                — {voice.who}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>

      {/* THE SEVEN MONTHS — a procession, not a grid: each month a phase of the world's condition */}
      <div className="mt-16">
        <SectionHeading
          id="months"
          title="The Seven Months"
          lede="Seven phases to a cycle, four Naming Days to a phase, and no weeks anywhere — the old empires' tidy squares did not survive the Wounding."
        />
        <div className="max-w-3xl mx-auto">
          {months.map((month, i) => (
            <div key={month.name}>
              {/* The unbound gap leads; only the first month keeps a gold
                  rule of its own — every later month is preceded, not ruled */}
              {i > 0 && <UnboundGap />}
              <section className={i === 0 ? 'border-t border-gothic-gold/25 pt-6' : 'pt-6'}>
                <div className="grid sm:grid-cols-[72px_1fr] gap-x-5 items-baseline">
                  <span className="font-heading text-3xl text-gothic-gold/35 text-right hidden sm:block">
                    {month.numeral}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading text-2xl text-gothic-gold sm:hidden">{month.numeral}.</span>
                      <h3 className="font-heading text-2xl text-gothic-gold">{month.name}</h3>
                    </div>
                    <p className="font-body italic text-gothic-parchment/50 text-sm mt-1">{month.whisper}</p>
                  </div>
                </div>
                <dl className="mt-4">
                  {month.days.map((day) => (
                    <div
                      key={day.name}
                      className="grid sm:grid-cols-[220px_1fr] gap-x-6 gap-y-1 py-3.5 border-b border-gothic-gold/10 last:border-b-0"
                    >
                      <dt className="font-body text-xs sm:text-sm uppercase tracking-widest text-gothic-bronze pt-0.5">
                        {day.name}
                      </dt>
                      <dd className="font-body text-sm text-gothic-parchment/75 leading-relaxed">{day.condition}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          ))}
        </div>
      </div>

      {/* THE UNBOUND DAYS — the skipped heartbeats, explained */}
      <div className="mt-16">
        <SectionHeading
          id="unbound"
          title="The Days That Belong to No Month"
          lede="One between each month, and once more at the cycle's end. Not measured. Not named. The pulse falters, and the world grows thin."
        />
        <p className="max-w-2xl mx-auto font-body text-gothic-parchment/80 leading-relaxed">{unbound.intro}</p>

        <div className="max-w-3xl mx-auto mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <h3 className="font-heading text-gothic-gold text-sm uppercase tracking-widest">{unbound.effectsTitle}</h3>
            <ul className="mt-3">
              {unbound.effects.map((effect) => (
                <li
                  key={effect}
                  className="font-body text-sm text-gothic-parchment/75 leading-relaxed py-2.5 border-b border-gothic-purple/20 last:border-b-0"
                >
                  {effect}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-gothic-gold text-sm uppercase tracking-widest">
              {unbound.superstitionsTitle}
            </h3>
            <ul className="mt-3">
              {unbound.superstitions.map((superstition) => (
                <li
                  key={superstition}
                  className="font-body text-sm text-gothic-parchment/75 leading-relaxed py-2.5 border-b border-gothic-purple/20 last:border-b-0"
                >
                  {superstition}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The Great Unbound — the shrine divider's home: a mourning of time itself */}
        <section className="max-w-3xl mx-auto mt-10 rounded-lg border border-gothic-purple/40 bg-gothic-purple/10 p-6 sm:p-8 text-center">
          <OrnamentalDivider variant="shrine" lineClass="w-12" className="justify-center mb-5" />
          <h3 className="font-heading text-xl text-gothic-gold">The Great Unbound</h3>
          <p className="font-body text-sm text-gothic-parchment/75 leading-relaxed mt-3 max-w-xl mx-auto">
            {greatUnbound}
          </p>
        </section>
      </div>

      {/* ONE PULSE, MANY NAMES — regional names for the same heartbeats */}
      <div className="mt-16">
        <SectionHeading
          id="regional"
          title="One Pulse, Many Names"
          lede="Culture differs, history differs — but the sky is the same sky. Every land names the same heartbeats in its own tongue."
        />
        <p className="max-w-2xl mx-auto font-body text-gothic-parchment/80 leading-relaxed mb-8">{regionalNames.prose}</p>
        <div className="max-w-4xl mx-auto">
          <LoreTable columns={regionalNames.columns} rows={regionalNames.rows} />
        </div>
      </div>

      {/* SPEAKING OF TIME — dates, moons, and the counting of a life */}
      <div className="mt-16">
        <SectionHeading
          id="speaking"
          title="Speaking of Time"
          lede="How a date is said aloud, how a life is counted, and why the silences between heartbeats are not to be trusted."
        />
        <div className="max-w-2xl mx-auto">
          <div className="rounded-lg border border-gothic-gold/25 bg-gothic-surface/40 p-5 text-center">
            <p className="font-mono text-sm text-gothic-gold/90">{inPractice.dateFormat}</p>
          </div>
          <ul className="mt-5 space-y-2">
            {inPractice.dateExamples.map((example) => (
              <li key={example} className="font-body text-sm text-gothic-parchment/75 leading-relaxed">
                {example}
              </li>
            ))}
          </ul>
          <p className="font-body text-gothic-parchment/80 leading-relaxed mt-6">{inPractice.moons}</p>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mt-8">
            <div>
              <h3 className="font-heading text-gothic-gold text-sm uppercase tracking-widest">{inPractice.ageTitle}</h3>
              <p className="font-body text-sm text-gothic-parchment/75 leading-relaxed mt-2">{inPractice.age}</p>
            </div>
            <div>
              <h3 className="font-heading text-gothic-gold text-sm uppercase tracking-widest">
                {inPractice.birthTitle}
              </h3>
              <p className="font-body text-sm text-gothic-parchment/75 leading-relaxed mt-2">{inPractice.birth}</p>
            </div>
          </div>
        </div>
      </div>

      {/* The record closes, the way a file closes in the Hall of Whispers */}
      <EndOfRecord />

      <div className="text-center mt-14">
        <Link to="/world" className="font-body text-gothic-bronze hover:text-gothic-gold transition-colors text-sm">
          ← Back to The World
        </Link>
      </div>
    </div>
  );
}
