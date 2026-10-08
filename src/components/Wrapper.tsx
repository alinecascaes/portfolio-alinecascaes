import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Wrapper({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={twMerge("max-w-300 p-6 mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
