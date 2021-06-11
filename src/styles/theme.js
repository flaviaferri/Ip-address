const breakpoints = [576, 768, 992, 1200];

export const theme = {
  colors: {
    veryDarkGray: "hsl(0, 0%, 17%)",
    darkGray: "hsl(0, 0%, 59%)",
    white: "#fff",
  },

  breakpoints: breakpoints.map((bp) => `@media (max-width: ${bp}px)`),
};
