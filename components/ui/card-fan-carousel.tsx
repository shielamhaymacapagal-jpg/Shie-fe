"use client";

import { useCallback, useEffect, useState } from "react";

export type FanCard = { imgUrl: string; alt: string };

type Props = {
  cards: FanCard[];
  /** ms between auto-advances; 0 disables */
  interval?: number;
  className?: string;
};

/**
 * Fanned stack of screenshot cards. The front card sits centered; the others
 * fan out behind it. Auto-rotates (pauses on hover), click a back card to
 * bring it forward, click the front card to view it full size.
 */
export default function SocialCards({ cards, interval = 4000, className = "" }: Props) {
  const n = cards.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const next = useCallback(() => setActive((a) => (a + 1) % n), [n]);
  const prev = useCallback(() => setActive((a) => (a - 1 + n) % n), [n]);

  useEffect(() => {
    if (!interval || paused || lightbox !== null || n < 2) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [interval, paused, lightbox, n, next]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const styleFor = (i: number): React.CSSProperties => {
    const offset = (i - active + n) % n;
    if (offset === 0) {
      return { transform: "translateX(0) rotate(0deg) scale(1)", zIndex: n + 1, opacity: 1 };
    }
    // alternate right / left, pushing further out the deeper the card is
    const side = offset % 2 === 1 ? 1 : -1;
    const depth = Math.ceil(offset / 2);
    return {
      transform: `translateX(${side * 16 * depth}%) translateY(${4 * depth}%) rotate(${side * 6 * depth}deg) scale(${1 - 0.08 * depth})`,
      zIndex: n - offset,
      opacity: Math.max(0.35, 0.85 - 0.2 * (depth - 1)),
    };
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto aspect-[16/11] w-[78%] max-w-[760px]">
        {cards.map((card, i) => {
          const isActive = i === active;
          return (
            <button
              key={card.imgUrl}
              type="button"
              aria-label={isActive ? `Enlarge: ${card.alt}` : `Show: ${card.alt}`}
              onClick={() => (isActive ? setLightbox(i) : setActive(i))}
              style={styleFor(i)}
              className={`absolute inset-0 overflow-hidden rounded-[14px] border border-border bg-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.65)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive ? "cursor-zoom-in hover:-translate-y-1" : "cursor-pointer hover:opacity-100"
              }`}
            >
              <img
                src={card.imgUrl}
                alt={card.alt}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover object-left-top"
              />
            </button>
          );
        })}
      </div>

      {n > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous screenshot"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition hover:border-purple-light"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {cards.map((c, i) => (
              <button
                key={c.imgUrl}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to ${c.alt}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-purple-light" : "w-2 bg-border hover:bg-dim"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next screenshot"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition hover:border-purple-light"
          >
            ›
          </button>
        </div>
      )}

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={cards[lightbox].alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-start justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm md:p-10"
        >
          <img
            src={cards[lightbox].imgUrl}
            alt={cards[lightbox].alt}
            className="w-full max-w-[1200px] rounded-[12px] shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
