import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchQuery: "react", paginationValue: 1, perPage: 20 };

const requestDataSlice = createSlice({
  name: "requestData",
  initialState,

  reducers: {
    searchValueAction: (state, { payload }) => {
      return {
        ...state,
        searchQuery: payload.searchQuery,
        paginationValue:
          payload.paginationValue || initialState.paginationValue,
      };
    },
  },
});

export const requestDataActions = { ...requestDataSlice.actions };
export default requestDataSlice.reducer;
