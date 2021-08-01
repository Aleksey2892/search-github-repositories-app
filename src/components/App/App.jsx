// noinspection JSCheckFunctionSignatures

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { getGithubData } from "../../app/githubApi/gitHubApiOperations";
import { getSearchValue } from "../../app/requestData/requestDataSelectors";
import { HeaderInput } from "../HeaderInput";
import { RepoListContainer } from "../RepoListContainer";
import PaginationComponent from "../PaginationComponent";
import { MainContainerWithStyles } from "./styles";
import "./App.css";

function App() {
  const requestData = useSelector(getSearchValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGithubData(requestData));
  }, [dispatch, requestData]);

  return (
    <>
      <CssBaseline />

      <MainContainerWithStyles maxWidth={"lg"}>
        <HeaderInput />

        <RepoListContainer />

        <PaginationComponent />
      </MainContainerWithStyles>
    </>
  );
}
export default App;
