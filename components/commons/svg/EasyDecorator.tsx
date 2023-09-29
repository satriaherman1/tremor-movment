import { Box, BoxProps } from "@chakra-ui/react";

const EasyDecorator = (props: BoxProps) => {
  return (
    <Box
      borderRadius="1167px;"
      opacity="0.4"
      background="linear-gradient(180deg, #903AFD -6.04%, #E657E5 111.3%);"
      filter="blur(250px);"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    ></Box>
  );
};

export default EasyDecorator;
