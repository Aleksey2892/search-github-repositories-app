import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "react-use";
import { requestDataActions } from "../../app/requestData/requestDataReducers";
import { gitHubApiActions } from "../../app/githubApi/gitHubApiReducers";
import { getIsLoadingData } from "../../app/githubApi/gitHubApiSelectors";
import { getSearchConfig } from "../../app/requestData/requestDataSelectors";
import { SearchInput } from "./styles";

export default function HeaderSearchInput() {
  const [queryValue, setQueryValue] = useState("");
  const { searchQuery } = useSelector(getSearchConfig);
  const isLoading = useSelector(getIsLoadingData);
  const [, cancel] = useDebounce(setSearchValueDebounce, 1000, [queryValue]);
  const dispatch = useDispatch();

  function setSearchValueDebounce() {
    const conditions =
      queryValue.length <= 50 &&
      queryValue.length > 0 &&
      searchQuery !== queryValue;

    if (conditions) {
      setSearchValue();
    } else {
      dispatch(gitHubApiActions.setLoadingFalse({}));
      cancel();
    }
  }

  const setSearchValue = e => {
    e && e.preventDefault();
    dispatch(requestDataActions.searchValueAction({ searchQuery: queryValue }));
  };

  const handleSearchInput = e => {
    setQueryValue(e.target.value.toLowerCase());
    !isLoading && dispatch(gitHubApiActions.setLoadingTrue({}));
  };

  return (
    <header>
      <form onSubmit={setSearchValue}>
        <SearchInput
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={queryValue}
          onChange={handleSearchInput}
        />
      </form>
    </header>
  );
}
