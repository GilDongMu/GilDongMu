import Image from "next/image";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import Dropdown from "@/components/DropDown";
import useToggle from "@/hooks/useToggle";

function Notice() {
  const [dropDown, setDropDown, handleDropDown] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  const gnbs = [
    {
      name: "설정1",
      link: "",
      handleBtn: () => {},
    },
    {
      name: "설정2",
      link: "",
      handleBtn: () => {},
    },
  ];

  useOnClickOutside(ref, () => {
    dropDown && handleDropDown();
  });

  return (
    <div className="flex w-full items-center justify-between px-6 hover:bg-green-10">
      <div className="relative h-24 w-24">
        <Image
          src={"/icons/notice.png"}
          alt="알림종류"
          fill
          className="object-cover"
          sizes="24px"
        />
      </div>

      <div>내 여행글에 길동무가 신청했습니다!</div>

      <div className="relative h-60 w-75">
        <Image
          src={"/icons/notice.png"}
          alt="알림 이미지"
          fill
          className="object-cover"
          sizes="75px"
        />
      </div>

      <div
        className="relative h-20 w-20 cursor-pointer"
        onClick={handleDropDown}
      >
        <Image
          src={"/icons/notice.png"}
          alt="알림 설정"
          fill
          className="object-cover"
          sizes="20px"
        />
        <div ref={ref}>
          {dropDown && (
            <Dropdown buttons={gnbs} handleDropDown={handleDropDown} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Notice;
