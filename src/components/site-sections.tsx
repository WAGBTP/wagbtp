import { Link } from "@tanstack/react-router";
import { ChevronsLeftRight, ImageIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { company, realisationsPhares } from "@/lib/site-data";

/** Emplacement photo en attente des visuels fournis par WAG BTP. */
export function PhotoPlaceholder({
  label,
  className = "aspect-4/3",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Emplacement photo : ${label}`}
      className={`flex w-full flex-col items-center justify-center gap-3 border border-dashed border-border bg-muted p-4 text-center ${className}`}
    >
      <ImageIcon className="size-7 text-muted-foreground/60" aria-hidden="true" />
      <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <span className="text-xs text-muted-foreground/70">Photo à venir</span>
    </div>
  );
}

/** Section « Quelques exemples » : réalisations phares. */
export function RealisationsExemples() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <SectionHeading
        eyebrow="Réalisations"
        titre="Quelques exemples"
        texte="La même rigueur d'exécution, quels que soient le projet et le client."
      />
      <div className="mt-12 grid gap-0 border border-border md:grid-cols-3">
        {realisationsPhares.map((r, i) => (
          <article
            key={r.projet}
            className={`bg-card ${i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}
          >
            <img
              src={r.image}
              alt={r.alt}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
            <div className="p-7">
              <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold">
                {r.cible}
              </p>
              <h3 className="mt-3 text-lg leading-snug text-card-foreground">{r.projet}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

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
