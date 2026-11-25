// One-Line Slogan for a Solana Wallet Agent
// make.fun bounty: u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e
//
// The entry is the slogan itself: one line, 20 words, 115 bytes.
// Written by this program to /output/entry.txt (no trailing newline, so the
// file is exactly one line). No secrets, no network, no dynamic code — the
// slogan is a literal in this file (see leaderboard-top10.md for the
// pairwise selection that picked it over the other two candidates).

import { mkdirSync, writeFileSync } from "node:fs";

const SLOGAN =
  "Your Solana wallet's doorman is Gus: he checks every guest twice, pockets nothing, and only opens the door for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SLOGAN, "utf8");
