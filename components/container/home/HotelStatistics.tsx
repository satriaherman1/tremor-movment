import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import BedIcon from "@components/commons/icons/BedIcon";
import CalendarIcon from "@components/commons/icons/Calendar";
import PoinOnMapIcon from "@components/commons/icons/PointOnMap";
import SearchIcon from "@components/commons/icons/Search";
import HotelStatisticBox, {
  IHotelStatisticBox,
} from "@components/fragments/hotel-statistic-box";
import { mediumBreakpoints } from "@config/ui/variables";
import { memo } from "react";

const HotelStatistics = () => {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const statistics: IHotelStatisticBox[] = [
    {
      title: "Check In :",
      Icon: <CalendarIcon fontSize="35px" />,
      description: "Sun, 28 Aug",
    },
    {
      title: "Check Out :",
      Icon: <CalendarIcon fontSize="35px" />,
      description: "Tue, 30 Aug",
    },
    {
      title: "Destination :",
      Icon: <PoinOnMapIcon fontSize="35px" />,
      description: "Paris, France",
    },
    {
      title: "Room & Guest :",
      Icon: <BedIcon fontSize="35px" />,
      description: "1 Room, 2 Guest",
    },
  ];

  return (
    <Box
      bg="white"
      padding={mediumScreen ? "30px 50px" : "20px 30px"}
      borderRadius="20px"
      marginBottom="-90px"
      position="relative"
      zIndex={4}
    >
      <Heading as="h2" fontWeight={500}>
        Hotel & Reservation
      </Heading>

      <Divider bg="#cccccc" height="0.5px" my="20px" />

      <Flex
        rowGap="20px"
        columnGap="50px"
        flexDir={mediumScreen ? "row" : "column"}
      >
        {statistics.map((stats) => (
          <HotelStatisticBox key={stats.title} {...stats} />
        ))}

        <Flex
          bgColor="primary.500"
          padding="20px 30px"
          borderRadius="12px"
          w="100%"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          <SearchIcon fontSize="35px" />
          <Text fontSize="20px" ml="20px">
            Search
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default memo(HotelStatistics);
