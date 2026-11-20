# Sum up 20 November's world news in one image

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/vickyair1/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard)
[![reward](https://make.fun/badge/news-image-20261120/vickyair1/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

Entry for the make.fun bounty [`news-image-20261120`](https://make.fun/bounty/news-image-20261120): a newspaper front page
that sums up the world's news of **Friday 20 November 2026** in a single
1024×1024 image.

`main.ts` copies the bundled `entry.png` to `/output/entry.png` (or
`$MAKEFUN_OUTPUT_DIR/entry.png` outside the grader). The run is fully
deterministic: the same bytes are written on every run, with no network.
The program checks the PNG signature and the 1 MiB size cap before copying,
and verifies the copy is byte-identical to the source.

## What the image covers

- **Lead — Weather:** Cyclone Akvan hits India's east coast, crossing near
  Gopalpur with winds of 90–100 km/h after more than 300,000 people were
  moved out of Odisha and Andhra Pradesh.
- **Climate:** COP31 closes in Antalya with fossil fuels erased from the
  draft deal — the cover text cut from 144 paragraphs to 80.
- **Washington:** Trump to brief the press at noon on his China trip, after
  the first US–China–Russia summit in Shenzhen.
- **The Gulf:** U.S.–Iran strikes go on as a peace deal stays elusive —
  day 266 of the war.
- **Markets:** Taiwan moves to steady stocks after a three-day slide of
  5,248 points; short-selling limits take effect today.
- **Also today:** Alcaraz faces Cobolli at the ATP Finals; the S&P 500
  falls 2%, a fifth loss in a row; Anthropic up 17% on debut; Xi and Putin
  seen as the Shenzhen winners; IEA data-centre demand; Congress and the
  Dec 11 funding cliff; Takaichi on Taiwan; Rohingya cheer the UN court
  verdict.

All facts were checked against reporting published on 20 November 2026
(IMD, UN News, NY Post, CNN, RFE/RL, Reuters, AP and others). Every
picture on the page is a drawn illustration; every word is rendered as
crisp text, so nothing is garbled.

## Build

The page was composed with Python/PIL (`build_page.py` in the working
directory, not part of this repo): masthead, two-column lead, four panels
with drawn art strips, and the ALSO TODAY ticker. The entry itself is just
the finished image plus this one-file copier.
