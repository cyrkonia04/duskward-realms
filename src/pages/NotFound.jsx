import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import { claimNotFoundPath, lastGoodPath } from '@/utils/navMemory';

export default function NotFound() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // "Return the way you came" goes back to whatever page the visitor
  // was on before the mists took them. Two ways, tried in order:
  // 1. In-app navigation: react-router's own counter
  //    (history.state.idx) is above 0, so navigate(-1) pops exactly
  //    one entry back, leaving no duplicate of the return page on top
  //    of the history stack.
  // 2. A fresh landing (typed or edited URL, reload): the counter is 0
  //    and the router is blind, so we ask navMemory where this tab
  //    last rendered a real page. No memory either (brand new tab,
  //    outside link)? Then begin from the fire.
  const returnToLastPage = () => {
    const idx = window.history.state?.idx;
    if (typeof idx === 'number' && idx > 0) {
      navigate(-1);
      return;
    }
    const target = lastGoodPath();
    navigate(target && target !== pathname ? target : '/');
  };

  // Claim this path as "lost" BEFORE Layout's effect saves good paths
  // (child effects run before the parent's). Without the claim, Layout
  // would remember this dead end as the last good page.
  useEffect(() => {
    claimNotFoundPath(pathname);
  }, [pathname]);

  // OVERRIDE the Layout's path-segment fallback title ("Duskward Realms · Some").
  // Layout's own effect runs after this component's and would win, so we set
  // ours one frame later (rAF fires after all mount effects, before paint).
  // Navigating away re-runs Layout's effect, which restores the real title.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      document.title = 'Lost in the Mists · Duskward Realms';
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="pt-8 sm:pt-12 text-center">
      <PageHeader
        title="Lost in the Mists"
        subtitle="No record by this name sits in these halls"
        compact
      />

      <div className="max-w-xl mx-auto space-y-5 font-body text-gothic-parchment/80 leading-relaxed">
        <p>
          You asked the archives for <span className="font-mono text-sm text-gothic-bronze/90">{pathname}</span>,
          but no record answers to that name. Perhaps it was never
          transcribed, or the Rot may have reached it first. Your request has
          been filed; a Warden will attend to it in turn. The queue is long,
          and the Rot is patient.
        </p>
        <p className="text-gothic-parchment/60 text-sm italic">
          Not all who wander are lost — but this one, specifically, is.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-8">
        <Link
          to="/"
          className="border border-gothic-gold/40 bg-gothic-parchment/5 px-5 py-2.5 font-body text-sm text-gothic-gold hover:bg-gothic-parchment/15 hover:border-gothic-purple/50 transition-all duration-300"
        >
          Return to the fire
        </Link>
        <button
          type="button"
          onClick={returnToLastPage}
          className="font-body text-sm text-gothic-bronze hover:text-gothic-gold transition-colors"
        >
          Return the way you came →
        </button>
      </div>
    </div>
  );
}
