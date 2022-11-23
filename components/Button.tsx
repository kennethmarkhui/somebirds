import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "fill";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButton>(function Button(
  { children, className, variant = "outline", fullWidth, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${className ?? ""}${
        variant === "fill"
          ? "  bg-white text-black hover:bg-black hover:text-white"
          : "  border-2 border-black bg-black text-white hover:bg-white hover:text-black"
      }${fullWidth ? " w-full" : ""} py-3 px-4 rounded font-bold`}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
