// THE BEAST REGISTRY — every full creature record, one file per beast.
// The cabinet rows in bestiary.js stay short on purpose; the depth
// lives here. A cabinet row gains its link the moment a record exists
// with a matching cabinet/slug pair, so shelves and records stay
// decoupled: write the file, name the row, and the archive wires
// itself.

import grimlings from './grimlings';
import phookas from './phookas';
import nixalka from './nixalka';

export const beasts = [grimlings, phookas, nixalka];

// KEY: 'cabinet/slug' — mirrors the route /bestiary/:cabinetId/:beastSlug
export const beastByRoute = Object.fromEntries(
  beasts.map((beast) => [`${beast.cabinet}/${beast.slug}`, beast]),
);
