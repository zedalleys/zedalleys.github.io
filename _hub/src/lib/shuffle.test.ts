import { describe, expect, it } from 'vitest';
import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('does not mutate the input', () => {
    const input = [1, 2, 3, 4, 5];
    const copy = [...input];
    shuffle(input);
    expect(input).toEqual(copy);
  });

  it('keeps exactly the same elements', () => {
    const input = ['a', 'b', 'c', 'd', 'e', 'f'];
    const out = shuffle(input);
    expect(out).toHaveLength(input.length);
    expect([...out].sort()).toEqual([...input].sort());
  });

  it('handles empty and single-element arrays', () => {
    expect(shuffle([])).toEqual([]);
    expect(shuffle([42])).toEqual([42]);
  });

  it('is deterministic given a fixed rng', () => {
    const seq = [0.9, 0.1, 0.8, 0.2];
    let i = 0;
    const rng = () => seq[i++ % seq.length];
    const a = shuffle([0, 1, 2, 3, 4], rng);
    i = 0;
    const b = shuffle([0, 1, 2, 3, 4], rng);
    expect(a).toEqual(b);
  });

  it('actually reorders for a non-trivial rng', () => {
    // rng returning ~0 rotates every element left by one via Fisher–Yates.
    const out = shuffle([1, 2, 3, 4], () => 0);
    expect(out).not.toEqual([1, 2, 3, 4]);
    expect([...out].sort()).toEqual([1, 2, 3, 4]);
  });
});
