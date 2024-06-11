import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import useCookie from "@/hooks/useCookie";
import { deleteBookMarks, postBookMarks } from "@/lib/api/bookmarks";

function Card({ content }: { content: any }) {
  const router = useRouter();
  const [favor, setFavor] = useState(!content.myBookmark);
  const [favorCount, setFavorCount] = useState(content.countOfBookmarks);
  const accessToken = useCookie("accessToken");

  const wrap = useMemo(() => {
    if (router.pathname === "/travel") {
      return "max-w-240 w-full h-[310px] block bg-white rounded-16 border border-line-02 m-auto overflow-hidden";
    } else {
      return "tablet:w-196 mobile:max-w-[280px] mobile:min-w-264 mobile:w-full w-240 h-[310px] block bg-white rounded-16  m-auto overflow-hidden";
    }
  }, [router.pathname]);

  const gender = useMemo(() => {
    switch (content.gender) {
      case "MALE":
        return "남자만";

      case "FEMALE":
        return "여자만";

      default:
        return "여자/남자";
    }
  }, [content.gender]);

  const handleFavor = async () => {
    if (accessToken !== null) {
      if (favor) {
        await postBookMarks(content.id);
        setFavorCount((prev: number) => prev + 1);
      } else {
        await deleteBookMarks(content.id);
        setFavorCount((prev: number) => prev - 1);
      }
      setFavor(prev => !prev);
    } else {
      alert("로그인 후 이용해 주시기 바랍니다.");
      router.push("/login");
    }
  };

  useEffect(() => {
    setFavor(!content.myBookmark);
    setFavorCount(content.countOfBookmarks);
  }, [content.countOfBookmarks, content.myBookmark]);

  return (
    <Link href={`/travel/${content.id}/detail`} className={wrap}>
      <div className="relative flex h-180 w-full flex-col overflow-hidden p-16 tablet:p-12">
        <Image
          src={
            content.thumbnail
              ? `https://gildongmuu.s3.ap-northeast-2.amazonaws.com/${content.thumbnail}`
              : "/images/Image_DefaultCard.png"
          }
          sizes="180px"
          alt="여행지 이미지"
          fill
          className="z-0 object-cover"
        />
        <div className="bg-stone-999 absolute left-0 top-0 h-full w-full opacity-20"></div>
        <div className="z-1 relative w-full">
          <div className="flex items-center justify-between">
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
                onClick={e => {
                  handleFavor();
                  e.preventDefault();
                }}
              >
                <Image
                  src={"/icons/heartOff.svg"}
                  alt="하트"
                  fill
                  sizes="24px"
                />
              </div>
            ) : (
              <div
                className="relative h-24 w-24"
                onClick={e => {
                  handleFavor();
                  e.preventDefault();
                }}
              >
                <Image
                  src={"/icons/heartOn.svg"}
                  alt="하트"
                  fill
                  sizes="24px"
                />
              </div>
            )}
          </div>

          <div className="mt-16 text-16 leading-tight text-text-white tablet:text-14 ">
            {content.title}
          </div>
          <div className="mt-1 text-14 text-text-white">{content.nickname}</div>
        </div>
      </div>

      <div className="flex h-130 w-full flex-col p-16 text-14 text-text-02 tablet:p-12">
        <div className="flex flex-1 items-center gap-8">
          <div className="relative h-16 w-16 tablet:h-12 tablet:w-12">
            <Image src={"/icons/location.svg"} alt="위치" fill sizes="16px" />
          </div>
          <div>{content.destination}</div>
        </div>

        <div className="flex flex-1 items-center gap-8">
          <div className="relative h-16 w-16 tablet:h-12 tablet:w-12">
            <Image src={"/icons/calendar.svg"} alt="일정" fill sizes="16px" />
          </div>
          <div>
            {content.tripDate.startDate} ~ {content.tripDate.endDate}
          </div>
        </div>

        <div className="flex flex-1 items-center gap-8">
          <div className="relative h-16 w-16 tablet:h-12 tablet:w-12">
            <Image src={"/icons/tag.svg"} alt="태그" fill sizes="16px" />
          </div>
          <div className="flex gap-6">{gender}</div>
        </div>

        <div className="flex flex-1 gap-12 text-12">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12">
              <Image
                src={"/icons/heart.svg"}
                alt="좋아요 수"
                fill
                sizes="12px"
              />
            </div>
            <div>{content.countOfBookmarks === null ? 0 : favorCount}</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12">
              <Image
                src={"/icons/comment.svg"}
                alt="댓글 수"
                fill
                sizes="12px"
              />
            </div>
            <div>{content.countOfComments}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
