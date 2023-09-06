import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export interface IMemberShipBenefit {
  title: string;
  no: string;
  description: string;
}

const MembershipBenefit = ({ title, no, description }: IMemberShipBenefit) => {
  const gradient = "linear-gradient(145deg, #903AFD -6.14%, #E657E5 106.69%);";
  return (
    <Flex columnGap="30px">
      <Box
        bg={gradient}
        padding="18px 22px"
        borderRadius="10px"
        fontWeight="600"
        height="fit-content"
        width="fit-content"
      >
        <Text>{no}</Text>
      </Box>

      <Box>
        <Heading as="h6" fontSize="18px" letterSpacing="0.1px">
          {title}
        </Heading>
        <Text color="#999" marginTop="15px" lineHeight="150%">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default MembershipBenefit;
