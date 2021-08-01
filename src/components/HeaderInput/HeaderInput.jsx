// noinspection JSCheckFunctionSignatures

import React, { useState } from "react";
import { SearchInput } from "./styles";
import { useDispatch } from "react-redux";
import { useDebounce } from "react-use";
import { requestDataActions } from "../../app/requestData/requestDataReducers";

export default function HeaderInput() {
  const [queryValue, setQueryValue] = useState("");
  const dispatch = useDispatch();

  const getRepositories = e => {
    e && e.preventDefault();
    dispatch(requestDataActions.searchValueAction({ searchQuery: queryValue }));
  };

  const handleSearchInput = e => {
    setQueryValue(e.target.value);
  };

  const [, cancel] = useDebounce(
    () => (queryValue.length ? getRepositories() : cancel()),
    1000,
    [queryValue],
  );

  return (
    <header>
      <form onSubmit={getRepositories}>
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
