import { useSelector } from "react-redux";
import {
  getIsLoadingData,
  getRepositoriesList,
} from "../../app/githubApi/gitHubApiSelectors";
import RepoItem from "./RepoItem";
import { RepoList } from "./styles";

export default function RepoListContainer() {
  const repositoriesList = useSelector(getRepositoriesList);
  const isLoadingData = useSelector(getIsLoadingData);

  return (
    <>
      {!isLoadingData && (
        <RepoList>
          {repositoriesList?.map(item => (
            <RepoItem key={item.id} itemId={item.id} />
          ))}
        </RepoList>
      )}
    </>
  );
}
