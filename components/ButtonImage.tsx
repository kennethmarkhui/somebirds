import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface IButtonImage extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "hero" | "space" | "banana" | "car" | "jungle";
  fullWidth?: boolean;
}

const ButtonImage = forwardRef<HTMLButtonElement, IButtonImage>(function Button(
  { children, className, variant = "outline", fullWidth, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${className ?? ""}${
        variant === "hero"
          ? " w-72 h-20 border-black  bg-hero-pattern text-white font-bold hover:underline"
          : variant === "banana"
          ? "w-72 h-20 border-black  bg-banana-pattern text-white font-bold hover:underline"
          : variant === "space"
          ? " w-72 h-20 border-black  bg-space-pattern text-white font-bold hover:underline"
          : variant === "jungle"
          ? "w-72 h-20 border-black  bg-jungle-pattern text-white font-bold hover:underline"
          : "w-72 h-20 border-black  bg-car-pattern text-white font-bold hover:underline"
      }${fullWidth && " w-full"} py-3 px-4 rounded`}
      {...rest}
    >
      {children}
    </button>
  );
});

export default ButtonImage;
