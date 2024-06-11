import Head from "next/head";

import WritingButton from "@/components/Button/Writing";
import Header from "@/components/Header";
import Filter from "@/components/Travel/Contents/Filter";
import Paging from "@/components/Travel/Contents/Paging";
import IsMobile from "@/hooks/isMobile";

function Travel() {
  const { isMobile } = IsMobile();
  return (
    <>
      <Head>
        <title>여행</title>
        <meta name="description" content="여행 친구를 구해봐요! 길동무" />
      </Head>
      <Header headerColor={"bg-blue-400"}>
        가고 싶은 여행지 검색하고, {isMobile ? <br /> : null}
        길동무를 찾아보세요!
      </Header>

      <Filter />

      <Paging />

      <WritingButton />
    </>
  );
}

export default Travel;
