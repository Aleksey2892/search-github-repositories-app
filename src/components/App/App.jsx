// noinspection JSCheckFunctionSignatures

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGitHubRepositories } from "../../app/githubApi/gitHubApiOperations";
import { getSearchConfig } from "../../app/requestData/requestDataSelectors";
import { MainContainerWithStyles } from "./styles";
import { HeaderInput } from "../HeaderSearchInput";
import ErrorNotification from "../ErrorNotification";
import LoadingIndicator from "../LoadingIndicator";
import RepoListContainer from "../RepoListContainer";
import PaginationComponent from "../PaginationComponent";

function App() {
  const requestData = useSelector(getSearchConfig);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGitHubRepositories(requestData));
  }, [dispatch, requestData]);

  return (
    <MainContainerWithStyles maxWidth={"lg"}>
      <HeaderInput />
      <LoadingIndicator />
      <ErrorNotification />
      <RepoListContainer />
      <PaginationComponent />
    </MainContainerWithStyles>
  );
}
export default App;
