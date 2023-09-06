import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

const Navigation = () => {
  const router = useRouter();

  const navList = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "trading membership",
      path: "/trading-membership",
    },
    {
      name: "reservation types",
      path: "/reservation-types",
    },
    {
      name: "blogs",
      path: "/blogs",
    },
  ];

  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      color="white"
      py="20px"
    >
      <Image src="/logo.png" width="150px" alt="logo" />

      <Flex justifyContent="space-between" gap="30px">
        {navList.map(({ path, name }) => (
          <Link key={path} href={name}>
            <Box
              as="span"
              opacity={router.pathname === path ? 1 : 0.7}
              textTransform="capitalize"
            >
              {name}
            </Box>
          </Link>
        ))}
      </Flex>

      <Flex gap="20px">
        <Button colorScheme="black" size="sm">
          Sign Up
        </Button>
        <Button size="sm">Login</Button>
      </Flex>
    </Flex>
  );
};

export default memo(Navigation);
