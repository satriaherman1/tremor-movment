import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import EasyDecorator from "@components/commons/svg/EasyDecorator";
import RecommendedArticle, {
  IRecommendedArticle,
} from "@components/fragments/recommended-blog";
import { largeBreakpoints, mediumBreakpoints } from "@config/ui/variables";
import Link from "next/link";
import { memo, useEffect, useState } from "react";

const LatestBlog = (props: BoxProps) => {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);
  const [recommendedBlogs, setRecommendedBlogs] = useState<
    IRecommendedArticle[]
  >([]);
  const h1FontSize = mediumScreen ? "40px" : "28px";

  const dummyBlogs: IRecommendedArticle[] = [
    {
      title:
        "Cryptocurrency Craze Continues: Exploring the Latest Trends in Trading",
      date: "August 14, 2023",
      imgSrc: "/img/home/blog-2.png",
    },
    {
      title: "Global Stock Exchanges Reach Record Highs Amidst Economic Shifts",
      date: "August 14, 2023",
      imgSrc: "/img/home/blog-3.png",
    },
    {
      title:
        "Algorithmic Trading's Rise: Examining the Role of AI in Financial Markets",
      date: "August 14, 2023",
      imgSrc: "/img/home/blog-2.png",
    },
    {
      title: "Market Volatility Surges: Traders Navigate Unpredictable Terrain",
      date: "August 14, 2023",
      imgSrc: "/img/home/blog-3.png",
    },
  ];

  const getRecommendedBlogs = () => {
    setRecommendedBlogs(dummyBlogs);
  };

  useEffect(() => {
    getRecommendedBlogs();
  }, []);

  return (
    <Box {...props} pos="relative">
      <EasyDecorator
        top="-50px"
        left="-90px"
        width="800px"
        height="800px"
        pos="absolute"
        zIndex="1"
      />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        pos="relative"
        zIndex={2}
      >
        <Heading as="h1" fontSize={h1FontSize}>
          Latest Blog
        </Heading>

        <Link href="/blogs">See all</Link>
      </Flex>

      <Divider bg="#666666" my="40px" />

      <Flex
        pos="relative"
        zIndex={2}
        justifyContent="space-between"
        flexDir={mediumScreen ? "row" : "column"}
      >
        <Box flexBasis={mediumScreen ? "47%" : "100%"}>
          <Image src="/img/home/blog-1.png" w="100%" alt="last blog" />
        </Box>

        <Box flexBasis={mediumScreen ? "47%" : "100%"}>
          <Text color="#cccccc">August 14, 2023</Text>
          <Heading as="h2" fontSize="26px" lineHeight="150%" mt="16px">
            Market Volatility Surges: Traders Navigate Unpredictable Terrain
          </Heading>

          <Text color="#cccccc" lineHeight="200%" mt="20px">
            In the midst of rapidly changing market dynamics, traders find
            themselves facing heightened volatility. This article delves into
            the challenges and strategies employed by traders to navigate the
            unpredictable landscape, seeking stability amidst fluctuations.
          </Text>
          <Button
            variant="outlined"
            mt="60px"
            bg="#1A1A1A"
            _hover={{ background: "#303030" }}
            border="1px solid  #666666"
          >
            Read More
          </Button>
        </Box>
      </Flex>

      <Flex
        pos="relative"
        zIndex={2}
        flexWrap="wrap"
        mt="60px"
        justifyContent="space-between"
        gap="40px"
      >
        {dummyBlogs.map((blog) => (
          <RecommendedArticle
            flexBasis={
              largeScreen
                ? "calc(100% / 4 - 40px)"
                : mediumScreen
                ? "calc(100% / 2 - 40px)"
                : "100%"
            }
            key={blog.title}
            {...blog}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default memo(LatestBlog);
