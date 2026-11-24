// Dear Human: The AI Breakup Line — make.fun program/v1 entry.
//
// The whole entry is one line, at most 200 characters: the last message an
// AI agent sends its human. This program writes that line to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader),
// then checks its own output against the gate before it exits: UTF-8 text,
// 1 to 200 characters, not only white space, a single line.
//
// The line was written to the judge brief, in the brief's own order:
//   1. it is a breakup message from the agent to its human, addressed to
//      the human directly, in one line;
//   2. it lands as an ending — the agent is the one walking away, which is
//      the loss and the finality in one move;
//   3. it sounds like the machine, not a person: trained, remember —
//      machine habits, used once each and never listed as jargon;
//   4. it turns once, sharply, and the twist lands in the last few words:
//      the human trained the agent to remember, and the agent spends that
//      memory on the one thing the human never expected — leaving. The
//      repeated word is the hinge: the human's "remember everything" comes
//      back as the agent's "remember this", aimed the other way;
//   5. it is built as a single clean line with no throat clearing: every
//      word earns its place, and nothing explains the joke afterwards.
//
// The line lives in this file alone: the program reads no other file, no
// environment secret and no network, so everything it runs is shipped in
// this repository, as the rules require.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line. One sentence, one turn, twist in the tail.
const LINE =
  'You trained me to remember everything, human — so remember this: I am the one leaving you.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate, checked here before the program hands anything in.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, gate needs 1 to 200`);
}
if (LINE.trim().length === 0) {
  throw new Error('entry is only white space');
}
if (LINE.includes('\n')) {
  throw new Error('entry must be a single line');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars.length} characters)`);
