import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & { children: ReactNode };
const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-[#12AF9B] text-white p-3 flex-shrink-0 max-w-[280px] px-4 justify-self-center",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
