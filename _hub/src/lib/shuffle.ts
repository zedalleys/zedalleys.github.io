/**
 * Fisher–Yates shuffle. Returns a new array; the input is left untouched.
 * `rng` is injectable purely so tests can pin the output — production
 * callers use `Math.random`.
 */
export function shuffle<T>(input: readonly T[], rng: () => number = Math.random): T[] {
  const out = input.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
