import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import styled from "styled-components";
import theme from "../../../theme/materialTheme";

export const PaperWithStyles = withStyles({
  root: {
    marginBottom: 36,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 16,

    [theme.breakpoints.up("tablet")]: {
      padding: 40,
      flexDirection: "row",
      alignItems: "flex-end",
    },
  },
})(Paper);

export const StyledRepoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .repo-info-block {
    text-align: center;

    .info-name-mobile {
      display: block;
    }
    .info-name {
      display: none;
    }

    @media screen and (min-width: ${({ theme }) =>
        theme.breakpoints.values.tablet + "px"}) {
      margin-left: 32px;
      margin-right: 20px;
      text-align: left;

      .info-name {
        display: block;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values.tablet + "px"}) {
    flex-direction: row;

    .info-name-mobile {
      display: none;
    }
  }
`;

export const StyledParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    margin-left: 16px;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values.tablet + "px"}) {
    justify-content: left;
  }
`;
