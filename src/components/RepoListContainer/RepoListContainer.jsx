import { useSelector } from "react-redux";
import { getRepositoriesList } from "../../app/githubApi/gitHubApiSelectors";
import { StyledRepoList } from "./styles";
import RepoItem from "./RepoItem";

export default function RepoListContainer() {
  const repositoriesList = useSelector(getRepositoriesList);

  return (
    <StyledRepoList>
      {repositoriesList?.map(item => (
        <RepoItem key={item.id} item={item} />
      ))}
    </StyledRepoList>
  );
}
