import { withWidth } from "@material-ui/core";
import { ButtonArrow } from "./styles";

const CustomPaginationArrow = props => (
  <ButtonArrow {...props} color={"default"}>
    {props.width === "xs"
      ? props.type === "previous"
        ? "<"
        : ">"
      : props.type}
  </ButtonArrow>
);

export default withWidth()(CustomPaginationArrow);
