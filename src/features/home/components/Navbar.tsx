"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

/*
  Flat row, hairline bottom border, opaque surface — no blur, no glass, no shadow
  on the bar, no background pill on the active item. Active state is a 2px accent
  underline (05-components.md). Nav labels use the mono `label` role.
*/
const NAV_LINKS = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Scroll-spy: drives the accent underline. Cheaper and smoother than
  // recomputing offsets on every scroll event.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="border-hairline bg-canvas fixed inset-x-0 top-0 z-50 border-b"
    >
      <div className="max-w-editorial mx-auto flex h-16 w-full items-center justify-between px-4 md:px-8">
        <a
          href="#home"
          className="text-ink font-display text-body-lg font-semibold tracking-tight"
        >
          Andrzej Pruszyński
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={activeId === link.id ? "true" : undefined}
                className={`text-label relative block py-1 font-mono uppercase transition-colors duration-[120ms] ${
                  activeId === link.id
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.name}
                {activeId === link.id && (
                  <span
                    className="bg-signal absolute -bottom-px left-0 h-[2px] w-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/Andrzej_Pruszynski_CV.pdf"
            download
            className="border-hairline text-ink hover:border-strong text-label hidden rounded-md border px-3 py-2 font-mono uppercase transition-colors duration-[120ms] sm:inline-block"
          >
            Download CV
          </a>

          {/* Icon swap is pure CSS off [data-theme], so there is no mount flag
              and no hydration mismatch to guard against. */}
          <button
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="text-ink-muted hover:text-ink rounded-md p-2 transition-colors duration-[120ms]"
            aria-label="Toggle colour theme"
          >
            <Sun size={18} aria-hidden="true" className="hidden dark:block" />
            <Moon size={18} aria-hidden="true" className="block dark:hidden" />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-ink-muted hover:text-ink rounded-md p-2 transition-colors duration-[120ms] md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {isOpen ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Menu size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-hairline bg-canvas border-t md:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-ink-muted hover:text-ink text-label block py-3 font-mono uppercase transition-colors duration-[120ms]"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Andrzej_Pruszynski_CV.pdf"
                download
                className="text-ink-muted hover:text-ink text-label block py-3 font-mono uppercase transition-colors duration-[120ms]"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
