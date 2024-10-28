import { cn } from "@/app/lib/utils";
import Image from "next/image";
export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 z-10 rounded-xl group/bento hover:shadow-xl border hover:border-blue-500 transition duration-200  border-neutral-500  shadow-input dark:shadow-none p-8 justify-between flex flex-col space-y-4",
        className
      )} style={{}}>
      {/* {header} */}
      <Image src={img} className="rounded-lg h-56 object-cover w-full"/>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {/* {icon} */}
        <div
          className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div
          className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>)
  );
};
