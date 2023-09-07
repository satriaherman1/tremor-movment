import { Box, BoxProps, Heading, Image, Text } from "@chakra-ui/react";

export interface IRecommendedArticle extends BoxProps {
  imgSrc: string;
  title: string;
  date: string;
}

const RecommendedArticle = ({
  imgSrc,
  title,
  date,
  ...props
}: IRecommendedArticle) => {
  return (
    <Box {...props}>
      <Image src={imgSrc} width="100%" alt={title} />

      <Heading
        as="h6"
        fontSize="18px"
        mt="20px"
        fontWeight="normal"
        lineHeight="168%"
      >
        {title}
      </Heading>

      <Text mt="22px" color="#cccccc">
        {date}
      </Text>
    </Box>
  );
};

export default RecommendedArticle;
