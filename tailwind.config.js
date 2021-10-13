module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "text-primary": "#B250FF",
      },
      backgroundImage: {
        bc: "url('https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg')",
      },
      gradientColorStops: {
        primary: "#7f18bb",
        secondary: "#35249b",
        borderPrimary: "#ff9dff",
        borderSecondary: "#00fbf5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
