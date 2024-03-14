import Image from "next/image";

import TravelCarousel from "@/components/carousel/travel";

export default function Travel() {
  return (
    <div className="flex flex-col bg-bg-06">
      <div className="flex flex-col max-w-[1200px] tablet:max-w-[768px] mobile:max-w-360 self-stretch m-auto w-full gap-40 px-24 py-60 tablet:py-40">
        <div className="flex justify-start gap-12">
          <Image
            src={"/icons/flag.svg"}
            alt="깃발 아이콘"
            width={40}
            height={40}
          />
          <span className="font-extrabold leading-10 tracking-tight text-center text-text-01 text-32 tablet:text-24">
            여행글
          </span>
        </div>
        <div className="flex flex-col justify-start gap-24">
          <div className="flex gap-16 mx-36 mobile:mx-0">
            <button className="flex items-center justify-center gap-4 px-16 py-10 font-extrabold leading-5 text-center text-white w-90 h-44 tablet:h-36 mobile:h-32 tablet:w-72 rounded-32 bg-primary text-16 tablet:text-14 hover:bg-primary-press">
              인기
            </button>
            <button className="flex items-center justify-center gap-4 px-16 py-10 font-extrabold leading-5 text-center text-primary w-90 h-44 tablet:h-36 mobile:h-32 tablet:w-72 rounded-32 bg-bg-06 border-primary border-[1.5px] text-16 tablet:text-14 hover:border-primary-press hover:text-primary-press">
              최신
            </button>
          </div>
          <div className="flex items-center justify-center mx-36 mobile:mx-0">
            <div className="w-full gap-24 px-24 pt-24 pb-8 bg-white tablet:gap-16 mobile:gap-0 rounded-32">
              <TravelCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
