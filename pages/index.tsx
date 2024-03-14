import { useEffect } from "react";

import Contents from "@/components/main/contents";
import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import useGnbStore from "@/store/gnb";

export default function Main() {
  const { setGnbColor } = useGnbStore();
  useEffect(() => {
    setGnbColor("text-primary-press");
  }, [setGnbColor]);

  return (
    <>
      <Header />
      <Contents />
      <Footer />
    </>
  );
}
