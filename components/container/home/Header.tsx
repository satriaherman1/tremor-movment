import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { mediumBreakpoints } from "@config/ui/variables";

const HomeHeader = () => {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Flex
      justifyContent="center"
      flexDir={mediumScreen ? "row" : "column-reverse"}
      columnGap="80px"
      paddingY="40px"
      rowGap="60px"
    >
      <Box color="white" maxW="800px" textAlign="center">
        <Heading
          as="h1"
          fontSize={mediumScreen ? "58px" : "36px"}
          fontWeight="600"
        >
          Find Best Hotel Services and get your Dream Space
        </Heading>

        <Text mt="40px">
          Sed omnis dolor et ipsam dignissimos tenetur quod dolor. Totam ut
          voluptatum libero consequatur autem dolore molestia.
        </Text>

        <Flex justifyContent="center" mt="40px" columnGap="20px">
          <Button color="primary.500">Sign Up</Button>
          <Button variant="outline" color="white" _hover={{ color: "white" }}>
            Contact Us
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HomeHeader;
