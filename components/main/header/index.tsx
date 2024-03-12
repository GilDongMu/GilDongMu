import Searchbar from "@/components/main/header/searchbar";

export default function Header() {
  return (
    <div className="flex flex-col items-center self-stretch justify-center w-full gap-10 px-24 py-40 h-240 tablet:h-200 mobile:h-200 bg-primary-press">
      <div className="flex flex-col items-center gap-24">
        <span className="font-extrabold leading-9 tracking-tight text-center text-white text-32 tablet:text-24 mobile:text-24">
          이번 여행, 어디로 떠나볼까요?
        </span>
        <Searchbar />
      </div>
    </div>
  );
}