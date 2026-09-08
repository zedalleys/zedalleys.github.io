import { defineConfig } from 'vitest/config';

// Unit tests for the Learning Hub's pure logic — progress/unlock rules
// (`src/lib/storage.ts`), certificate helpers (`src/lib/certificate.ts`),
// and the integrity of the hand-authored course content (`src/data`).
// Component/DOM rendering is intentionally out of scope for now.
export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.ts'],
    clearMocks: true,
    restoreMocks: true,
  },
});
