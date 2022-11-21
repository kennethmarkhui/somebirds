import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "outline" | "fill";
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
          ? " border-0 border-black bg-white text-black font-bold hover:bg-black hover:text-white hover:border-[1px]"
          : " border-0 border-black bg-black text-white font-bold hover:bg-white hover:text-black hover:border-[1px]"
      }${fullWidth && " w-full"} py-3 px-4 rounded`}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
