import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import FacebookIcon from "@components/commons/icons/Facebook";
import InstagramIcon from "@components/commons/icons/Instagram";
import TwitterIcon from "@components/commons/icons/Twitter";
import YoutubeIcon from "@components/commons/icons/Youtube";
import {
  containerMaxWidth,
  largeBreakpoints,
  mediumBreakpoints,
} from "@config/ui/variables";
import Link from "next/link";

const Footer = (props: BoxProps) => {
  const gradientStyle: BoxProps = {
    background: "linear-gradient(137deg, #7B23EB -5.98%, #E657E5 100.46%)",
  };

  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);

  const linkStyle: any = {
    display: "block",
    width: "fit-content",
  };

  return (
    <Box as="footer" {...gradientStyle} {...props} py="40px" color="white">
      <Container maxWidth={containerMaxWidth}>
        <Flex
          justifyContent="space-between"
          flexDir={largeScreen ? "row" : "column"}
          rowGap="60px"
        >
          <Box flexBasis={mediumScreen ? "calc(40% - 60px)" : "100%"}>
            <Image src="/logo.png" width="150px" alt="logo" />

            <Text mt="30px">
              Experience a new way to explore the world of travel with our
              innovative Hotel Booking Trading platform. Seamlessly trade your
              booked hotel reservations with fellow travelers, unlocking a world
              of possibilities and flexibility.
            </Text>

            <Flex mt="30px" gap="20px">
              <FacebookIcon fontSize="20px" />
              <InstagramIcon fontSize="20px" />
              <TwitterIcon fontSize="20px" />
              <YoutubeIcon fontSize="20px" />
            </Flex>
          </Box>
          <Flex
            flexBasis={mediumScreen ? "50%" : "100%"}
            justifyContent="space-between"
            rowGap="50px"
            flexDir={mediumScreen ? "row" : "column"}
          >
            <Box flexBasis={mediumScreen ? "calc(100% / 3 - 40px)" : "100%"}>
              <Heading as="h6" fontSize="20px" fontWeight={600}>
                Menu
              </Heading>
              <Flex flexDir="column" gap="14px" mt="30px">
                <Link href="/" style={linkStyle}>
                  Home
                </Link>
                <Link href="/" style={linkStyle}>
                  Trading Membership
                </Link>
                <Link href="/" style={linkStyle}>
                  Reservation Types
                </Link>
                <Link href="/" style={linkStyle}>
                  Blog
                </Link>
                <Link href="/" style={linkStyle}>
                  Terms & Conditions
                </Link>
              </Flex>
            </Box>
            <Box flexBasis={mediumScreen ? "calc(100% / 3 - 40px)" : "100%"}>
              <Heading as="h6" fontSize="20px" fontWeight={600}>
                Contact Us
              </Heading>
              <Flex flexDir="column" gap="14px" mt="30px">
                <Text>dedge@gmail.com</Text>
                <Button padding="15px 27px" width="fit-content">
                  Submit Testimonials
                </Button>
              </Flex>
            </Box>
            <Box flexBasis={mediumScreen ? "calc(100% / 3 - 40px)" : "100%"}>
              <Heading as="h6" fontSize="20px" fontWeight={600}>
                Maps
              </Heading>
              <Box
                as="iframe"
                mt="30px"
                borderRadius="8px"
                width="100%"
                height="200px"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765714.04675797!2d61.007166285890456!3d19.730483714349845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b2a7b793adcfd%3A0x5e65f5500e37035e!2sKashmir%2C%20Himachal%20Pradesh%20177006%2C%20India!5e0!3m2!1sen!2sid!4v1694063069110!5m2!1sen!2sid"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></Box>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
