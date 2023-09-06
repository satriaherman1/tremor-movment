import {
  Avatar,
  Box,
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
import { containerMaxWidth, mediumBreakpoints } from "@config/ui/variables";

const HomeMainContent = () => {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box as="main" bgColor="#121212" color="white" pt="180px">
      <Container maxW={containerMaxWidth}>
        <Flex
          justifyContent="space-between"
          flexDir={mediumScreen ? "row" : "column"}
          rowGap="50px"
        >
          <Box flexBasis={mediumScreen ? "45%" : "100%"}>
            <Text>About Us</Text>
            <Heading as="h1" fontSize="40px">
              Innovating Strategy and Results at{" "}
              <Box
                as="span"
                bg="linear-gradient(102deg, #1681E4 35.89%, #E657E5 87.46%)"
                bgClip="text"
                fill="transparent"
              >
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
            <Heading as="h1" fontSize="40px" marginTop="20px" lineHeight="150%">
              Words from Our
              <Box
                as="span"
                bg="linear-gradient(102deg, #1681E4 35.89%, #E657E5 87.46%)"
                bgClip="text"
                fill="transparent"
                mx="12px"
              >
                Satisfied
              </Box>
              User
            </Heading>
          </Box>

          <Divider
            orientation="vertical"
            height="200px"
            width="0.3px"
            bg="white"
          />

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

          <Flex></Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeMainContent;
