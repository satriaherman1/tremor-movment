import { Icon, IconProps } from "@chakra-ui/react";

const ArrowRightUp = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 12 12" display="block" width="fit-content" {...props}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L0.292893 10.2929ZM12 1C12 0.447715 11.5523 0 11 0H2C1.44772 0 1 0.447715 1 1C1 1.55228 1.44772 2 2 2H10V10C10 10.5523 10.4477 11 11 11C11.5523 11 12 10.5523 12 10V1ZM1.70711 11.7071L11.7071 1.70711L10.2929 0.292893L0.292893 10.2929L1.70711 11.7071Z"
          fill="#903AFD"
        />
      </svg>
    </Icon>
  );
};

export default ArrowRightUp;
