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
    <Box bgColor="#F2F2F2" padding="20px 18px" borderRadius="12px" w="100%">
      <Text color="#999999" fontWeight={500}>
        {title}
      </Text>

      <Flex alignItems="center" gap="8px" mt="12px">
        {Icon}
        <Text fontWeight={600}>{description}</Text>
      </Flex>
    </Box>
  );
};

export default HotelStatisticBox;
