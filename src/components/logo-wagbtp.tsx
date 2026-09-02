/** Marque WAG-BTP : mono-symbole "barres de chantier" + logotype Archivo. */
export function LogoWagBtp({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 28 30"
        width={28}
        height={30}
        aria-hidden="true"
        className="h-7 w-auto shrink-0"
      >
        <rect x="0" y="12" width="5" height="13" fill="var(--color-primary)" />
        <rect x="7.5" y="6" width="5" height="19" fill="var(--color-gold)" />
        <rect x="15" y="1" width="5" height="24" fill="var(--color-primary)" />
        <rect x="22.5" y="9" width="5" height="16" fill="var(--color-primary)" />
        <rect x="0" y="27" width="27.5" height="3" fill="var(--color-gold)" />
      </svg>
      <span
        className={`font-display text-lg font-extrabold tracking-tight ${
          onDark ? "text-anthracite-foreground" : "text-foreground"
        }`}
      >
        WAG-BTP
      </span>
    </span>
  );
}
