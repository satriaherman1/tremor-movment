import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { mediumBreakpoints } from "@config/ui/variables";

const BecomeMentor = (props: BoxProps) => {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box textAlign="center" {...props} maxW="1000px" mx="auto">
      <Heading as="h1">Join Our Network</Heading>
      <Text color="#999999" mt="20px">
        Explore endless opportunities in the world of trading by becoming a part
        of our vibrant and dynamic network.
      </Text>
      <Flex justifyContent="space-between" mt="60px">
        <Box flexBasis={mediumScreen ? "46%" : "100%"}>
          <Image
            src="/img/home/mentor-list.png"
            height="200px"
            display="block"
            mx="auto"
            alt="our mentor"
          />

          <Button
            variant="outline"
            color="white"
            bg="rgba(255, 255, 255, 0.10)"
            _hover={{ background: "rgba(255, 255, 255, 0.10)" }}
            border="1px solid  #666666"
            mt="60px"
            mx="auto"
          >
            Become a Mentor
          </Button>
        </Box>
        <Box flexBasis={mediumScreen ? "46%" : "100%"}>
          <Image
            src="/img/home/global-mentor.png"
            height="200px"
            display="block"
            mx="auto"
            alt="our mentor"
          />

          <Button
            variant="outline"
            color="white"
            bg="rgba(255, 255, 255, 0.10)"
            _hover={{ background: "rgba(255, 255, 255, 0.10)" }}
            border="1px solid  #666666"
            mt="60px"
            mx="auto"
          >
            Become a Mentor
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default BecomeMentor;
