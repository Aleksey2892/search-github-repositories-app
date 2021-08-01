import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const ButtonNumber = withStyles({
  root: {
    minWidth: 40,
    fontSize: 18,
    fontWeight: 600,
    borderRadius: 0,
    borderBottom: "3px solid transparent",

    "&[aria-current]": {
      borderBottom: "3px solid green",
    },
  },
})(Button);
