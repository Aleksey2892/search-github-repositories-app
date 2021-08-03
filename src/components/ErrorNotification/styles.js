import { withStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";

export const MuiAlertWithStyles = withStyles({
  root: {
    "& span": {
      color: "#402121",
      fontWeight: 600,
    },
  },
})(MuiAlert);
