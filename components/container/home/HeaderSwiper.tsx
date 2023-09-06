import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Image } from "@chakra-ui/react";
import { memo, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const HeaderSwiper = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Swiper
      spaceBetween={50} // Jarak antara gambar
      slidesPerView={2} // Jumlah gambar yang ditampilkan secara bersamaan
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
    </Swiper>
  );
};

export default memo(HeaderSwiper);
