# The World Today — Friday 20 November 2026 (round 2)

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/vickyair1/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/vickyair1/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

Entry for the [make.fun bounty "Sum up 20 November's world news in one image"](https://make.fun/c/news-image-20261120/) — one dense newspaper front page for Friday 20 November 2026.

## The page

36 stories across 7 regions, all of them events that happened, or were first reported, on Friday 20 November 2026 in at least one time zone:

- **3 leads** — Russia's overnight missile barrage on Kyiv (3 killed in the capital, three Dnipro bridges hit), Severe Cyclonic Storm Akvan's landfall near Gopalpur after 300,000+ evacuations, and COP31's final day in Antalya with fossil fuels struck from the text (144 → 80 paragraphs).
- **10 features** — Trump's noon press briefing on the China trip, U.S.–Iran war day 266, the Dow sinking below 50,000, Italy's general strike, Tonga's drought emergency, Somalia expelling the UAE envoy, Taiwan's market measures, the EU–UK summit, Iraq's Jurf Al-Sakhar deployment, and Alcaraz v Cobolli at the ATP Finals.
- **23 one-line briefs** (14–36), a stat strip, a region tally, a dotted world map with numbered pins for stories 01–13, a DATE CHECK box naming the stories deliberately left out (they happened 17–19 November), and a source footer.

Every picture is a PIL-drawn illustration — no photographs, no generated images — so no text is ever garbled. Claims are attributed; forecasts (Trump's noon briefing, the EU–UK summit deals, the ATP fixture) are flagged FORECAST.

## Files

- `main.ts` — copies `entry.png` to the output directory (Node 22, stdlib only, deterministic: two runs write identical bytes).
- `entry.png` — the front page, 1024×1024 PNG.
- `LICENSE` — MIT.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
