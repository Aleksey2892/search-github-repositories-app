import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import theme from "../../../theme/materialTheme";

export const ButtonNumber = withStyles({
  root: {
    minWidth: 40,
    fontSize: 20,
    fontWeight: 600,
    borderRadius: 0,
    borderBottom: "3px solid transparent",

    "&[aria-current]": {
      borderBottom: "3px solid #65B79A",
    },

    [theme.breakpoints.up("tablet")]: {
      minWidth: 40,
      fontSize: 18,
    },

    [theme.breakpoints.up("laptop")]: {
      minWidth: 60,
    },
  },
})(Button);
