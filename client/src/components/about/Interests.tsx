import cn from "@/utils/cn";
import React from "react";
import SubHeader from "../ui/SubHeader";

const Interests = () => {
  const info: string[] = [
    "/**",
    "* some secret stuff",
    "* i read books when i get bored.",
    "* currently reading: 48 law of power.",
    "* anime : one peice.",
    "* sensei (先生): Eiichiro Oda",
    "* music: daylight by david kushner",
    "* sometime i write screenplay & songs",
    "* love Keanu Reeves",
    "* a bit into unixporn",
  ];
  info.push("*/");
  return (
    <div className="w-full">
      <SubHeader
        category={`personal-info`}
        className="text-s1"
        showIcon={false}
      />
      <article className="py-4 px-2 sm:py-8 sm:px-10 text-s1">
        {info.map((p, id) => (
          <div key={id} className={cn("flex gap-1 sm:gap-4")}>
            <span className="select-none w-[2ch] text-end hidden sm:inline-block">
              {id + 1}
            </span>
            <span className={cn(id !== 0 && "pl-3")}>{p}</span>
          </div>
        ))}
      </article>
    </div>
  );
};
export default Interests;
