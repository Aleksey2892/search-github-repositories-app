import { ButtonNumber } from "./styles";

const CustomPaginationNumber = props => (
  <>
    {props.page && (
      <ButtonNumber {...props} color={"default"}>
        {props.page}
      </ButtonNumber>
    )}

    {!props.page && <div>...</div>}
  </>
);

export default CustomPaginationNumber;
