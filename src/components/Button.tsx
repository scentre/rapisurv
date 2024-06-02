import { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button"> & { children: ReactNode };
const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-[#12AF9B] text-white p-3 flex-shrink-0 max-w-[280px] px-4 justify-self-center"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
