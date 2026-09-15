// LAST GOOD PATH: how "Return the way you came" works across fresh
// document loads.
//
// react-router stamps its position counter (history.state.idx) only
// onto entries it creates itself. A URL typed or edited in the address
// bar starts a brand new entry with NO state, which the router
// initializes at idx 0, even when this tab was just looking at a real
// page one entry earlier. And the browser will not tell us where that
// earlier entry pointed: adjacent history entries are unreadable by
// design. So on a fresh 404 landing, neither the router nor the
// browser can answer "where was I?".
//
// The archive remembers for itself: Layout saves every path that
// renders, EXCEPT the one the 404 page claims for itself (the claim
// runs in NotFound's effect, which fires before Layout's effect,
// because child effects always run before their parent's).
// sessionStorage keeps the memory alive across reloads of this tab.
const KEY = 'duskward:lastGoodPath';

let claimedPath = null;
let lastGood = null;

export function claimNotFoundPath(path) {
  claimedPath = path;
}

export function rememberGoodPath(path) {
  if (path === claimedPath) return; // a lost record is never a good one
  lastGood = path;
  try {
    sessionStorage.setItem(KEY, path);
  } catch {
    // Storage unavailable (private mode etc.). The in-memory copy above
    // still covers every navigation within this document.
  }
}

export function lastGoodPath() {
  if (lastGood) return lastGood;
  try {
    lastGood = sessionStorage.getItem(KEY);
  } catch {
    lastGood = null;
  }
  return lastGood;
}
