/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A84FF",
        secondary: "#5F6E85",
      },
      spacing: {
        1200: "1200px",
      },
      backgroundImage: {
        cardFooter:
          "linear-gradient(180deg, rgba(10, 14, 20, 0.00) 3.49%, #0A0E14 52.91%)",
        cardBorder:
          "linear-gradient(129deg, #0A63FD -24.13%, #01CFFC 1.43%, #0087FF 30.16%, #0069FF 58.59%, #01CFFC 88.34%, #0A84FF 111.41%, #0467F3 128.93%)",
        // "linear-gradient(82deg, rgba(10,99,253,1) 0%, rgba(1,207,252,1) 17%, rgba(0,135,255,1) 35%, rgba(0,105,255,1) 54%, rgba(1,207,252,1) 73%, rgba(10,132,255,1) 89%, rgba(4,103,243,1) 100%)",
        millionText:
          "linear-gradient(130deg, #EFF2FF 33.94%, #C5D1FF 48.58%, #EFF2FF 64.53%, #EFF2FF 79.95%, #C5D1FF 92.83%)",
        toostieCardFooter:
          "linear-gradient(180deg, rgba(222, 228, 254, 0.00) 16.61%, #DEE4FE 80.43%)",
      },
      fontSize: {
        70: [
          "4.375rem",
          {
            lineHeight: "100%",
            // fontWeight: "800",
          },
        ],
      },
    },
    // fontSize: {
    //   70: [
    //     "4.375rem",
    //     {
    //       lineHeight: "100%",
    //       fontWeight: "800",
    //     },
    //   ],
    // },
  },
  plugins: [],
};
