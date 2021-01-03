// these are our custom styles that are accessible on top of the default styles that tailwind uses under the hood
module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      // NOTE: How to add our custom fonts with tailwind
      fontFamily: {
        mainFont: ["Nunito"],
      },
    },
  },
  variants: {},
  plugins: [],
};
