import { IconProps } from "@/src/types/type-icon";
import React from "react";
function SpinnerIcon({ className = "", fill = "#88BA52" }: IconProps) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0846 17.4906C12.6602 17.4906 13.2122 17.7193 13.6192 18.1262C14.0262 18.5332 14.2548 19.0852 14.2548 19.6608C14.2548 20.2364 14.0262 20.7884 13.6192 21.1954C13.2122 21.6024 12.6602 21.831 12.0846 21.831C11.509 21.831 10.957 21.6024 10.55 21.1954C10.143 20.7884 9.91439 20.2364 9.91439 19.6608C9.91439 19.0852 10.143 18.5332 10.55 18.1262C10.957 17.7193 11.509 17.4906 12.0846 17.4906ZM5.29293 14.2353C6.0124 14.2353 6.7024 14.5211 7.21114 15.0298C7.71988 15.5386 8.00569 16.2286 8.00569 16.9481C8.00569 17.6675 7.71988 18.3575 7.21114 18.8663C6.7024 19.375 6.0124 19.6608 5.29293 19.6608C4.57346 19.6608 3.88345 19.375 3.37471 18.8663C2.86597 18.3575 2.58016 17.6675 2.58016 16.9481C2.58016 16.2286 2.86597 15.5386 3.37471 15.0298C3.88345 14.5211 4.57346 14.2353 5.29293 14.2353ZM17.8563 14.7778C18.4319 14.7778 18.9839 15.0065 19.3909 15.4135C19.7979 15.8205 20.0265 16.3725 20.0265 16.9481C20.0265 17.5236 19.7979 18.0756 19.3909 18.4826C18.9839 18.8896 18.4319 19.1183 17.8563 19.1183C17.2807 19.1183 16.7287 18.8896 16.3217 18.4826C15.9147 18.0756 15.6861 17.5236 15.6861 16.9481C15.6861 16.3725 15.9147 15.8205 16.3217 15.4135C16.7287 15.0065 17.2807 14.7778 17.8563 14.7778ZM20.2229 10.241C20.6546 10.241 21.0686 10.4125 21.3738 10.7177C21.6791 11.023 21.8506 11.437 21.8506 11.8687C21.8506 12.3004 21.6791 12.7144 21.3738 13.0196C21.0686 13.3248 20.6546 13.4963 20.2229 13.4963C19.7912 13.4963 19.3772 13.3248 19.072 13.0196C18.7667 12.7144 18.5952 12.3004 18.5952 11.8687C18.5952 11.437 18.7667 11.023 19.072 10.7177C19.3772 10.4125 19.7912 10.241 20.2229 10.241ZM2.8612 6.63954C3.58067 6.63954 4.27068 6.92535 4.77942 7.4341C5.28816 7.94284 5.57397 8.63284 5.57397 9.35231C5.57397 10.0718 5.28816 10.7618 4.77942 11.2705C4.27068 11.7793 3.58067 12.0651 2.8612 12.0651C2.14173 12.0651 1.45173 11.7793 0.942988 11.2705C0.434246 10.7618 0.148438 10.0718 0.148438 9.35231C0.148438 8.63284 0.434246 7.94284 0.942988 7.4341C1.45173 6.92535 2.14173 6.63954 2.8612 6.63954ZM19.4481 5.77906C19.7359 5.77906 20.0119 5.89338 20.2154 6.09688C20.4189 6.30037 20.5332 6.57637 20.5332 6.86416C20.5332 7.15195 20.4189 7.42795 20.2154 7.63145C20.0119 7.83494 19.7359 7.94927 19.4481 7.94927C19.1604 7.94927 18.8843 7.83494 18.6809 7.63145C18.4774 7.42795 18.363 7.15195 18.363 6.86416C18.363 6.57637 18.4774 6.30037 18.6809 6.09688C18.8843 5.89338 19.1604 5.77906 19.4481 5.77906ZM8.82929 0.128906C9.69265 0.128906 10.5207 0.471876 11.1311 1.08237C11.7416 1.69286 12.0846 2.52086 12.0846 3.38423C12.0846 4.24759 11.7416 5.07559 11.1311 5.68608C10.5207 6.29657 9.69265 6.63954 8.82929 6.63954C7.96592 6.63954 7.13792 6.29657 6.52743 5.68608C5.91694 5.07559 5.57397 4.24759 5.57397 3.38423C5.57397 2.52086 5.91694 1.69286 6.52743 1.08237C7.13792 0.471876 7.96592 0.128906 8.82929 0.128906ZM16.9676 3.38423C17.1115 3.38423 17.2495 3.44139 17.3512 3.54314C17.453 3.64488 17.5101 3.78288 17.5101 3.92678C17.5101 4.07067 17.453 4.20867 17.3512 4.31042C17.2495 4.41217 17.1115 4.46933 16.9676 4.46933C16.8237 4.46933 16.6857 4.41217 16.5839 4.31042C16.4822 4.20867 16.425 4.07067 16.425 3.92678C16.425 3.78288 16.4822 3.64488 16.5839 3.54314C16.6857 3.44139 16.8237 3.38423 16.9676 3.38423Z"
        fill={fill}
      />
    </svg>
  );
}

export default SpinnerIcon;
