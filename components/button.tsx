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
          ? "border-2 border-black bg-white text-black font-bold hover:bg-black hover:text-white"
          : "border-2 border-black bg-black text-white font-bold hover:bg-white hover:text-black"
      } py-2 px-4`}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;