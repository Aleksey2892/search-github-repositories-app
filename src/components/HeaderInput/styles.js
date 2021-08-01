import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const SearchInput = withStyles({
  root: {
    width: "100%",
    boxShadow:
      "0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 24px rgba(51, 51, 51, 0.24)",

    "& .MuiInputBase-input": {
      padding: "16px",
    },
  },
})(TextField);
