import Head from "next/head";

import WritingButton from "@/components/Button/Writing";
import Header from "@/components/Header";
import InstallButton from "@/components/InstallBtn";
import Contents from "@/components/Main/Contents";
import Footer from "@/components/Main/Footer";

export default function Main() {
  return (
    <>
      <Head>
        <title>길동무</title>
        <meta name="description" content="여행 친구를 구해봐요! 길동무" />
      </Head>
      <Header headerColor="bg-primary-press">
        이번 여행, 어디로 떠나볼까요?
      </Header>
      <Contents />
      <WritingButton />
      <Footer />
      <InstallButton />
    </>
  );
}
