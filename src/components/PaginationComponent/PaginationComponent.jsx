import { useDispatch, useSelector } from "react-redux";
import { getCountNumberOfPages } from "../../app/githubApi/gitHubApiSelectors";
import { requestDataActions } from "../../app/requestData/requestDataReducers";
import { getSearchValue } from "../../app/requestData/requestDataSelectors";
import CustomPaginationArrow from "./CustomPaginationArrow";
import CustomPaginationNumber from "./CustomPaginationNumber";
import { PaginationWithStyles } from "./styles";

export default function PaginationComponent() {
  const countNumberOfPages = useSelector(getCountNumberOfPages);
  const { paginationValue } = useSelector(getSearchValue);

  const dispatch = useDispatch();

  const updatePageHandler = (_event, page) => {
    dispatch(requestDataActions.searchValueAction({ paginationValue: page }));
  };

  const setArrowButton = item => {
    return item.type === "next" || item.type === "previous" ? (
      <CustomPaginationArrow {...item} />
    ) : (
      <CustomPaginationNumber {...item} />
    );
  };

  return (
    <PaginationWithStyles
      count={countNumberOfPages}
      onChange={updatePageHandler}
      page={paginationValue}
      renderItem={setArrowButton}
    />
  );
}
