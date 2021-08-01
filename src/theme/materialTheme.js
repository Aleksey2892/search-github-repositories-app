import { createTheme } from "@material-ui/core";

const theme = createTheme({
  breakpoints: {
    values: {
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

export default theme;
