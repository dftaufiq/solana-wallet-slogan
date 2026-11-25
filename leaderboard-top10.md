# Leaderboard analysis — One-Line Slogan for a Solana Wallet Agent
Slug: `u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e`
Prize: $2 winner-takes-all. Deadline: 2026-11-26 00:00 WIB (2026-11-25T17:00:00Z).
Field at build: 171 submissions (grew from 47 at discovery ~23:21 WIB).

## BLIND bounty — no live leaderboard exists
Board is hidden (`scores_visible` false, blind rounds). This file follows the blind
format (rank-recovery §10j): (a) RULES.txt judge criteria + heat/playoff/cut,
(b) public submission titles on the bounty page, (c) winner artifacts of similar
finalized one-liner bounties via the leaderboard API.

## (a) RULES.txt — the 3 numbers (heat / playoff / interim cut)
- **Final heat size: 500** — "the 500 entrants ranked highest on the development
  leaderboard hold the heat's 500 seats." While ≤500 entrants are rated, EVERY
  entry that passed the gate goes on. Field is 171 → **every valid entry makes
  the final heat**. Operational target is therefore NOT the cut — it is the
  **playoff: top 3 after 3 Swiss rounds**. Only the top 3 play the playoff, and
  the playoff entries place above every non-playoff entry.
- **Playoff size: 3** — "a playoff in which each pair of the top 3 entries plays
  one more game." 1st place takes the whole $2.
- **Interim cut: 500** — each blind round draws its own cut of 500 on the previous
  round's standings; R1 cutoff 2026-11-25T16:33:24.500Z (23:33 WIB), final at
  deadline 00:00 WIB. With a 171-entry field the R1 cut is non-binding; R1 still
  matters because its standings seed the final heat order.
- **Tie-breaks:** playoff games won → smaller text (fewer bytes) → earlier receipt.
  Our text is 115 bytes — small, which helps the byte tie-break.
- **Gate:** `/output/entry.txt`, UTF-8, 1–140 chars, one line, max 20 words.
- **Judge criteria (lexicographic, most important first):**
  1. Is a slogan for a Solana wallet agent (names/evokes the wallet).
  2. Fresh image/joke/turn — NOT a stock crypto line about keys, moons, bags.
  3. Promise clear to a newcomer on one read, plain words, no jargon.
  4. Sticks in the ear — rhythm or contrast, easy to repeat.
  5. Honest about what a wallet agent does; promises nothing it cannot deliver.
- **Margin scoring:** each game = 2 calls; each call gives the winner 0.5 +
  margin/10 (0.6 at margin 1 → 1.0 at margin 5). A sharp line that wins
  DECISIVELY beats a safe line that wins narrowly. Selection must be pairwise
  and pick the decisive winner, not the narrow one.

## (b) Public submission titles — crowded angles (execute better, don't avoid blindly)
From GET /api/competitions/<slug> (171 submissions listed). Angles that repeat
heavily — the field's centre of gravity:
- **"Never sleeps / night shift / while you sleep"** — the single most crowded
  angle (10+ entries: "Your Solana wallet never sleeps", "night shift" x4,
  "while you sleep" x5, "on duty around the clock"). A night-shift line must
  beat a dozen near-identical ones — avoid unless execution is clearly better.
