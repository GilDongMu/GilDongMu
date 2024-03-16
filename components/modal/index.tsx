import Image from "next/image";
import { ReactNode } from "react";

import ModalLayout from "@/components/modal/layout";

export type ModalType =
  | "emailNotFound"
  | "passwordMismatch"
  | "signupSuccess"
  | "emailInUse"
  | "writingSuccess"
  | "writingCancel"
  | "userProfile"
  | "travelApply"
  | "travelCancle";

interface ModalProps {
  modalType: ModalType;
  favoriteSpots?: string[];
  bio?: string;
  nickname?: string;
  onClose: () => void;
}

export default function Modal({ modalType, onClose }: ModalProps) {
  let title: string = "";
  let message: string | ReactNode = "";

  const favoriteSpots = ["서울", "블라디보스톡", "로스앤젤레스"];
  const bio =
    "자기소개 공간 3줄 공백 포함 75자 정도 안녕하세요 길동무 같이 해요 자기소개 공간 3줄 공백 포함 75자 정도 안녕하세요 길동무 같이 해요 자기소개 공간 3줄 공백 포함 75자 정도 안녕하세요 길동무 같이 해요 자기소개 공간 3줄 공백 포함 75자 정도 안녕하세요 길동무 같이 해요";
  const nickname = "닉네임";

  switch (modalType) {
    case "emailNotFound":
      title = "로그인 실패";
      message = "존재하지 않는 이메일입니다.";
      break;
    case "passwordMismatch":
      title = "로그인 실패";
      message = "비밀번호를 확인해주세요.";
      break;
    case "signupSuccess":
      title = "회원가입 완료";
      message = "가입이 완료되었습니다.";
      break;
    case "emailInUse":
      title = "";
      message = "이미 사용중인 이메일입니다.";
      break;
    case "writingSuccess":
      title = "";
      message = "모집글 작성을 완료했습니다.";
      break;
    case "writingCancel":
      title = "글쓰기 취소";
      message = (
        <>
          글쓰기를 취소하시겠습니까?
          <br />
          작성 중인 내용은 저장되지 않습니다.
        </>
      );
      break;
    case "userProfile":
      title = "사용자 프로필";
      message = (
        <div className="moblie:gap-12 flex w-[432px] flex-col gap-20 mobile:w-272">
          <div className="flex flex-col items-center gap-12 mobile:gap-8">
            <div className="moblie:w-64 h-72 w-72 overflow-hidden rounded-full mobile:h-64">
              <Image
                src={"/icons/defaultProfile.png"}
                alt="프로필 이미지"
                width={72}
                height={72}
                className="moblie:w-64 h-72 w-72 object-cover mobile:h-64"
              />
            </div>
            <div className="text-center text-16 font-bold leading-[130%] tracking-[0.6px] text-text-01 mobile:text-14">
              {`${nickname}(남/27)`}
            </div>
          </div>
          <div className="flex items-start justify-center gap-12 mobile:gap-8">
            {favoriteSpots.map((favoriteSpot, index) => (
              <div
                key={index}
                className="moblie:py-12 flex h-34 w-full items-center justify-center rounded-24 border-[1px] border-[#A8A29E] py-16 mobile:h-28 mobile:py-12"
              >
                <span className="text-16 font-normal leading-[130%] tracking-[0.6px] text-[#A8A29E] mobile:text-14">
                  {favoriteSpot.length > 4
                    ? `#${favoriteSpot.slice(0, 4)}...`
                    : `#${favoriteSpot}`}
                </span>
              </div>
            ))}
          </div>
          <div className="justify-left flex w-full items-center self-stretch rounded-16 bg-bg-02 p-16 text-left text-14 font-normal">
            {bio.length > 75 ? `#${bio.slice(0, 75)}...` : bio}
          </div>
        </div>
      );
      break;
    case "travelApply":
      title = "신청하기";
      message = (
        <>
          길동무 모집 정보를 확인하셨나요?
          <br />
          신청하시겠습니까?
        </>
      );
      break;
    case "travelCancle":
      title = "취소하기";
      message = "이 길동무 신청을 취소하시겠습니까?";
      break;
    default:
      break;
  }

  return (
    <>
      <ModalLayout
        modalType={modalType}
        modalTitle={title}
        modalMessage={message}
        onClose={onClose}
      />
    </>
  );
}
