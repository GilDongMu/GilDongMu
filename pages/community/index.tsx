import Head from "next/head";

import CommuList from "@/components/Community/Commulist";
import CommuHeader from "@/components/Community/Header";

function Community() {
  return (
    <>
      <Head>
        <title>소통공간</title>
        <meta name="description" content="여행 친구를 구해봐요! 길동무" />
      </Head>
      <div style={{ height: "calc(100vh - 60px)" }} className="h-full bg-bg-05">
        <CommuHeader />
        <CommuList />
      </div>
    </>
  );
}

export default Community;
