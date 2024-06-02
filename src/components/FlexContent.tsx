import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

function FlexContent({
  heading,
  paragraph,
  image,
  className,
}: ComponentProps<"div"> & {
  heading: string;
  paragraph: string;
  image: string;
}) {
  return (
    <div
      className={twMerge(
        "flex pt-10 md:pt-14 px-4 md:px-8 gap-6 flex-col-reverse md:flex-row  md:justify-between md:items-center md:gap-24",
        className
      )}
    >
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#010203] pb-3">
          {heading}
        </h1>
        <p className="text-[#343535] text-[14px] md:text-base ">{paragraph}</p>
      </div>
      <img src={image} alt="" className="flex-1" />
    </div>
  );
}

export default FlexContent;
