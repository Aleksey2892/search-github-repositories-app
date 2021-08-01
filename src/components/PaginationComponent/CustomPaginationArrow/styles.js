import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const ButtonArrow = withStyles({
  root: {
    fontSize: 18,
    fontWeight: 600,
    textTransform: "capitalize",
  },
})(Button);
