import { ButtonArrow } from "./styles";

const CustomPaginationArrow = props => (
  <ButtonArrow {...props} color={"default"}>
    {props.type}
  </ButtonArrow>
);

export default CustomPaginationArrow;
