import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Dropdown from "@/components/gnb/Dropdown";
import Hammenu from "@/components/gnb/Hammenu";
import useToggle from "@/hooks/useToggle";

function Gnb() {
  const [loginState, setLoginState] = useState(true);
  const [dropDown, setDropDown, handleDropDown] = useToggle();
  const [hamMenu, setHamMenu, handleHamMenu] = useToggle(false);
  const [isTablet, setIsTablet] = useToggle(true);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1199);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white tracking-tight text-text-01 relative">
      <nav className="flex max-w-[1200px] h-72 tablet:h-60 justify-between items-center py-20 px-24 mx-auto bg-white relative z-20">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="w-120 h-30 relative overflow-hidden ">
            <Image
              src={"/images/logo.svg"}
              alt="로고"
              fill
              className="object-cover"
            />
          </Link>
          <Link
            href={"/travel"}
            className="text-18 px-4 hover:text-teal-500 tablet:hidden"
          >
            여행
          </Link>
          <Link
            href={"/community"}
            className="text-18 px-4 hover:text-teal-500 tablet:hidden"
          >
            소통공간
          </Link>
          {loginState && (
            <Link
              href={"/mytravel"}
              className="text-18 px-4 hover:text-teal-500 tablet:hidden"
            >
              내 여행
            </Link>
          )}
        </div>

        {!isTablet ? (
          !loginState ? (
            <div className="flex w-137 h-40 text-16 justify-center items-center px-4 py-2.5 text-teal-500 border-[1.5px] rounded-[24px] border-teal-500">
              <Link href={"/login"}>로그인</Link>/
              <Link href={"/signup"}>회원가입</Link>
            </div>
          ) : (
            <div
              onClick={handleDropDown}
              className="text-18 flex items-center cursor-pointer"
            >
              야돈 님 &nbsp;
              <div className="w-16 h-16 relative">
                <Image
                  src={"/icons/chevron-down.svg"}
                  alt="드롭다운 버튼"
                  fill
                  className={dropDown ? "rotate-180" : ""}
                />
              </div>
            </div>
          )
        ) : (
          <div
            onClick={handleHamMenu}
            className="w-24 h-24 relative cursor-pointer"
          >
            <Image
              src={!hamMenu ? "/icons/menu.svg" : "/icons/close.svg"}
              alt="햄버거메뉴"
              fill
              className="object-cover"
            />
          </div>
        )}

        {dropDown && <Dropdown />}
      </nav>

      {isTablet && (
        <div
          style={{ pointerEvents: hamMenu ? "auto" : "none" }}
          className="overflow-hidden h-screen w-full absolute top-0 z-10"
        >
          <Hammenu
            loginState={loginState}
            hamMenu={hamMenu}
            handleHamMenu={handleHamMenu}
          />
        </div>
      )}
      <div className="w-full h-1 bg-line-02 absolute bottom-0 z-20"></div>
    </div>
  );
}

export default Gnb;
