import React from "react";
import { cn } from "../../utils";

type InputProps = React.ComponentPropsWithRef<"input">;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={cn(
          "h-10 w-full rounded border border-zinc-700 bg-transparent px-4 text-zinc-300 placeholder-zinc-500 focus:border-zinc-400 focus:outline-none",
          className,
        )}
      />
    );
  },
);

Input.displayName = "Input";
