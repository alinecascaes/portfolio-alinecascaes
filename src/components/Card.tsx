import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Card({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "group flex flex-col overflow-hidden rounded-md border border-border bg-surface transition-colors duration-300 hover:border-primary",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
