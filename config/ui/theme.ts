// theme.ts
import { extendTheme } from "@chakra-ui/react";
import {
  blackColor,
  blackColorClick,
  blackColorHover,
  primaryColor,
  primaryColorClick,
  primaryColorHover,
} from "@config/ui/color";

const theme = extendTheme({
  colors: {
    primary: {
      500: primaryColor,
      600: primaryColorHover,
      700: primaryColorClick,
      // Tambahkan warna lain sesuai kebutuhan Anda
    },

    black: {
      500: blackColor,
      600: blackColorHover,
      700: blackColorClick,
    },

    // Tambahkan palet warna lainnya sesuai kebutuhan Anda
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "10px", // Ubah nilai sesuai kebutuhan
        display: "block",
      },
      sizes: {
        sm: {
          height: "fit-content",

          padding: "10px 27px",
        },

        md: {
          height: "fit-content",

          padding: "20px 50px",
        },
      },
    },
  },

  initialColorMode: "dark",
});

export default theme;
