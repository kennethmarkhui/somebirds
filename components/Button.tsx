import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "outline" | "fill";
}

const Button = forwardRef<HTMLButtonElement, IButton>(function Button(
  { children, className, variant = "outline", ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${className ?? ""}${
        variant === "fill"
          ? "border-0 rounded border-black bg-white text-black font-bold hover:bg-black hover:text-white hover:border-[1px]"
          : "border-0 rounded border-black bg-black text-white font-bold hover:bg-white hover:text-black hover:border-[1px]"
      } py-2 px-4 w-48 h-12`}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
