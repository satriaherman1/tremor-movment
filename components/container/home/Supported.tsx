import { Box, BoxProps, Flex, Heading, Image } from "@chakra-ui/react";

export default function Supported(props: BoxProps) {
  return (
    <Box {...props}>
      <Heading as="h1" textAlign="center" fontSize="40px">
        D-edge Hospitality Business
      </Heading>

      <Flex gap="40px" mt="80px" justifyContent="center">
        <Image src="/img/home/open-door.svg" />
        <Image src="/img/home/sponsor1.svg" />
        <Image src="/img/home/trivago.svg" />
        <Image src="/img/home/d-edge.svg" />
        <Image src="/img/home/booking.svg" />
      </Flex>
      <Flex gap="40px" justifyContent="center" mt="40px">
        <Image src="/img/home/coinbase.svg" />
        <Image src="/img/home/outreach.svg" />
        <Image src="/img/home/doordash.svg" />
        <Image src="/img/home/paypal.svg" />
        <Image src="/img/home/accord.svg" />
      </Flex>
    </Box>
  );
}
