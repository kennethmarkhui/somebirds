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
          ? " bg-hero-pattern"
          : variant === "banana"
          ? " bg-banana-pattern"
          : variant === "space"
          ? " bg-space-pattern"
          : variant === "jungle"
          ? " bg-jungle-pattern"
          : " bg-car-pattern"
      }${
        fullWidth ? " w-full" : ""
      } w-72 h-20 border-black py-3 px-4 rounded font-bold hover:underline text-white`}
      {...rest}
    >
      {children}
    </button>
  );
});

export default ButtonImage;
