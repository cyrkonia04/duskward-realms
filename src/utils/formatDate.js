// ISO -> "08 Sept 2026". The 'T00:00:00' suffix is load-bearing: a bare
// "2026-09-08" parses as UTC midnight, which renders as the PREVIOUS day
// in western timezones. Classic silent off-by-one.
export function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}