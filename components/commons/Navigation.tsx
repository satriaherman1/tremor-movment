import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import ArrowRightUp from "@components/commons/icons/ArrowRightUp";
import { mediumBreakpoints } from "@config/ui/variables";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

const Navigation = () => {
  const router = useRouter();

  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

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
    {
      name: "terms and condition",
      path: "/term-condition",
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

      {mediumScreen ? (
        <>
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
            <Button
              color="primary.500"
              rightIcon={<ArrowRightUp fontSize="10px" />}
            >
              Booking Station
            </Button>
          </Flex>
        </>
      ) : (
        <IconButton
          aria-label="hamburger"
          borderRadius="4px"
          padding="8px"
          variant="link"
          color="white"
          fontSize="28px"
        >
          <HamburgerIcon />
        </IconButton>
      )}
    </Flex>
  );
};

export default memo(Navigation);
