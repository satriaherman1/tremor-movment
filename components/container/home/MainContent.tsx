import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Skeleton,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import BoltIcon from "@components/commons/icons/Bolt";
import PresentationGraphIcon from "@components/commons/icons/PresentationGraph";
import UserGroupRoundedIcon from "@components/commons/icons/UserGroupRounded";
import BecomeMentor from "@components/container/home/BecomeMentor";
import LatestBlog from "@components/container/home/LatestBlog";
import GrowthStrategiesBox, {
  IGrowthStrategiesBox,
} from "@components/fragments/growth-strategies-box";
import MembershipBenefit, {
  IMemberShipBenefit,
} from "@components/fragments/membership-benefit";
import {
  containerMaxWidth,
  largeBreakpoints,
  mediumBreakpoints,
} from "@config/ui/variables";

const HomeMainContent = () => {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);

  const benefitList: IMemberShipBenefit[] = [
    {
      no: "01",
      title: "Exclusive Hotel Deals",
      description:
        "Gain access to an array of exclusive deals and special discounts designed specifically for our valued members, ensuring that every hotel stay is uniquely tailored to match your individual preferences and desires.",
    },
    {
      no: "02",
      title: "Exclusive Hotel Deals",
      description:
        "These exceptional offers are designed to elevate your travel experiences, ensuring that you enjoy the utmost comfort, luxury, and savings with every booking.",
    },
    {
      no: "03",
      title: "Exclusive Hotel Deals",
      description:
        "These exceptional offers are designed to elevate your travel experiences, ensuring that you enjoy the utmost comfort, luxury, and savings with every booking.",
    },
    {
      no: "04",
      title: "Exclusive Hotel Deals",
      description:
        "These exceptional offers are designed to elevate your travel experiences, ensuring that you enjoy the utmost comfort, luxury, and savings with every booking.",
    },
  ];

  const growthStrategiesList: IGrowthStrategiesBox[] = [
    {
      icon: <BoltIcon fontSize="36px" />,
      title: "Turning Insights into Opportunities",
      description:
        "In the vibrant sphere of hotel bookings, experience reigns supreme. Every member of our Booking Analysis Team has walked the challenging path of hotel booking trading without the support of advanced systems.",
    },
    {
      icon: <PresentationGraphIcon fontSize="36px" />,
      title: "Veterans in Hotel Profit Strategies and Market Dynamicss",
      description:
        "In the vibrant sphere of hotel bookings, experience reigns supreme. Every member of our Booking Analysis Team has walked the challenging path of hotel booking trading without the support of advanced systems.",
    },
    {
      icon: <UserGroupRoundedIcon fontSize="36px" />,
      title: "To Our Hotel Booking Traders: Experience Meets Innovation",
      description:
        "In the vibrant sphere of hotel bookings, experience reigns supreme. Every member of our Booking Analysis Team has walked the challenging path of hotel booking trading without the support of advanced systems.",
    },
  ];

  const h1FontSize = mediumScreen ? "40px" : "28px";
  const gradientTextStyle: BoxProps = {
    bg: "linear-gradient(102deg, #1681E4 35.89%, #E657E5 87.46%)",
    bgClip: "text",
    fill: "transparent",
  };

  return (
    <Box
      as="main"
      bgColor="#121212"
      color="white"
      pt="180px"
      overflowY="hidden"
      pb="150px"
    >
      <Container maxW={containerMaxWidth}>
        <Flex
          justifyContent="space-between"
          flexDir={mediumScreen ? "row" : "column"}
          rowGap="50px"
        >
          <Box flexBasis={mediumScreen ? "45%" : "100%"}>
            <Text>About Us</Text>
            <Heading as="h1" fontSize={h1FontSize}>
              Innovating Strategy and Results at{" "}
              <Box as="span" {...gradientTextStyle}>
                D-edge
              </Box>{" "}
            </Heading>
          </Box>

          <Box flexBasis={mediumScreen ? "45%" : "100%"}>
            <Text lineHeight="35px">
              At D-edge, we redefine the art of trading, where innovation meets
              strategy and results. With a passion for financial empowerment, we
              have embarked on a journey to provide you with a seamless and
              intuitive trading experience. Our team of seasoned experts
              combines their expertise with cutting-edge technology, ensuring
              that your trading endeavors are backed by reliable insights and a
              user-centric approach.
            </Text>

            <Button colorScheme="primary" mt="50px">
              Download Ebook
            </Button>
          </Box>
        </Flex>

        <Box py="140px">
          <Image
            src="/img/home/video-home.jpg"
            width="full"
            alt="tutorial"
            fallback={<Skeleton height="300px" width="100%" />}
          />
        </Box>

        {/* testimonials */}
        <Flex
          justifyContent="space-between"
          flexDir={mediumScreen ? "row" : "column"}
          rowGap="50px"
        >
          <Box flexBasis={mediumScreen ? "30%" : "100%"}>
            <Text>Testimonials</Text>
            <Heading
              as="h1"
              fontSize={h1FontSize}
              marginTop="20px"
              lineHeight="150%"
            >
              Words from Our
              <Box {...gradientTextStyle} as="span" mx="12px">
                Satisfied
              </Box>
              User
            </Heading>
          </Box>

          {mediumScreen && (
            <Divider
              orientation="vertical"
              height="200px"
              width="0.3px"
              bg="white"
            />
          )}

          <Box flexBasis={mediumScreen ? "55%" : "100%"}>
            <Text lineHeight="35px">
              &ldquo;I remember my first day with D-edge and thinking is this
              really going to change anything well now I can confidently say yes
              it does&ldquo;
            </Text>

            {/* avatar section */}
            <Flex mt="60px" gap="20px">
              <Avatar name="Daisy Moon" src="/avatar/daisy-moon.jpg" />
              <Box>
                <Text fontWeight="600" fontSize="18px">
                  Daisy Moon
                </Text>
                <Text fontSize="14px">Satisfied User</Text>
              </Box>
            </Flex>
            {/* end avatar section */}
          </Box>
        </Flex>
        {/* end testimonials */}

        {/* Be a member */}

        <Box mt="180px">
          <Box textAlign="center">
            <Heading as="h1">
              Be a Member, Trade Hotels, and Enjoy the Membership Benefits!
            </Heading>
            <Text mt="12px" color="#999">
              Join us as a member, engage in hotel trading, and relish exclusive
              membership perks!
            </Text>
          </Box>

          <Flex
            flexDir={mediumScreen ? "row" : "column-reverse"}
            mt="90px"
            rowGap="40px"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flexDir="column"
              rowGap="50px"
              flexBasis={mediumScreen ? "43%" : "100%"}
            >
              {benefitList.map((benefit) => (
                <MembershipBenefit key={benefit.no} {...benefit} />
              ))}
            </Box>

            <Box flexBasis={mediumScreen ? "43%" : "100%"}>
              <Image
                src="/img/home/be-member.jpg"
                width="100%"
                alt="be member"
              />
            </Box>
          </Flex>
        </Box>
        {/* end be member */}

        {/* hotel booking */}
        <Box mt="180px">
          <Heading textAlign="center">Hotel Booking Trading</Heading>

          <Flex
            mt="70px"
            justifyContent="space-between"
            flexDir={mediumScreen ? "row" : "column"}
            rowGap="50px"
          >
            <Box flexBasis={mediumScreen ? "46%" : "100%"}>
              <Image
                src="/img/home/hotel-booking.jpg"
                width="100%"
                alt="tutorial"
              />
            </Box>
            <Box flexBasis={mediumScreen ? "46%" : "100%"}>
              <Text lineHeight="35px">
                At D-edge, we redefine the art of trading, where innovation
                meets strategy and results. With a passion for financial
                empowerment, we have embarked on a journey to provide you with a
                seamless and intuitive trading experience. Our team of seasoned
                experts combines their expertise with cutting-edge technology,
                ensuring that your trading endeavors are backed by reliable
                insights and a user-centric approach.
              </Text>
              <Button
                variant="outlined"
                mt="60px"
                bg="#1A1A1A"
                _hover={{ background: "#303030" }}
                border="1px solid  #666666"
              >
                Read More
              </Button>
            </Box>
          </Flex>
        </Box>
        {/* end hotel booking */}

        {/* growth strategies */}
        <Box mt="180px">
          <Flex
            justifyContent="space-between"
            flexDir={mediumScreen ? "row" : "column"}
            rowGap="20px"
          >
            <Heading as="h1" fontSize={h1FontSize}>
              Market Team&rsquo;s{" "}
              <Box as="span" {...gradientTextStyle}>
                Growth
              </Box>{" "}
              Strategies
            </Heading>

            <Button colorScheme="primary" display="block" w="fit-content">
              See Our Team
            </Button>
          </Flex>

          <Flex
            rowGap="50px"
            justifyContent="space-between"
            mt="40px"
            flexWrap="wrap"
          >
            {growthStrategiesList.map((gs) => (
              <GrowthStrategiesBox
                flexBasis={largeScreen ? "32%" : mediumScreen ? "48%" : "100%"}
                key={gs.title}
                {...gs}
              />
            ))}
          </Flex>
        </Box>
        {/* end growth strategies */}

        {/* Latest Blog */}
        <LatestBlog mt="150px" />
        {/* end Latest Blog */}

        {/* become mentor */}
        <BecomeMentor mt="150px" />
        {/* end become mentor */}
      </Container>
    </Box>
  );
};

export default HomeMainContent;
