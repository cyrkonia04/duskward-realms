import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import LoreTable from '@/components/ui/LoreTable';
import WikiLink from '@/components/ui/WikiLink';
import { peoplesCategories } from '@/data/world/peoples';
import { magicLede, magicSources, magicPractices, unbreakableRules } from '@/data/world/magic';
import { Link } from 'react-router-dom';

const sectionLinks = [
  { id: 'themes', label: 'Core Themes' },
  { id: 'wounding', label: 'The Great Wounding' },
  { id: 'magic', label: 'Magic' },
  { id: 'peoples', label: 'The Peoples' },
];

const themeCards = [
  { numeral: 'I', title: 'Atmosphere Over Action', text: 'The mood of a scene, the feeling of dread and beauty intertwined, matters more than the events themselves. A conversation in a misty graveyard carries more weight than a battle.' },
  { numeral: 'II', title: 'Angst & Melancholy', text: 'This is a world coping with eternity, loss, and the weight of terrible duties. It is a story about finding meaning as the light fades.' },
  { numeral: 'III', title: 'Gothic-Folkloric Fusion', text: 'The sorrowful elegance of gothic romance fused with the practical, earthy terror of old folk tales. That is the heart of this world.' },
];

export default function World() {
  return (
    <div className="pt-4 sm:pt-8">
      <PageHeader title="The World" subtitle="A realm wounded, fading, and stubbornly alive" compact />

      <p className="max-w-2xl mx-auto text-center font-body text-gothic-parchment/85 leading-relaxed">
        To know the Duskward Realms is to know a world that is dying — and whose
        people have refused to stop living. Below lie the feelings that shape
        every tale told here, the wound that scarred reality, the magic that
        leaks through it, and the peoples who endure in its shadow.
      </p>

      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6" aria-label="Section navigation">
        {sectionLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="font-body text-sm text-gothic-bronze hover:text-gothic-gold transition-colors">
            {link.label}
          </a>
        ))}
      </nav>

      {/* ================= CORE THEMES ================= */}
      <section className="mt-16">
        <SectionHeading id="themes" title="Core Themes & The World's Vibe" />
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {themeCards.map((theme) => (
            <div
              key={theme.numeral}
              className="bg-gothic-parchment/10 border border-gothic-gold/30 p-6 text-center hover:border-gothic-purple/40 transition-colors duration-300"
            >
              <div className="font-heading text-3xl text-gothic-gold/80">{theme.numeral}</div>
              <h3 className="font-heading text-gothic-gold text-lg mt-3 mb-2">{theme.title}</h3>
              <p className="font-body text-gothic-parchment/75 text-sm leading-relaxed">{theme.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= THE GREAT WOUNDING ================= */}
      <section className="mt-16">
        <SectionHeading
          id="wounding"
          title="The Great Wounding & The Grey Rot"
          lede="The defining tragedy of the current age."
          linkTo="/world/history"
          linkLabel="Explore the full History"
          />

        <div className="max-w-2xl mx-auto space-y-6 font-body text-gothic-parchment/85 leading-relaxed">
          <p className="first-letter:float-left first-letter:font-heading first-letter:text-6xl first-letter:leading-[0.8] first-letter:mr-3 first-letter:mt-1 first-letter:text-gothic-gold">
  The defining event of the current age was not a war or a plague, but a
  spiritual hemorrhage known as <strong className="text-gothic-gold/90">The Great Wounding</strong>.
  Its precise cause is lost to time — perhaps the felling of a world-tree,
  the breaking of a sacred oath, or the slaying of the last great
  land-spirits. The result was irrevocable: the boundaries between the
  mortal realm and the <WikiLink to="/regions">Twilight Deeps</WikiLink> frayed and tore.
        </p>
          <p>
            This created a slow, steady bleed of the world's vital essence: its
            color, its emotion, its very will to persist. This leakage is the{' '}
            <strong className="text-gothic-gold/90">Grey Rot</strong>. The Rot is
            not a physical plague, but a malaise of the soul. It manifests as a
            literal fading. Colors mute and grey. Sounds dull, as if heard through
            wool. Food loses its taste. People and places lose their vitality.
            Individuals grow listless and numb, hollow long before they physically
            waste away. The hold on joy grows more tenuous with each passing season.
          </p>
          <p>
  The only resistance comes from acts of great creativity, stubbornly
  defiant joy, <WikiLink to="/world/calendar">vibrant festivals</WikiLink>,
  and heartfelt faith.
          </p>
        </div>

        <blockquote className="max-w-xl mx-auto text-center mt-10 px-4">
          <p className="font-body italic text-gothic-gold/90 text-lg sm:text-xl leading-relaxed">
            "In a world growing numb, feeling anything deeply is a radical act."
          </p>
        </blockquote>
      </section>

      {/* ================= MAGIC ================= */}
      <section className="mt-16">
        <SectionHeading
          id="magic"
          title="The Nature of Magic"
          lede={magicLede}
          linkTo="/world/magic"
          linkLabel="Open the Magic chapter"
        />

        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h3 className="font-heading text-gothic-gold text-lg mb-3">The Three Sources</h3>
            <LoreTable
              columns={[
                { key: 'name', label: 'Source', emphasis: true },
                { key: 'nature', label: 'Nature' },
                { key: 'origin', label: 'Origin' },
              ]}
              rows={magicSources}
            />
          </div>

          <div>
            <h3 className="font-heading text-gothic-gold text-lg mb-3">The Three Practices</h3>
            <LoreTable
              columns={[
                { key: 'name', label: 'Practice', emphasis: true },
                { key: 'action', label: 'Action' },
                { key: 'cost', label: 'Cost' },
              ]}
              rows={magicPractices}
            />
          </div>

          <div className="border border-gothic-gold/30 p-6">
            <h3 className="font-heading text-gothic-gold text-sm tracking-widest uppercase mb-4 text-center">
              The Unbreakable Rules
            </h3>
            <ul className="space-y-3">
              {unbreakableRules.map((rule) => (
                <li key={rule} className="flex gap-3 font-body text-gothic-parchment/80 text-sm leading-relaxed">
                  <span className="text-gothic-bronze select-none" aria-hidden="true">†</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PEOPLES ================= */}
      <section className="mt-16">
        <SectionHeading
          id="peoples"
          title="The Peoples of the Duskward Realms"
          lede="In this age of fading light, old prejudices often give way to shared desperation. All races can be found anywhere, though some maintain stronger presences in their ancestral homelands."
          linkTo="/world/races"
          linkLabel="Open the Peoples index"
        />

        {peoplesCategories.map((category, i) => (
  <div key={category.id} className={`max-w-3xl mx-auto ${i > 0 ? 'mt-10' : ''}`}>
            <h3 className="font-heading text-gothic-gold text-xl tracking-wide">{category.title}</h3>
            <div className="mt-1 mb-4 w-16 border-t border-gothic-gold/30" />

            {category.standalone ? (
              <p className="font-body text-gothic-parchment/80 leading-relaxed">{category.standalone}</p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {category.peoples.map((people, i) => {
                  const spansFull =
                    category.peoples.length % 2 !== 0 && i === category.peoples.length - 1;
                  return (
                    <Link
                      key={people.slug}
                      to={`/world/races/${people.slug}`}
                      className={`block bg-gothic-parchment/10 border border-gothic-gold/30 p-5 transition-all duration-300 hover:border-gothic-purple/50 hover:bg-gothic-parchment/20 hover:-translate-y-1 ${
                        spansFull ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <h4 className="font-heading text-gothic-gold text-lg mb-2">{people.name}</h4>
                      <p className="font-body text-gothic-parchment/75 text-sm leading-relaxed">{people.description}</p>
                      <span className="mt-3 inline-block font-body text-xs text-gothic-bronze">Read more →</span>

                      {people.subraces && (
                        <div className="mt-4 space-y-3 border-t border-gothic-gold/20 pt-4">
                          {people.subraces.map((sub) => (
                            <div key={sub.name}>
                              <h5 className="font-heading text-gothic-bronze text-sm tracking-wide">{sub.name}</h5>
                              <p className="font-body text-gothic-parchment/70 text-sm leading-relaxed mt-1">{sub.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
