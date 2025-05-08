export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clr_subtitle: "#376597",
        clr_base: "#376597   ",
        clr_cusborder: "#262525",
        clr_lightprimary: "#a38cfc",
        clr_secondary: "#863ae5",
        clr_card: "#0f0e1e",
      },
      height: {
        242: "242px",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        slider: "slider 25s linear infinite",
        slider2: "slider2 25s linear infinite",
      },

      backgroundImage: {
        "top-gradiant":
        "linear-gradient(to right, rgb(53 52 120) 0%, rgb(2 2 10) 12.5%, rgb(2 2 10) 87.5%, rgb(53 52 120) 100%)",
        "main-gradiant":
          " linear-gradient(90deg, #b983ff, #e1ccec)",
        "main-card":
          "linear-gradient(90deg,rgba(165, 119, 255, 1) 0%, rgba(112, 40, 255, 1) 50%)",
          "road-card":
          "linear-gradient(334deg, #6780d2 0%, #2f3b8d 100%)",
        "multi-gradiant":
          "linear-gradient(90.23deg, #AE99FF -2.32%, #542ee800 15.08%, rgba(84, 46, 232, 0) 38%, rgba(84, 46, 232, 0) 60.53%, #542ee800 86.38%, #AE99FF 101.73%), linear-gradient(0deg, #404085, #404085)",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slider: {
          "100%": { transform: "translateX(-100%)" },
        },
        slider2: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  animation: {
    'pulse-slow': 'pulse 10s ease-in-out infinite',
  },
  plugins: [],
};