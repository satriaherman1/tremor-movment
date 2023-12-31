import { Box, BoxProps, Container } from "@chakra-ui/react";
import Footer from "@components/commons/Footer";
import Navigation from "@components/commons/Navigation";
import HomeHeader from "@components/container/home/Header";
import HotelStatistics from "@components/container/home/HotelStatistics";
import HomeMainContent from "@components/container/home/MainContent";
import Head from "next/head";

export default function Home() {
  const bgSrc = "/img/hero.jpg";

  const decoratorStyle: BoxProps = {
    bgImage: "/img/home/header.png",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    paddingBottom: "280px",
    bgSize: "100%",
  };
  return (
    <>
      <Head>
        <title>Tremor Movment - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bgColor="#121212">
        <Box as="header">
          <Box {...decoratorStyle}>
            <Container maxW="1400px">
              <Navigation />
              <HomeHeader />
              <HotelStatistics />
            </Container>
          </Box>
        </Box>

        <HomeMainContent />

        <Footer />
      </Box>
    </>
  );
}
