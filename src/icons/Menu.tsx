import { IIcon } from "../interface";

const Menu = ({ width, height, fill, ...props }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <path
          stroke={fill || "currentColor"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 17h8m-8-5h14m-8-5h8"
        ></path>
      </g>
    </svg>
  );
};

export default Menu;
