import { Box, BoxProps } from "@chakra-ui/react";

const WaveDecorator = (props: BoxProps) => {
  return (
    <Box
      as="svg"
      viewBox="0 0 1203 336"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.2" filter="url(#filter0_i_1665_2777)">
        <path
          d="M254.188 113.263C187.688 -46.2359 39 -0.832405 -2 38.0009V334L1203 335.5C931 310 963.5 272.502 864.5 244.501C765.5 216.5 726.5 290 665.5 284.5C604.5 279 615.5 208.03 564 202.5C512.5 196.97 513.5 261.5 454.5 254.501C395.5 247.502 410.5 176.5 347.5 166.001C284.5 155.502 320.688 272.762 254.188 113.263Z"
          fill="url(#paint0_linear_1665_2777)"
        />
      </g>
      <g filter="url(#filter1_i_1665_2777)">
        <path
          d="M206 142.001C139.5 -17.4978 39 -0.832237 -2 38.0011V334L1203 335.5C931 310 963.5 272.502 864.5 244.501C765.5 216.5 726.5 290 665.5 284.5C604.5 279 615.5 208.03 564 202.5C512.5 196.97 513.5 261.5 454.5 254.501C395.5 247.502 410.5 176.5 347.5 166.001C284.5 155.502 272.5 301.5 206 142.001Z"
          fill="url(#paint1_linear_1665_2777)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1665_2777"
          x="-2"
          y="0.823975"
          width="1205"
          height="338.676"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="50" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0862745 0 0 0 0 0.505882 0 0 0 0 0.894118 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1665_2777"
          />
        </filter>
        <filter
          id="filter1_i_1665_2777"
          x="-2"
          y="11.7837"
          width="1205"
          height="327.716"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="50" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0862745 0 0 0 0 0.505882 0 0 0 0 0.894118 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1665_2777"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1665_2777"
          x1="-143.105"
          y1="371.699"
          x2="1106.5"
          y2="258"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.14069" stop-color="#E657E5" />
          <stop offset="1" stop-color="#1681E4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1665_2777"
          x1="-143.105"
          y1="371.699"
          x2="1106.5"
          y2="258"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.14069" stop-color="#E657E5" />
          <stop offset="1" stop-color="#1681E4" />
        </linearGradient>
      </defs>
    </Box>
  );
};

export default WaveDecorator;
