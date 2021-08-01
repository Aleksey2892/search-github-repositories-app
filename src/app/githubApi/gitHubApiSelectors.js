export const getRepositoriesList = state => {
  return state.responseResult.responseData.items;
};

export const getCountNumberOfPages = state => {
  const perPage = state.requestData.perPage;
  const total_count = state?.responseResult?.responseData?.total_count;

  if (total_count) {
    const countNumberOfPages = Math.ceil(Number(total_count) / perPage);

    return countNumberOfPages > 1000
      ? Math.ceil(1000 / perPage)
      : countNumberOfPages;
  }
};
