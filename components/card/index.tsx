import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Card() {
  const [gather, setGather] = useState(false);
  return (
    <Link href={"/"} className="w-max h-[310px] block bg-white rounded-14">
      <div className="relative flex flex-col p-16 overflow-hidden border tablex:w-196 mobile:w-312 w-240 h-180 tablet:p-12 rounded-16">
        <Image
          src={"/images/logo.svg"}
          alt="여행지 이미지"
          fill
          className="z-0 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className="relative w-full z-1">
          {gather ? (
            <div className="px-12 py-5 w-max tablet:py-3 tablet:px-10 bg-stone-100 rounded-24 text-14 tablet:text-12 text-stone-500">
              모집 완료
            </div>
          ) : (
            <div className="px-12 py-5 text-pink-500 bg-pink-100 w-max tablet:py-3 tablet:px-10 rounded-24 text-14 tablet:text-12">
              모집 중
            </div>
          )}
          <div className="mt-16 leading-tight text-white text-16 tablet:text-14">
            길동무 모집글 제목길동무 모집글 제목길동
          </div>
          <div className="mt-1 text-white text-14">작성자</div>
        </div>
      </div>

      <div className="flex flex-col w-full p-16 h-130 tablet:p-12 text-14 text-text-02">
        <div className="flex items-center flex-1 gap-8">
          <div className="relative w-16 h-16 tablet:w-12 tablet:h-12">
            <Image src={"/icons/location.svg"} alt="위치" fill />
          </div>
          <div>한국, 제주특별자치도</div>
        </div>

        <div className="flex items-center flex-1 gap-8">
          <div className="relative w-16 h-16 tablet:w-12 tablet:h-12">
            <Image src={"/icons/calendar.svg"} alt="일정" fill />
          </div>
          <div>2024/03/10-2024/03/14</div>
        </div>

        <div className="flex items-center flex-1 gap-8">
          <div className="relative w-16 h-16 tablet:w-12 tablet:h-12">
            <Image src={"/icons/tag.svg"} alt="태그" fill />
          </div>
          <div>야돈만</div>
        </div>

        <div className="flex flex-1 gap-12 text-12">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image src={"/icons/heart.svg"} alt="좋아요 수" fill />
            </div>
            <div>00</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image src={"/icons/comment.svg"} alt="댓글 수" fill />
            </div>
            <div>00</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
