import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchQuery: "react", paginationValue: 1, perPage: 3 };

export const requestSlice = createSlice({
  name: "requestData",
  initialState,

  reducers: {
    searchValueAction: (state, { payload }) => {
      return {
        ...state,
        searchQuery: payload.searchQuery || initialState.searchQuery,
        paginationValue:
          payload.paginationValue || initialState.paginationValue,
      };
    },
  },
});

export const requestDataActions = { ...requestSlice.actions };

export default requestSlice.reducer;