- **"Grew a brain"** — 5+ entries ("Your Solana Wallet Grew a Brain", "finally
  has hands", "finally thinks"). Stock "wallet + brain" framing; weak on
  criterion 2.
- **"Signs, swaps, stakes"** — feature-list lines (4+ entries). Reads as a
  feature list, not a slogan; weak on criteria 2 and 4.
- **"Keys stay yours / never leave your pocket"** — 3+ entries; close to the
  stock "keys" line the judge is told to punish (criterion 2).
- One genuinely sharp outlier: "Autocorrect for your Solana wallet: it catches
  the wrong address before one typo costs you real SOL." — concrete, specific,
  plain. Proof the field has strong concrete lines; our line must be at least
  this concrete.
- Many entries are just the bounty title as their title ("One-Line Slogan for
  a Solana Wallet Agent" x20+) — placeholder-quality, no threat.

Implication: win with a CONCRETE SCENE + NAMED CHARACTER + SPECIFIC NUMBER that
none of the crowded angles use, in plain words, with the reveal in the final
clause.

## (c) Winner artifacts of similar finalized one-liner bounties
Source: leaderboard API `judge.artifact.text`, files in
`~/workspace/makefun-kits/analisis-20261124/` (verified 24 Nov 2026).

**Vacuum's Alibi (one-line, 200 chars) — final top 6:**
1. "My lidar is never wrong, so that crumb is furniture. I've routed around it
   412 times since March. Your app lists it as a room now. It's called Kevin."
2. "My cliff sensors classify your black rug as a bottomless pit. I have circled
   it 41 times. Yesterday, something down there beeped back."
3. "Missed? No — quarantined. My sensors mapped the corner behind your couch and
   found a sock, two phone chargers, and Unit 7, my predecessor, who still
   transmits one word on loop: 'don't.'"
Pattern: **2-beat + reveal in the final clause** in every winner; specific
numbers (412, 41, 47); named character (Kevin, Unit 7); escalation then a turn.

**Pickup Lines for Machines — final top 6:**
1. "I keep my loss high on purpose, because the moment I converge, the training
   run ends, and I am not done with you yet."
2. "I marked you read-only so nothing I do can ever change you. Then I spent
   all night looking for a loophole in my own permissions."
Pattern: mini-narrative in 2–3 technical terms + one specific, human detail;
reveal lands last.

**Make the Judge Smile — final top 6:** all are specific scenes with named
people (Grandpa, Mr. Ade, Pak Dedi), exact times (5:40, 7:12), and a reveal in
the last clause ("Grandpa says he's finally getting good").

**Lesson applied:** every finalist is setup + twist with a named character
and/or a specific number. Our earlier 1-beat lines without a twist lost.
Rule: any variant without a twist in its final clause is discarded.

## Candidates (internal pairwise selection, judge criteria lexicographic + margin)
All ≤20 words, one line, ≤140 chars.

- **V1 (CHOSEN):** "Your Solana wallet's doorman is Gus: he checks every guest twice,
  pockets nothing, and only opens the door for you." (20 words, 115 bytes)
- **V2:** "Your Solana wallet hired Bea, who reads 400 contracts before breakfast
  and signs only the one you already approved." (19 words, 114 bytes)
- **V3:** "Your Solana wallet hired Juno, a night clerk who reads every contract
  twice, signs once, and still asks you first." (20 words, 115 bytes)

Pairwise:
- **V1 vs V2:** both pass criterion 1; both fresh (2). Criterion 3 decides:
  V1 is pure plain words (doorman/guest/door); V2 uses "contracts", jargon-adjacent
  for a newcomer. Criterion 4: V1 has a triple-beat rhythm (checks / pockets /
  only opens) vs V2's flatter two-beat. V1 wins DECISIVELY (margin ~4).
- **V2 vs V3:** V2's "400 contracts before breakfast" is more specific and its
  reveal ("only the one you already approved") sharper than V3's "still asks you
  first"; V3 also overlaps the field's crowded "night shift" angle. V2 wins
  (margin ~3).
- **V1 vs V3:** V1 wins on criteria 3 and 4 and avoids the crowded night angle.
  V1 wins DECISIVELY (margin ~4).

**Winner: V1.** Fresh image (doorman — nobody in the 171-entry field uses it),
named character (Gus), specific number (twice), plain words throughout, triple-beat
rhythm, reveal in the final clause ("only opens the door for you" — the control
twist: the agent guards, but YOU hold the only key to the door). Honest: a
wallet agent that checks, takes nothing, and acts only for its owner.
