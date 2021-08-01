import {
  PaperWithStyles,
  StyledParagraph,
  StyledRepoInfoWrapper,
} from "./styles";
import { StarIcon, WatcherIcon } from "../../../assets/icons";

export default function RepoItem({ item }) {
  return (
    <li>
      <PaperWithStyles elevation={0}>
        <>
          <StyledRepoInfoWrapper>
            <h2 className={"info-name-mobile"}>{item.name}</h2>
            <img
              src={item.owner.avatar_url}
              alt={`avatar-${item.owner.login}`}
              width={128}
              height={"100%"}
            />

            <div className={"repo-info-block"}>
              <h2 className={"info-name"}>{item.name}</h2>
              <p className={"info-login"}>{item.owner.login}</p>
              <p className={"info-language"}>{item.language}</p>
              <p className={"info-description"}>{item.description}</p>
            </div>
          </StyledRepoInfoWrapper>

          <div>
            <StyledParagraph>
              <StarIcon width={24} height={"100%"} />

              <span>
                {item.stargazers_count} star{item.stargazers_count > 1 && "s"}
              </span>
            </StyledParagraph>

            <StyledParagraph>
              <WatcherIcon width={24} height={"100%"} />

              <span>
                {item.watchers} watcher{item.watchers > 1 && "s"}
              </span>
            </StyledParagraph>
          </div>
        </>
      </PaperWithStyles>
    </li>
  );
}
