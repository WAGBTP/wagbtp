import logo from "@/assets/logo_wagbtp.png.asset.json";

/** Logo officiel WAG-BTP (image d'origine, sans fond ajouté). */
export function LogoWagBtp({ onDark = false }: { onDark?: boolean }) {
  return (
    <img
      src={logo.url}
      alt="WAG-BTP"
      width={786}
      height={918}
      className={onDark ? "h-12 w-auto shrink-0" : "h-11 w-auto shrink-0"}
    />
  );
}
