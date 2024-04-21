import Image from "next/image";
import { useState } from "react";

import TravelCarousel from "@/components/Carousel/Travel";

export default function Travel() {
  const [choice, setChoice] = useState("latest");
  const handleMain = (sort: string) => {
    setChoice(sort);
  };

  const currentSort = choice;

  return (
    <div className="flex flex-col bg-bg-06">
      <div className="m-auto flex w-full max-w-[1200px] flex-col gap-40 self-stretch px-24 py-60 tablet:py-40">
        <div className="flex justify-start gap-12">
          <Image
            src={"/icons/flag.svg"}
            alt="깃발 아이콘"
            width={40}
            height={40}
          />
          <span className="text-center text-32 font-extrabold leading-10 tracking-tight text-text-01 tablet:text-24">
            여행글
          </span>
        </div>
        <div className="flex flex-col justify-start gap-24">
          <div className="mx-36 flex gap-16 mobile:mx-0">
            <button
              onClick={() => handleMain("latest")}
              className={`flex h-44 w-90 items-center justify-center gap-4 rounded-32 px-16 py-10 text-center text-16 font-extrabold leading-5 tablet:h-36 tablet:w-72 tablet:text-14 mobile:h-32 ${
                currentSort === "latest"
                  ? "text-text-white bg-primary hover:bg-primary-press"
                  : "border-[1.5px] border-primary bg-bg-06 text-primary hover:border-primary-press hover:text-primary-press"
              }`}
            >
              인기
            </button>
            <button
              onClick={() => handleMain("latest-trip")}
              className={`flex h-44 w-90 items-center justify-center gap-4 rounded-32 px-16 py-10 text-center text-16 font-extrabold leading-5 tablet:h-36 tablet:w-72 tablet:text-14 mobile:h-32 ${
                currentSort === "latest-trip"
                  ? "text-text-white bg-primary hover:bg-primary-press"
                  : "border-[1.5px] border-primary bg-bg-06 text-primary hover:border-primary-press hover:text-primary-press"
              }`}
            >
              최신
            </button>
          </div>
          <div className="mx-36 flex items-center justify-center mobile:mx-0">
            <div
              style={{ width: "100%" }}
              className="gap-24 rounded-32 bg-white px-30 pb-8 pt-24 tablet:gap-3 mobile:gap-3"
            >
              {choice === "latest" ? (
                <TravelCarousel choice={"latest"} />
              ) : (
                <TravelCarousel choice={"latest-trip"} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
