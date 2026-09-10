import { useEffect, useState } from 'react';

// CUSTOM HOOK: all fetch plumbing in one place, so pages just ask for a URL
// and render whichever of the three states they got.
export default function useFetch(url) {
  // ONE state object, not three separate useStates — a single `status`
  // makes impossible combinations (loading AND error) unrepresentable.
  const [state, setState] = useState({ status: 'loading', data: null, error: null });

  useEffect(() => {
    // AbortController: if the component unmounts (or StrictMode double-runs
    // this effect in dev), the in-flight request is cancelled instead of
    // resolving against a dead component or racing a newer one.
    const controller = new AbortController();
    setState({ status: 'loading', data: null, error: null });

    fetch(url, { signal: controller.signal })
      .then((res) => {
        // GOTCHA: fetch does NOT reject on 404 — it happily resolves.
        // Without this check, a missing file surfaces later as a confusing
        // JSON parse error instead of a clean "HTTP 404".
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setState({ status: 'success', data, error: null }))
      .catch((err) => {
        if (err.name === 'AbortError') return; // our own cleanup, not a failure
        setState({ status: 'error', data: null, error: err });
      });

    return () => controller.abort();
  }, [url]);

  return state;
}