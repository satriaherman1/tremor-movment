import { Box, BoxProps, Container } from "@chakra-ui/react";
import Navigation from "@components/commons/Navigation";
import HomeHeader from "@components/container/home/Header";
import HotelStatistics from "@components/container/home/HotelStatistics";
import HomeMainContent from "@components/container/home/MainContent";
import Head from "next/head";

export default function Home() {
  const bgSrc = "/img/hero.jpg";
  const headerStyle: BoxProps = {
    bg: "linear-gradient(115deg, #1681E4 -8.14%, #E657E5 96.22%);",
    width: "100%",
    height: "fit-content",
  };

  const decoratorStyle: BoxProps = {
    bgImage: "/img/header-decorator.svg",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    bgPos: "0 90%",
    bgSize: "contain",
  };
  return (
    <>
      <Head>
        <title>Tremor Movment - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Box as="header" {...headerStyle}>
          <Box {...decoratorStyle}>
            <Container maxW="1400px">
              <Navigation />
              <HomeHeader />
              <HotelStatistics />
            </Container>
          </Box>
        </Box>

        <HomeMainContent />
      </Box>
    </>
  );
}
