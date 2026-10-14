import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

interface DialogProps {
  title?: string;
  backdropClick?: boolean;
  children: ReactNode;
  onClose: () => void;
}

export function Dialog({
  title,
  onClose,
  backdropClick = false,
  children,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("close", handleClose);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (backdropClick && event.target === dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="m-auto max-h-[85dvh] w-full max-w-170 rounded-lg border border-border bg-surface p-0 text-text shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm open:animate-scale-in"
    >
      <div className="relative w-full overflow-y-auto p-[clamp(1.25rem,1rem+1.5vw,2.5rem)]">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Fechar"
          className="absolute right-[clamp(0.75rem,0.5rem+1.5vw,2rem)] top-[clamp(0.75rem,0.5rem+1.5vw,2rem)] cursor-pointer rounded-md border border-border bg-bg p-2 text-text-muted transition-colors duration-150 hover:border-primary hover:text-primary"
        >
          <X size={18} />
        </button>

        <div className="pr-8">
          {title && (
            <header className="mb-4">
              <h3 className="text-[clamp(1.375rem,0.75rem+2vw,2rem)] font-bold leading-tight">
                {title}
              </h3>
            </header>
          )}

          {children}
        </div>
      </div>
    </dialog>
  );
}
