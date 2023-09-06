import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import HeaderSwiper from "@components/container/home/HeaderSwiper";
import { mediumBreakpoints } from "@config/ui/variables";

const HomeHeader = () => {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Flex
      justifyContent="space-between"
      flexDir={mediumScreen ? "row" : "column"}
      columnGap="80px"
      paddingY="40px"
    >
      <Box color="white" flexBasis={mediumScreen ? "47%" : "100%"}>
        <Heading as="h1" fontSize="58px" fontWeight="600">
          Find Best Hotel Services and get your Dream Space
        </Heading>

        <Text mt="40px">
          Sed omnis dolor et ipsam dignissimos tenetur quod dolor. Totam ut
          voluptatum libero consequatur autem dolore molestia.
        </Text>

        <Flex mt="40px" justifyContent="space-between">
          <Flex gap="30px">
            <Button size="md">Contact Us</Button>

            <Button
              variant="link"
              colorScheme="white"
              textDecoration="underline"
            >
              Learn More
            </Button>
          </Flex>
          <Flex columnGap="20px">
            <AvatarGroup size="md" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>

            <Box>
              <Text fontSize="24px" fontWeight="500" mb={0}>
                7.400+{" "}
              </Text>
              <Text mt="-8px">Active Members</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* swiper */}
      <Box flexBasis={mediumScreen ? "47%" : "100%"} overflowX="hidden">
        <HeaderSwiper />
      </Box>
    </Flex>
  );
};

export default HomeHeader;
