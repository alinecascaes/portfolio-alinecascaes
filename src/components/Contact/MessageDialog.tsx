import { CircleAlert, CircleCheck } from "lucide-react";
import { Dialog } from "../Dialog";

interface MessageDialogProps {
  message: string;
  variant: "success" | "error";
  isOpen: boolean;
  onClose: () => void;
}

export function MessageDialog({
  message,
  variant,
  isOpen,
  onClose,
}: MessageDialogProps) {
  if (!isOpen) return null;

  const isSuccess = variant === "success";
  const Icon = isSuccess ? CircleCheck : CircleAlert;

  return (
    <Dialog onClose={onClose} backdropClick>
      <div className="flex items-center gap-4">
        <span
          className={
            isSuccess ? "shrink-0 text-primary" : "shrink-0 text-red-500"
          }
        >
          <Icon size={40} strokeWidth={1.75} />
        </span>

        <p className="min-w-0 flex-1 text-base font-semibold leading-relaxed text-text">
          {message}
        </p>
      </div>
    </Dialog>
  );
}
