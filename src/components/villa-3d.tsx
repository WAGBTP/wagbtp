import { Maximize2, Minimize2 } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

/** Intègre l'animation 3D « Villa blanche » (public/villa-blanche.html) telle quelle. */
export function Villa3D() {
  const [agrandi, setAgrandi] = useState(false);

  useEffect(() => {
    if (!agrandi) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAgrandi(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [agrandi]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div
        className={
          agrandi
            ? "fixed inset-0 z-[100] bg-background"
            : "relative h-[32rem] overflow-hidden border border-border bg-muted sm:h-[38rem]"
        }
      >
        <iframe
          src="/villa-blanche.html"
          title="Villa blanche — de l'esquisse à la réalité (animation 3D)"
          className="size-full border-0"
          loading="lazy"
        />
        <Button
          type="button"
          variant="gold"
          size="sm"
          onClick={() => setAgrandi((v) => !v)}
          className="absolute left-4 top-4 z-10 shadow-lg sm:left-auto sm:top-auto sm:bottom-4 sm:right-4"
          aria-label={agrandi ? "Réduire l'animation" : "Agrandir l'animation"}
        >
          {agrandi ? <Minimize2 /> : <Maximize2 />}
          {agrandi ? "Réduire" : "Agrandir"}
        </Button>
      </div>
    </section>
  );
}
