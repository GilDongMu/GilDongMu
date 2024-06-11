import Head from "next/head";

import MyPageForm from "@/components/Form/MyPageForm";

function MyPage() {
  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="여행 친구를 구해봐요! 길동무" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-start bg-bg-06 pb-80">
        <h1 className="flex h-120 items-center text-32 font-extrabold text-text-01 tablet:h-100 tablet:text-24">
          마이 페이지
        </h1>
        <div className="mx-auto flex min-h-screen w-full max-w-[956px] flex-col items-center gap-24 px-24 mobile:min-w-[312px]">
          <MyPageForm />
        </div>
      </div>
    </>
  );
}

export default MyPage;
