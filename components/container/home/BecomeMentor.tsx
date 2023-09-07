import { Box, BoxProps, Button, Heading, Image, Text } from "@chakra-ui/react";

const BecomeMentor = (props: BoxProps) => {
  return (
    <Box textAlign="center" {...props} maxW="1000px" mx="auto">
      <Heading as="h1">Become a Mentor</Heading>

      <Text color="#999999" mt="20px">
        Becoming a mentor is a rewarding opportunity to share your knowledge,
        skills, and experience with others. It&rsquo;s a chance to make a
        positive impact on someone&rsquo;s life and help them achieve their
        goals.
      </Text>

      <Image
        src="/img/home/mentor-list.png"
        width="100%"
        alt="our mentor"
        mt="60px"
      />

      <Button colorScheme="primary" mt="60px" mx="auto">
        Become a Mentor
      </Button>
    </Box>
  );
};

export default BecomeMentor;
