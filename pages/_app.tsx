import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

import Gnb from "@/components/Gnb";
import Modal from "@/components/Modal";
import useCookie from "@/hooks/useCookie";
import useGnbStore from "@/stores/gnb";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { setGnbColor } = useGnbStore();
  const accessToken = useCookie("accessToken");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (router.pathname.startsWith("/travel")) {
      setGnbColor("travel");
    } else if (router.pathname.startsWith("/community")) {
      setGnbColor("community");
    } else if (router.pathname.startsWith("/mytravel")) {
      setGnbColor("mytravel");
    } else {
      setGnbColor("");
    }
  }, [router.pathname, setGnbColor]);

  const handleButtonClick = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (
      (router.pathname === "/community" ||
        router.pathname.startsWith("/mytravel") ||
        router.pathname.startsWith("/mypage") ||
        router.pathname.startsWith("/write")) &&
      !accessToken
    ) {
      timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 1000);
    } else if (
      (router.pathname.startsWith("/login") ||
        router.pathname.startsWith("/signup")) &&
      accessToken
    ) {
      router.push("/");
    }

    return () => clearTimeout(timer);
  }, [accessToken, router]);

  return (
    <>
      <Head>
        <title>길동무</title>
        <meta name="description" content="여행 친구를 구해봐요! 길동무" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          themes={["light", "dark"]}
        >
          <Gnb />
          <Component {...pageProps} />
          {isModalOpen && (
            <Modal modalType="loginRequired" onClose={handleButtonClick} />
          )}

          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
