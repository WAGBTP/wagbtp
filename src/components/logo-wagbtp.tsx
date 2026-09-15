import logo from "@/assets/logo_wagbtp.png";

/** Logo officiel WAG-BTP (image d'origine, sans fond ajouté). */
export function LogoWagBtp({ onDark = false }: { onDark?: boolean }) {
  return (
    <img
      src={logo}
      alt="WAG-BTP"
      width={786}
      height={918}
      className={onDark ? "h-16 w-auto shrink-0" : "h-14 w-auto shrink-0"}
    />
  );
}
