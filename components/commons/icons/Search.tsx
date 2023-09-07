import { Icon, IconProps } from "@chakra-ui/react";

const SearchIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 35 35" {...props}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="16.9154"
          cy="16.9167"
          r="11.0833"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M25.082 25.0833L29.1654 29.1667"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default SearchIcon;
