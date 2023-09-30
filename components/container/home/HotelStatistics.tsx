import { Box, Divider, Flex, Text, useMediaQuery } from "@chakra-ui/react";
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
      Icon: <CalendarIcon fontSize="35px" fill="white" />,
      description: "Sun, 28 Aug",
    },
    {
      title: "Check Out :",
      Icon: <CalendarIcon fontSize="35px" fill="white" />,
      description: "Tue, 30 Aug",
    },
    {
      title: "Destination :",
      Icon: <PoinOnMapIcon fontSize="35px" fill="white" />,
      description: "Paris, France",
    },
    {
      title: "Room & Guest :",
      Icon: <BedIcon fontSize="35px" fill="white" />,
      description: "1 Room, 2 Guest",
    },
  ];

  return (
    <Box
      bg="rgba(51, 51, 51, 0.80);"
      backdropFilter="blur(18px)"
      padding={mediumScreen ? "30px 50px" : "20px 30px"}
      border=" 2px solid rgba(255, 255, 255, 0.27);"
      borderRadius="20px"
      position="relative"
      zIndex={4}
    >
      <Divider bg="#cccccc" height="0.5px" my="20px" />

      <Flex
        rowGap="20px"
        columnGap="50px"
        flexDir={mediumScreen ? "row" : "column"}
      >
        {statistics.map((stats) => (
          <HotelStatisticBox key={stats.title} {...stats} />
        ))}

        <Box>
          <Flex
            bg="linear-gradient(259deg, #903AFD -15.71%, #E657E5 140.15%);
"
            padding="16px 30px"
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
          <Text color="white" fontSize="14px" mt="5px">
            Powered by Booking.com
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default memo(HotelStatistics);
