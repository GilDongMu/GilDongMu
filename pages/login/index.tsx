import Image from "next/image";

import { Button } from "@/components/ui/button";
import useToggle from "@/hooks/useToggle";

export default function Login() {
  const [eye, setEye, toggleEye] = useToggle(true);

  return (
    <>
      <div className="flex" style={{ height: "calc(100vh - 72px)" }}>
        <div className="h-full w-1/2 bg-kakao text-50 tablet:hidden"></div>
        <div className="flex h-full w-1/2 items-center justify-center bg-bg-06 text-14 tablet:w-full">
          <div className="flex h-5/6 max-h-[617px] w-[434px] flex-col items-center justify-between rounded-32 bg-white p-40 tablet:mt-[81.5px] mobile:mx-24 mobile:mt-[50.5px] mobile:w-full">
            <h1 className="text-32 font-extrabold text-text-01">로그인</h1>
            <ul className="w-full">
              <li className="relative mb-32 w-full">
                <input
                  type="email"
                  placeholder="이메일"
                  className="flex h-52 w-full items-center justify-end gap-8 self-stretch rounded-xl bg-bg-02 px-16"
                />
              </li>
              <li className="relative w-full">
                <input
                  type={eye ? "password" : "text"}
                  placeholder="비밀번호"
                  className="flex h-52 w-full items-center justify-end gap-8 self-stretch rounded-xl bg-bg-02 px-16"
                />
                <Image
                  src={eye ? "/icons/eye-off.png" : "/icons/eye-on.png"}
                  alt="eye"
                  width="24"
                  height="24"
                  className="absolute right-16 top-14"
                  onClick={toggleEye}
                />
              </li>
            </ul>
            <div className="w-full text-18">
              <Button
                variant="ghost"
                className="mb-20 h-52 w-full bg-stone-200"
              >
                로그인
              </Button>
              <Button
                variant="ghost"
                className="h-52 w-full border-[1.5px] !text-primary hover:bg-primary-press hover:!text-primary-foreground"
              >
                회원 가입하기
              </Button>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="w-1/3 border-b border-line-01"></div>
              <p className="flex w-1/3 justify-center text-16 leading-[130%] tracking-[-0.6px] text-text-01">
                SNS 로그인
              </p>
              <div className="w-1/3 border-b border-line-01"></div>
            </div>
            <div className="flex w-full items-center justify-between text-18">
              <Button
                variant="destructive"
                className="hover:bg-curent mr-20 h-52 w-1/2 bg-kakao text-text-02"
              >
                <Image
                  src="/icons/kakao.png"
                  alt="kakao"
                  width="32"
                  height="32"
                  className="pr-8"
                />
                카카오톡
              </Button>
              <Button
                variant="destructive"
                className="hover:bg-curent h-52 w-1/2 bg-bg-02 text-text-02"
              >
                <Image
                  src="/icons/google.png"
                  alt="google"
                  width="32"
                  height="32"
                  className="pr-8"
                />
                구글
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
