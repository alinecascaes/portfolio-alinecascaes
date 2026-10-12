import { Download } from "lucide-react";

export function DownloadCV() {
  return (
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1Mf1JV0O-AXuQxLwwoAeovbAgQowVbTOY/view?usp=sharing"
      className="group hidden h-11 w-31.5 items-center justify-center gap-2 rounded-full border border-border px-5 text-[13px] font-semibold whitespace-nowrap transition-colors hover:border-primary hover:text-primary md:inline-flex"
    >
      <Download
        aria-hidden="true"
        size={18}
        className="motion-safe:group-hover:animate-bounce"
      />
      Baixar CV
    </a>
  );
}
