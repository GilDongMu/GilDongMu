import Head from "next/head";

import SignUpForm from "@/components/Form/SignUpForm";

function Signup() {
  return (
    <>
      <Head>
        <title>회원가입</title>
        <meta name="description" content="여행 친구를 구해봐요! 길동무" />
      </Head>
      <div className="flex flex-col items-center justify-start bg-bg-06 pb-80">
        <h1 className="flex h-120 items-center text-32 font-extrabold text-text-01 tablet:h-100 tablet:text-24">
          회원가입
        </h1>
        <div className="mx-auto flex min-h-screen w-full max-w-[956px] flex-col items-center gap-24 px-24 pb-80 mobile:min-w-[312px]">
          <SignUpForm />
        </div>
      </div>
    </>
  );
}

export default Signup;
