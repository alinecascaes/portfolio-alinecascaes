import type { SvgIconComponent } from "@mui/icons-material";

interface ContactButtonProps {
  icon: SvgIconComponent;
  label: string;
  href: string;
}

export function ContactButton({ icon: Icon, label, href }: ContactButtonProps) {
  const isExternal = !href.startsWith("mailto:");

  return (
    <a
      href={href}
      aria-label={label}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors duration-150 hover:border-primary hover:text-primary"
    >
      <Icon />
    </a>
  );
}
