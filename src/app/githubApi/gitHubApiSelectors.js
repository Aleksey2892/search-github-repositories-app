export const getRepositoriesList = state => {
  return state.responseResult.responseData.items;
};

export const getRepositoryItem = (state, itemId) => {
  return state.responseResult.responseData.items.find(item => {
    return item.id === itemId;
  });
};

export const getCountNumberOfPages = state => {
  const perPage = state.requestData.perPage;
  const totalCount = Number(state?.responseResult?.responseData?.total_count);

  if (totalCount) {
    const countNumberOfPages = Math.ceil(totalCount / perPage);

    return countNumberOfPages >= 1000
      ? Math.ceil(1000 / perPage)
      : countNumberOfPages;
  }
};

export const getIsLoadingData = state => {
  return state.responseResult.responseLoading;
};

export const getResponseError = state => {
  return state.responseResult.responseError;
};
