import { useSelector } from "react-redux";
import { Link } from "@material-ui/core";
import { getRepositoryItem } from "../../../app/githubApi/gitHubApiSelectors";
import { PaperWithStyles, RepoInfoWrapper, StyledParagraph } from "./styles";
import { StarIcon, WatcherIcon } from "../../../assets/icons";

export default function RepoItem({ itemId }) {
  const {
    html_url,
    name,
    owner: { avatar_url, login },
    language,
    description,
    stargazers_count,
    watchers,
  } = useSelector(state => getRepositoryItem(state, itemId));

  return (
    <li>
      <Link href={html_url} target="_blank" rel="noreferrer" underline={"none"}>
        <PaperWithStyles elevation={0}>
          <RepoInfoWrapper>
            <h2 className={"info-name-mobile"}>{name}</h2>
            <img
              src={avatar_url}
              alt={`avatar-${login}`}
              width={128}
              height={"100%"}
            />

            <div className={"repo-info-block"}>
              <h2 className={"info-name"}>{name}</h2>
              <p className={"info-login"}>{login}</p>
              <p className={"info-language"}>{language}</p>
              <p className={"info-description"}>{description}</p>
            </div>
          </RepoInfoWrapper>

          <div>
            <StyledParagraph>
              <StarIcon width={24} height={"100%"} />

              <span className={"stars-count"}>
                {stargazers_count}
                <span>star{stargazers_count > 1 && "s"}</span>
              </span>
            </StyledParagraph>

            <StyledParagraph>
              <WatcherIcon width={24} height={"100%"} />

              <span className={"watchers-count"}>
                {watchers} watcher{watchers > 1 && "s"}
              </span>
            </StyledParagraph>
          </div>
        </PaperWithStyles>
      </Link>
    </li>
  );
}
