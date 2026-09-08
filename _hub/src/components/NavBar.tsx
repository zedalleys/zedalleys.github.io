import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * The Zed Alleys personal-site nav, reproduced with the same markup/classes
 * as src/_includes/partials/nav.njk (see ../App.css) so the Learning Hub
 * reads as a continuation of the same site rather than a sub-app with its
 * own chrome. Cross-app items (`href`) are plain links to other static
 * pages; in-hub items (`to`) are client-routed and set the active tab by
 * the current path. "Learning Hub" covers every hub route except the ones
 * that have their own tab (currently just Roadmaps) — getting back into a
 * subject or step uses the in-page "← All subjects" / "← Back to path"
 * links, not this nav.
 */
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about.html', label: 'About' },
  { href: '/portfolio.html', label: 'Work' },
  { href: '/blog.html', label: 'Journal' },
  { href: '/contact.html', label: 'Contact' },
  { to: '/', label: 'Learning Hub' },
  { to: '/roadmaps', label: 'Roadmaps' },
] as const;

export function NavBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navToggleRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Move focus into the panel, trap Tab within it, and close on Escape —
  // mirrors the vanilla nav's keyboard behavior on the main site.
  useEffect(() => {
    if (!menuOpen) return;
    navLinksRef.current?.querySelector<HTMLAnchorElement>('.nav-link')?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        navToggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusable = [
        navToggleRef.current,
        ...(navLinksRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? []),
      ].filter((el) => el !== null) as (HTMLButtonElement | HTMLAnchorElement)[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`}>
      <a href="/" className="nav-brand">
        <img
          src="/assets/images/zed-logo-light.png"
          alt="Zed Alleys"
          className="brand-mark"
          width={161}
          height={60}
        />
        <span className="brand-word">Alleys</span>
      </a>
      <div className="nav-links" id="navLinks" ref={navLinksRef}>
        {NAV_LINKS.map((link) => {
          if ('to' in link) {
            const isActive = link.to === '/' ? location.pathname !== '/roadmaps' : location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`nav-link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          }
          return (
            <a key={link.label} href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          );
        })}
      </div>
      <button
        type="button"
        className="nav-toggle"
        id="navToggle"
        ref={navToggleRef}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="navLinks"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>
    </nav>
  );
}
