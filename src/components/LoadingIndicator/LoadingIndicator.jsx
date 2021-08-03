import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import { getIsLoadingData } from "../../app/githubApi/gitHubApiSelectors";
import { css } from "@emotion/react";

export const override = css`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function LoadingIndicator() {
  const isLoadingData = useSelector(getIsLoadingData);

  return (
    <RingLoader
      loading={isLoadingData}
      color={"#65b79a"}
      css={override}
      size={150}
    />
  );
}
