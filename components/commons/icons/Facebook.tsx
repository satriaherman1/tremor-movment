import { Icon, IconProps } from "@chakra-ui/react";

const FacebookIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 23 23" display="block" width="fit-content" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        fill="none"
      >
        <path
          d="M22.439 11.2876C22.439 5.05327 17.4164 0 11.2195 0C5.0226 0 0 5.05327 0 11.2876C0 16.9228 4.10185 21.5923 9.46628 22.439V14.551H6.61802V11.2868H9.46628V8.80058C9.46628 5.97177 11.141 4.40852 13.7043 4.40852C14.9309 4.40852 16.2159 4.62917 16.2159 4.62917V7.40712H14.8C13.4066 7.40712 12.9727 8.27776 12.9727 9.17083V11.2876H16.0843L15.5869 14.5502H12.9727V22.439C18.3372 21.5923 22.439 16.9228 22.439 11.2876Z"
          fill="white"
        />
      </svg>
    </Icon>
  );
};

export default FacebookIcon;
