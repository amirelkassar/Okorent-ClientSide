import { IconProps } from "@/src/types/type-icon";
import React from "react";

function SportIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 10.074C0.0385109 9.79071 0.0715203 9.50738 0.115533 9.22405C0.764717 5.27668 2.89657 2.41312 6.57711 0.880939C10.2109 -0.634741 13.7236 -0.175361 16.9503 2.11054C18.7768 3.4034 20.0257 5.15015 20.7409 7.26825C20.8372 7.55708 20.9664 7.67261 21.2745 7.68362C23.2331 7.75514 25.0046 8.39057 26.5643 9.5679C28.7154 11.1909 29.989 13.3447 30.3631 16.0212C30.6987 18.4227 30.1843 20.637 28.8419 22.6424C27.3097 24.931 25.1559 26.3009 22.4464 26.8015C22.2593 26.8345 22.064 26.9143 21.9127 27.0271C20.0614 28.441 18.0066 29.3928 15.7042 29.7916C14.4581 30.0062 13.1982 30.0172 11.9384 29.9952C10.1999 29.9677 8.51366 29.6541 6.8962 28.9994C5.77939 28.5455 4.74234 27.9514 3.77407 27.2362C3.25417 26.8538 2.73428 26.4742 2.22813 26.0753C1.43591 25.4481 1.35338 24.4276 2.07134 23.7427C3.12489 22.7359 4.17293 21.7208 5.42179 20.9451C5.68861 20.7801 5.96094 20.6178 6.26077 20.439C6.19476 20.395 6.15349 20.3592 6.10673 20.3372C2.97084 18.7748 1.00403 16.2963 0.242069 12.8743C0.126536 12.3654 0.0797726 11.84 0 11.3229C0 10.9075 0 10.4894 0 10.074ZM12.7031 28.9444C13.1597 28.9444 13.6164 28.9609 14.0702 28.9416C15.9738 28.8591 17.7783 28.3777 19.4205 27.4205C20.4768 26.8043 21.4506 26.0423 22.4546 25.3354C22.8947 25.0245 22.9002 24.7109 22.4986 24.3396C22.1273 23.9957 21.7504 23.6601 21.3791 23.3163C19.1729 21.2697 16.5845 20.0924 13.5723 19.8751C11.0801 19.6963 8.75573 20.2547 6.57161 21.4458C5.17147 22.2105 4.02714 23.2943 2.87181 24.3671C2.50046 24.7109 2.51971 25.0163 2.92683 25.3244C3.41647 25.6957 3.90611 26.0671 4.40125 26.4302C5.28975 27.0849 6.24152 27.6295 7.26756 28.0449C9.01155 28.7546 10.8326 29.0159 12.7059 28.9389L12.7031 28.9444ZM4.28021 3.48593C6.44233 5.64804 8.57693 7.78264 10.6868 9.89249C11.1847 9.3946 11.7073 8.8692 12.2492 8.3273C10.431 6.30273 9.55346 3.87654 9.47919 1.13401C7.45736 1.40909 5.72987 2.19306 4.27746 3.48318L4.28021 3.48593ZM1.10856 9.51289C3.8676 9.5844 6.29103 10.4702 8.29635 12.2664C8.85201 11.7108 9.37466 11.1881 9.85054 10.7095C7.73244 8.59412 5.59784 6.45677 3.45223 4.31116C2.16211 5.77182 1.37264 7.49381 1.10856 9.51289ZM3.47699 17.0748C4.83862 15.7131 6.20301 14.3515 7.56464 12.9926C5.66661 11.2294 2.96534 10.4702 1.0563 10.5747C0.943517 12.8166 1.93105 15.4821 3.47974 17.0775L3.47699 17.0748ZM12.9699 7.59284C14.3371 6.22845 15.6932 4.87232 17.0686 3.49968C15.1926 1.87672 13.0139 1.04323 10.497 1.07624C10.5795 3.70324 11.4735 6.0304 12.9699 7.59284ZM13.9657 12.0794C14.6534 12.1866 14.7689 12.7203 14.956 13.1962C15.1513 13.6941 15.3438 14.192 15.5557 14.6844C15.5997 14.7889 15.7042 14.8962 15.8087 14.9402C16.3836 15.185 16.9613 15.4161 17.5445 15.6361C17.6352 15.6719 17.7838 15.6581 17.8663 15.6031C18.631 15.108 19.3902 14.6018 20.1412 14.0847C20.2265 14.0242 20.298 13.8839 20.3035 13.7766C20.32 13.2622 20.3035 12.7451 20.3145 12.2307C20.32 12.0381 20.2567 11.9253 20.0999 11.818C19.2995 11.2679 18.51 10.7012 17.7095 10.1538C17.4619 9.98327 17.2556 9.80447 17.2529 9.45237C15.9518 10.052 14.89 10.902 13.9657 12.0821V12.0794ZM8.35962 13.7711C6.97873 15.1547 5.61984 16.5136 4.25821 17.878C4.26371 17.8835 4.27471 17.911 4.29672 17.9303C5.22373 18.7417 6.26628 19.3607 7.4271 19.7705C7.52613 19.8063 7.65817 19.787 7.7627 19.754C8.42564 19.5587 9.08583 19.3442 9.75151 19.1544C10.0624 19.0663 10.3842 19.0251 10.717 18.9591C10.4502 16.973 9.66349 15.2565 8.35962 13.7711ZM29.4196 17.6634C29.0418 17.7826 28.6842 17.7304 28.3468 17.5066C27.5793 16.995 26.8118 16.4889 26.0499 15.9717C25.9123 15.8782 25.8023 15.8617 25.6483 15.9387C25.2769 16.1258 24.8891 16.2798 24.5205 16.4696C24.4132 16.5246 24.3059 16.6457 24.2729 16.7584C23.9978 17.6689 23.7365 18.5822 23.4889 19.4982C23.4614 19.5945 23.5082 19.7513 23.5769 19.8283C23.8355 20.1144 24.1051 20.395 24.3967 20.648C24.5177 20.7526 24.6993 20.8378 24.8533 20.8406C25.7858 20.8571 26.7156 20.8571 27.6481 20.8461C27.9974 20.8433 28.3083 20.8709 28.4623 21.2917C29.0565 20.1199 29.3811 18.9343 29.4196 17.6634ZM26.9081 11.1881C26.1407 10.4481 25.3319 9.86773 24.3637 9.45237C24.3939 9.78521 24.2261 9.95026 24.0116 10.0988C23.1808 10.6737 22.3556 11.2596 21.5249 11.8318C21.3763 11.9336 21.3185 12.0436 21.3213 12.2224C21.3323 12.7285 21.313 13.2347 21.335 13.7381C21.3405 13.8619 21.4203 14.0242 21.5194 14.0929C22.2263 14.5853 22.9443 15.064 23.6705 15.5288C23.7612 15.5866 23.9345 15.5949 24.0391 15.5508C24.4517 15.383 24.8588 15.1987 25.2522 14.9924C25.3732 14.9292 25.4942 14.7889 25.5327 14.6568C25.8243 13.6913 26.0994 12.7175 26.3717 11.7465C26.4487 11.4714 26.5698 11.2486 26.9081 11.1826V11.1881ZM20.8096 19.3277C21.2745 19.3277 21.7422 19.3194 22.207 19.3304C22.3941 19.3359 22.4904 19.2864 22.5426 19.0938C22.7572 18.3099 22.98 17.5314 23.2111 16.7529C23.2661 16.5714 23.2413 16.4669 23.0763 16.3596C22.3803 15.9057 21.6954 15.4326 20.9939 14.9814C20.9114 14.9292 20.7409 14.9209 20.6611 14.9732C19.9432 15.4326 19.2417 15.9139 18.5293 16.3816C18.3972 16.4669 18.3752 16.5521 18.4192 16.7007C18.6558 17.5066 18.8841 18.3181 19.1097 19.1269C19.1509 19.2754 19.2252 19.3332 19.382 19.3277C19.8579 19.3194 20.3338 19.3249 20.8096 19.3249V19.3277ZM13.7346 8.41257C14.1555 8.71516 14.5764 9.00949 14.9862 9.32033C15.1458 9.44136 15.2586 9.43861 15.4264 9.32308C16.5597 8.54186 17.8058 8.03572 19.1619 7.79915C19.3792 7.76064 19.5966 7.72488 19.8221 7.68637C19.3792 6.38525 18.7301 5.25468 17.8553 4.28915C16.4882 5.65904 15.1293 7.01793 13.7346 8.41532V8.41257ZM18.3229 20.0429C17.9956 18.904 17.6958 17.8395 17.3794 16.7804C17.3547 16.6979 17.2446 16.6209 17.1539 16.5824C16.634 16.3651 16.1031 16.1725 15.5859 15.9497C15.4044 15.8727 15.3053 15.9112 15.1761 16.0405C14.5434 16.6842 13.8942 17.3086 13.2698 17.9578C12.9782 18.2631 12.6838 18.4337 12.241 18.1393C12.2767 18.3979 12.3042 18.5987 12.3345 18.827C14.4031 18.7885 16.3754 19.1791 18.3202 20.0456L18.3229 20.0429ZM23.6705 25.4399C25.3649 24.8237 26.7101 23.8362 27.7416 22.4305C27.7966 22.3535 27.7609 22.172 27.7086 22.0702C27.6618 21.9794 27.5326 21.8749 27.4363 21.8721C26.5835 21.8556 25.7308 21.8584 24.8781 21.8721C24.7873 21.8721 24.658 21.9574 24.614 22.0399C24.2894 22.6616 23.9758 23.2943 23.6677 23.927C23.6319 23.9985 23.6072 24.1113 23.6402 24.1745C23.83 24.5706 23.8465 24.9723 23.6705 25.4426V25.4399ZM26.4873 15.0502C27.2685 15.5701 28.0249 16.0597 28.7649 16.5769C28.9657 16.7172 29.1308 16.6924 29.2655 16.5576C29.3453 16.4779 29.3701 16.3101 29.3673 16.1835C29.3618 15.9882 29.3151 15.7902 29.2765 15.5976C29.04 14.4258 28.5723 13.3557 27.8984 12.3682C27.7636 12.1729 27.5931 12.2169 27.4253 12.2279C27.3648 12.2307 27.2767 12.3187 27.2575 12.3819C26.9962 13.2622 26.7458 14.1479 26.4873 15.0502ZM10.7143 11.4632C10.1669 12.0051 9.63873 12.5305 9.09133 13.0724C9.98258 14.0627 10.6675 15.2153 11.1847 16.4779C11.2562 16.1753 11.2617 15.8727 11.3442 15.5949C11.5863 14.7806 11.8641 13.9802 12.1172 13.1687C12.1474 13.0751 12.1584 12.9211 12.1034 12.8633C11.6413 12.3764 11.1599 11.9061 10.717 11.4604L10.7143 11.4632ZM20.8207 11.0918C21.6431 10.5169 22.4464 9.95576 23.2386 9.4001C23.2303 9.09202 23.0818 8.95998 22.7957 8.89671C21.4671 8.59688 20.1467 8.59688 18.8181 8.90496C18.5348 8.97098 18.411 9.10577 18.4 9.39735C19.1949 9.95301 19.9954 10.5169 20.8179 11.0918H20.8207ZM23.764 21.4485C23.4339 21.1267 23.1313 20.8103 22.8067 20.5215C22.7022 20.428 22.5371 20.3537 22.3968 20.3537C21.3763 20.34 20.3558 20.3455 19.3352 20.3482C19.2527 20.3482 19.1702 20.3592 19.0877 20.3675C20.4906 21.1459 21.6734 22.183 22.8397 23.2943C23.1533 22.6671 23.4504 22.0757 23.764 21.4513V21.4485ZM13.4018 12.9156C12.6756 14.1287 12.2932 15.4326 12.2162 16.8272C12.2107 16.918 12.3455 17.05 12.4473 17.0995C12.5188 17.1353 12.6728 17.094 12.7361 17.0335C13.3248 16.4614 13.8969 15.8727 14.4856 15.2978C14.6039 15.1822 14.6204 15.0887 14.5599 14.9374C14.3453 14.4285 14.128 13.9169 13.9437 13.397C13.8502 13.1329 13.6961 12.9844 13.4018 12.9128V12.9156ZM12.7169 11.9748C13.2395 11.3724 13.7732 10.7535 14.3151 10.1263C13.8887 9.79622 13.4458 9.45237 13.0194 9.12227C12.4913 9.65868 11.9659 10.1923 11.4542 10.7122C11.8641 11.1221 12.296 11.554 12.7169 11.9748Z"
        fill="#0F2A43"
      />
      <path
        d="M7.60338 24.9349C6.7974 24.8469 6.61035 24.7451 6.61035 24.4095C6.61035 24.0546 6.82766 23.9336 7.61989 23.8786C7.61989 23.7301 7.61164 23.576 7.61989 23.422C7.63914 23.0974 7.85645 22.8746 8.13978 22.8856C8.41486 22.8966 8.61292 23.1084 8.62942 23.422C8.63768 23.5678 8.62942 23.7135 8.62942 23.8758H9.64721C9.64721 23.7328 9.64171 23.5898 9.64721 23.4467C9.66647 23.1001 9.88378 22.8718 10.1754 22.8883C10.4614 22.9021 10.6457 23.1194 10.6595 23.4577C10.665 23.5843 10.6595 23.7135 10.6595 23.8676H11.6553C11.713 23.4742 11.5618 22.8828 12.2164 22.9048C12.8051 22.9268 12.6593 23.4715 12.7061 23.8703H13.6909C13.7404 23.4742 13.6028 22.9131 14.2053 22.9021C14.8434 22.8883 14.6949 23.466 14.7417 23.8758H15.7264C15.7347 23.7053 15.7374 23.5402 15.7539 23.3752C15.7842 23.0781 15.9878 22.8828 16.2518 22.8828C16.5022 22.8828 16.7057 23.0644 16.7442 23.3449C16.7662 23.51 16.7662 23.6778 16.7772 23.8923C16.9368 23.8923 17.0908 23.8813 17.2449 23.8923C17.5777 23.9226 17.7813 24.1372 17.7648 24.4232C17.7483 24.7038 17.5475 24.8826 17.2229 24.8991C17.0853 24.9074 16.9478 24.8991 16.78 24.8991C16.7717 25.0779 16.7717 25.232 16.758 25.386C16.725 25.7244 16.5269 25.9197 16.2298 25.9087C15.9465 25.8977 15.7704 25.7051 15.7484 25.375C15.7402 25.2292 15.7484 25.0834 15.7484 24.9211H14.7444C14.7362 25.0972 14.7334 25.2622 14.7169 25.4245C14.6866 25.7161 14.5106 25.8949 14.2493 25.9087C13.9714 25.9224 13.7679 25.7546 13.7266 25.4548C13.7019 25.2897 13.7046 25.1219 13.6936 24.9294H12.7143C12.6401 25.3173 12.8326 25.9059 12.1779 25.8949C11.5563 25.8839 11.7158 25.3255 11.6553 24.9239H10.6788C10.6155 25.3283 10.7943 25.9087 10.1396 25.8949C9.51793 25.8812 9.68297 25.3228 9.62521 24.9211H8.64593C8.58541 25.3255 8.76421 25.9059 8.10953 25.8949C7.4851 25.8839 7.6529 25.3255 7.59788 24.9266L7.60338 24.9349Z"
        fill="#0F2A43"
      />
    </svg>
  );
}

export default SportIcon;
