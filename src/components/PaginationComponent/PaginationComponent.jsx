import { useDispatch, useSelector } from "react-redux";
import { withWidth } from "@material-ui/core";
import {
  getCountNumberOfPages,
  getIsLoadingData,
} from "../../app/githubApi/gitHubApiSelectors";
import { getSearchConfig } from "../../app/requestData/requestDataSelectors";
import { requestDataActions } from "../../app/requestData/requestDataReducers";
import CustomPaginationArrow from "./CustomPaginationArrow";
import CustomPaginationNumber from "./CustomPaginationNumber";
import { PaginationWithStyles } from "./styles";

const PaginationComponent = ({ width }) => {
  const countNumberOfPages = useSelector(getCountNumberOfPages);
  const { paginationValue } = useSelector(getSearchConfig);
  const isLoadingData = useSelector(getIsLoadingData);
  const dispatch = useDispatch();

  const handleUpdatePageNumber = (_event, page) => {
    dispatch(requestDataActions.searchValueAction({ paginationValue: page }));
  };

  const setArrowButton = item =>
    item.type === "next" || item.type === "previous" ? (
      <CustomPaginationArrow {...item} />
    ) : (
      <CustomPaginationNumber {...item} />
    );

  const isShowPagination = countNumberOfPages > 1 && !isLoadingData;

  return (
    <>
      {isShowPagination && (
        <PaginationWithStyles
          count={countNumberOfPages}
          page={paginationValue}
          renderItem={setArrowButton}
          onChange={handleUpdatePageNumber}
          siblingCount={width === "xs" ? 0 : 3}
        />
      )}
    </>
  );
};

export default withWidth()(PaginationComponent);
