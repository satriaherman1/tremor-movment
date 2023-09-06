import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { mediumBreakpoints } from "@config/ui/variables";
import { memo, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const HeaderSwiper = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  return (
    <>
      <Swiper
        spaceBetween={50} // Jarak antara gambar
        slidesPerView={mediumScreen ? 2 : 1} // Jumlah gambar yang ditampilkan secara bersamaan
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        <SwiperSlide>
          <Image
            src="/img/home/header-slider-1.jpg"
            alt="slider"
            width="400px"
            height="400px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/home/header-slider-2.jpg"
            alt="slider"
            width="400px"
            height="400px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/home/header-slider-1.jpg"
            alt="slider"
            width="400px"
            height="400px"
          />
        </SwiperSlide>

        {/* Tambahkan SwiperSlide lain sesuai kebutuhan Anda */}
      </Swiper>

      <Flex mt="40px" gap="20px" justifyContent="end">
        <Button
          ref={navigationPrevRef}
          size="sm"
          w="fit-content"
          h="fit-content"
          padding="8px"
          borderRadius="100px"
          alignItems="center"
          display="flex"
        >
          <ArrowBackIcon />
        </Button>
        <Button
          ref={navigationNextRef}
          size="sm"
          w="fit-content"
          h="fit-content"
          padding="8px"
          borderRadius="100px"
          alignItems="center"
          display="flex"
        >
          <ArrowForwardIcon />
        </Button>
      </Flex>
    </>
  );
};

export default memo(HeaderSwiper);
