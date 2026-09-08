import { describe, expect, it } from 'vitest';
import {
  buildFacebookShareUrl,
  buildLinkedInShareUrl,
  buildShareText,
  buildTwitterShareUrl,
  makeLocalCertificateId,
} from './certificate';

describe('makeLocalCertificateId', () => {
  it('produces a ZED-prefixed, upper-case, 12-char reference', () => {
    const id = makeLocalCertificateId();
    expect(id).toMatch(/^ZED-[0-9A-F]{12}$/);
  });

  it('is different each call', () => {
    const ids = new Set(Array.from({ length: 50 }, () => makeLocalCertificateId()));
    expect(ids.size).toBe(50);
  });
});

describe('share helpers', () => {
  const subjectTitle = 'UX Design Fundamentals';
  const pageUrl = 'https://zedalleys.com/learning-hub/#/verify/abc 123';

  it('builds share text naming the subject', () => {
    expect(buildShareText(subjectTitle)).toContain(subjectTitle);
  });

  it('URL-encodes the page url for LinkedIn', () => {
    const url = buildLinkedInShareUrl(pageUrl);
    expect(url.startsWith('https://www.linkedin.com/sharing/share-offsite/?url=')).toBe(true);
    expect(url).toContain(encodeURIComponent(pageUrl));
    expect(url).not.toContain(' ');
  });

  it('URL-encodes both text and url for Twitter/X', () => {
    const text = buildShareText(subjectTitle);
    const url = buildTwitterShareUrl(pageUrl, text);
    expect(url).toContain(`text=${encodeURIComponent(text)}`);
    expect(url).toContain(`url=${encodeURIComponent(pageUrl)}`);
  });

  it('URL-encodes the page url for Facebook', () => {
    expect(buildFacebookShareUrl(pageUrl)).toBe(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    );
  });
});
