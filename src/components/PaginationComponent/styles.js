import { withStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

export const PaginationWithStyles = withStyles({
  ul: {
    justifyContent: "center",
  },
})(Pagination);
