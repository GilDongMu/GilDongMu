interface TitleProps {
  title: string;
  type: string;
  isMobile?: boolean;
}

export default function Title({ title, type, isMobile }: TitleProps) {
  return (
    <>
      {type === "front" && (
        <span
          className={`line-clamp-1 w-full max-w-[222px] overflow-hidden text-16 font-bold leading-5 tracking-tighter text-white tablet:max-w-187 tablet:text-14 ${isMobile ? "mobile:max-w-124" : "mobile:max-w-213"}`}
        >
          {title}
        </span>
      )}
      {type === "back" && (
        <span
          className={`${isMobile ? "" : "line-clamp-1 overflow-hidden"} mb-24 text-16 font-bold leading-5 tracking-tighter tablet:mb-16 tablet:text-14 mobile:mb-8 mobile:w-full`}
        >
          {title}
        </span>
      )}
    </>
  );
}
