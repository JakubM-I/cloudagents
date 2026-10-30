# CA-008 — ESABMig C420 / C420w parts catalog redesign

A redesign proposal for the spare-parts catalog page of one device (exploded diagrams + parts tables).

- `original.html` — the page as supplied (reference, unchanged).
- `index.html` — the redesigned page. Single file, no dependencies, opens from `file://`.

UI copy is Polish because the page targets a Polish shop. Part numbers, prices, stock levels and diagrams are illustrative.

## Problems in the original

| Area | Problem |
| --- | --- |
| Finding a part | No search. The only way in is scanning diagrams and tables section by section. |
| Diagram ↔ table | Position numbers are static. Nothing links a number on the drawing to its table row. |
| Device variants | C420 / C420w / C420s / C420sw are listed but do nothing. Variant-specific parts and the cooling section are not filterable. |
| Availability column | Labelled "Availability" but holds only a link. No stock state, lead time or price. |
| Mixed purchase paths | Shop parts and "ask about this part" are separate dead ends; you cannot collect several parts into one order or one inquiry. |
| Device card | Large fake illustration; device numbers repeat the same label ("Numer urządzenia") twice. |
| Placeholder sections | Cooling and electrical sections contain designer notes instead of an actionable state. |
| Help | The help box sits inside the first section only; the closing CTA just links back to the category. |
| Mobile | Five-column tables need horizontal scrolling; the diagram is shrunk with no way to zoom. |

## What the redesign changes

1. **Compact device bar** with a variant selector (`Wszystkie / C420 / C420w / C420s / C420sw`). The choice filters parts and sections and is remembered per browser. Device numbers and serial-number help move into a disclosure.
2. **Sticky toolbar**: search by name, catalogue number (spaces ignored) or position number; "in stock only" toggle; section tabs with live counts and scroll-spy.
3. **Linked diagram and list**: hovering a row highlights the hotspot and its leader line, and vice versa. Clicking a hotspot scrolls to and flashes the row; the position badge in a row points back to the drawing. Hotspots are real buttons with labels. Filtered-out positions are dimmed on the drawing. "Powiększ" opens the drawing in a modal for detail and on phones.
4. **Part rows that answer "can I get it?"**: status pill (in stock / to order / quote), lead time, gross price, copy-to-clipboard for the catalogue number, variant tags.
5. **One parts list for both paths**: "Do koszyka" and "Do zapytania" add to a single list shown in a bottom bar. The drawer splits it into a cart group (quantities, total, go to cart) and a quote group with a short inquiry form (e-mail, serial, variant, notes).
6. **Actionable empty sections**: "diagram in preparation" with an "ask about a part from this assembly" button that adds a free-form item to the inquiry. Sections that do not apply to the chosen variant say so.
7. **Single help block** at the end with the three facts needed for identification and contact options.
8. **Mobile**: rows become cards (position, name, status/price, full-width action); toolbar tabs scroll horizontally; no horizontal page overflow.

## Notes for implementation

- The mock renders rows from a JS array. In production, render the list server-side (SEO, no-JS) and add the interactions on top.
- Hotspot positions are stored as diagram coordinates (`viewBox` 400×300) so they map onto real scanned drawings the same way.
- Variant applicability (`variants`) per part and per section is the data the shop needs to add; without it the variant filter can only hide whole sections.
