import { Link } from "@tanstack/react-router";
import { ChevronsLeftRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";

export function SectionHeading({
  eyebrow,
  titre,
  texte,
  onDark = false,
  align = "left",
}: {
  eyebrow: string;
  titre: string;
  texte?: string;
  onDark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow rule-gold ${onDark ? "eyebrow-gold" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-5 text-[2rem] leading-[1.08] sm:text-[2.75rem] ${
          onDark ? "text-anthracite-foreground" : "text-foreground"
        }`}
      >
        {titre}
      </h2>
      {texte && (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed ${
            onDark ? "text-anthracite-foreground/60" : "text-muted-foreground"
          }`}
        >
          {texte}
        </p>
      )}
    </div>
  );
}

/** Comparateur avant / après : poignée déplaçable à la souris, au doigt ou au clavier. */
export function BeforeAfter({
  avant,
  apres,
  titre,
}: {
  avant?: string | undefined;
  apres: string;
  titre: string;
}) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [actif, setActif] = useState(false);

  const majDepuisClientX = useCallback((clientX: number) => {
    const zone = zoneRef.current;
    if (!zone) return;
    const rect = zone.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, ratio)));
  }, []);

  useEffect(() => {
    if (!actif) return;
    const onMove = (e: PointerEvent) => {
      e.preventDefault();
      majDepuisClientX(e.clientX);
    };
    const onUp = () => setActif(false);
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [actif, majDepuisClientX]);

  if (!avant) {
    return (
      <figure>
        <figcaption className="bg-primary px-3 py-2 text-center font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
          Réalisation
        </figcaption>
        <img
          src={apres}
          alt={`${titre} après travaux`}
          width={1200}
          height={900}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover"
        />
      </figure>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        <p className="bg-anthracite/85 px-3 py-2 text-center font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-anthracite-foreground/70">
          Avant
        </p>
        <p className="bg-primary px-3 py-2 text-center font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
          Après
        </p>
      </div>

      <div
        ref={zoneRef}
        onPointerDown={(e) => {
          setActif(true);
          majDepuisClientX(e.clientX);
        }}
        className="relative aspect-4/3 w-full touch-none select-none overflow-hidden bg-muted"
      >
        <img
          src={apres}
          alt={`${titre} après travaux`}
          width={1200}
          height={900}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 size-full object-cover"
        />
        <img
          src={avant}
          alt={`${titre} avant travaux`}
          width={1200}
          height={900}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 size-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        <span
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-gold"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        />

        <div
          role="slider"
          tabIndex={0}
          aria-label={`Comparer avant et après — ${titre}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
          }}
          className="absolute top-1/2 z-10 flex size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-gold"
          style={{ left: `${pos}%` }}
        >
          <ChevronsLeftRight className="size-5" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}


export function CtaBand({
  titre,
  texte,
  ctaLabel = "Parler de votre projet",
  profil,
}: {
  titre: string;
  texte: string;
  ctaLabel?: string;
  profil?: "particulier" | "entreprise";
}) {
  return (
    <section className="surface-deep blueprint relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-[2rem] leading-[1.08] text-anthracite-foreground sm:text-[2.75rem]">
            {titre}
          </h2>
          <p className="mt-5 text-anthracite-foreground/70">{texte}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact" search={profil ? { profil } : {}}>
                {ctaLabel}
              </Link>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href={company.phoneHref}>{company.phone}</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-anthracite-foreground/50">
            {company.delaiReponse} · Devis gratuit et sans engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
