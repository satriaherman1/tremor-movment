import { Box, Flex, Text } from "@chakra-ui/react";

export interface IHotelStatisticBox {
  Icon: React.ReactElement;
  title: string;
  description: string;
}

const HotelStatisticBox = ({
  Icon,
  title,
  description,
}: IHotelStatisticBox) => {
  return (
    <Box w="100%">
      <Text color="white" fontWeight={500}>
        {title}
      </Text>

      <Box
        mt="10px"
        w="100%"
        borderRadius="8px"
        padding="10px 18px"
        bgColor="rgba(255, 255, 255, 0.10);"
      >
        <Flex color="white" alignItems="center" gap="8px">
          {Icon}
          <Text fontWeight={600}>{description}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default HotelStatisticBox;
