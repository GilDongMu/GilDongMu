import Image from "next/image";
import { useState } from "react";

const content = {
  id: 1,
  title: "모몽가와 함께 여행을 떠날 먼작귀 괌",
  nickname: "모몽가",
  country: "일본",
  city: "오사카",
  startDate: "2024-03-15",
  endDate: "2024-03-20",
  status: "모집 중",
  thumbnail: "/icons/모몽가2.png",
  countOfComments: 3,
  countOfBookmarks: 5,
};

export default function MyTravelCard() {
  const [favor, setFavor] = useState(true);

  return (
    // <Link href={`/travel/${content.id}/detail`}>
    <div className="tablet:h-270 relative flex h-[320px] w-270 flex-col rounded-[20px] p-24 tablet:w-227 tablet:p-20 mobile:h-176 mobile:w-243 mobile:min-w-148 mobile:p-12">
      <Image
        src={content.thumbnail}
        alt="여행지 이미지"
        fill
        className="rounded-[20px] object-cover"
        style={{ opacity: 0.7 }}
      />
      <div className="absolute flex flex-col items-start justify-between gap-16">
        <div className="flex items-center justify-between self-stretch">
          {content.status === "모집 완료" ? (
            <div className="w-max rounded-24 bg-stone-100 px-12 py-5 text-14 text-stone-500 tablet:px-10 tablet:py-3 tablet:text-12">
              모집 완료
            </div>
          ) : (
            <div className="w-max rounded-24 bg-pink-100 px-12 py-5 text-14 text-pink-500 tablet:px-10 tablet:py-3 tablet:text-12">
              모집 중
            </div>
          )}
          {favor ? (
            <div
              className="relative h-24 w-24 cursor-pointer"
              onClick={() => setFavor(false)}
            >
              <Image src={"/icons/heartOn.svg"} alt="하트 아이콘" fill />
            </div>
          ) : (
            <div
              className="relative h-24 w-24 cursor-pointer"
              onClick={() => setFavor(true)}
            >
              <Image src={"/icons/heartOff.svg"} alt="빈하트 아이콘" fill />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-16 font-bold leading-5 tracking-tighter tablet:text-14">
            {content.title}
          </div>
          <div className="text-14 font-normal leading-5 tracking-tighter tablet:text-12">
            {content.nickname}
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 right-24 flex h-30 w-30 items-center justify-center rounded-full bg-white p-2 tablet:bottom-20 tablet:right-20 mobile:bottom-12 mobile:right-12">
        <button>
          <Image
            src={"/icons/arrow-left-right.svg"}
            alt="뒤집기 아이콘"
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
    // </Link>
  );
}
