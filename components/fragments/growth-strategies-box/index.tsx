import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";

export interface IGrowthStrategiesBox extends BoxProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const GrowthStrategiesBox = ({
  icon,
  title,
  description,
  ...props
}: IGrowthStrategiesBox) => {
  const iconBoxStyle: BoxProps = {
    borderRadius: "10px",
    background: "linear-gradient(143deg, #903AFD -10.14%, #E657E5 107.71%)",
    boxShadow: "0px 4px 28px 0px rgba(230, 87, 229, 0.20)",
    padding: "15px",
    width: "fit-content",
    height: "fit-content",
  };
  return (
    <Box
      padding="35px 30px"
      borderRadius="10px"
      bg="rgba(255, 255, 255, 0.02)"
      {...props}
    >
      <Box {...iconBoxStyle}>{icon}</Box>

      <Box mt="40px">
        <Heading as="h6" fontSize="18px" fontWeight="500">
          {title}
        </Heading>
        <Text mt="19px" lineHeight="180%" color="#999">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default GrowthStrategiesBox;
