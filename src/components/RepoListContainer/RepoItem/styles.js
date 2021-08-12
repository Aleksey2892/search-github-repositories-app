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
    transition: "all 0.25s linear",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#e4eae6",
    },

    [theme.breakpoints.up("tablet")]: {
      padding: 40,
      flexDirection: "row",
      alignItems: "flex-end",
    },
  },
})(Paper);

export const RepoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .repo-info-block {
    text-align: center;

    .info-name-mobile {
      margin-top: 0;
      margin-bottom: 8px;
      display: block;
      color: #081f32;
    }
    .info-name {
      margin-top: 0;
      display: none;
    }
    .info-login,
    .info-language,
    .info-description {
      margin: 0;
      font-size: 16px;
      color: #a5adbb;
      line-height: 25px;
    }
    .info-description {
      margin-top: 6px;
      color: #6e798c;
    }

    @media screen and (min-width: ${({ theme }) =>
        theme.breakpoints.values.tablet + "px"}) {
      margin-left: 32px;
      margin-right: 20px;
      text-align: left;

      .info-name {
        margin-bottom: 8px;
        display: block;
        font-size: 22px;
        color: #081f32;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values.tablet + "px"}) {
    flex-direction: row;
    align-items: flex-start;

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
    margin-left: 14px;

    &.stars-count {
      font-weight: 600;

      > span {
        margin: 5px;
        color: #6e798c;
        font-weight: 400;
      }
    }
    &.watchers-count {
      font-weight: 600;
    }
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.values.tablet + "px"}) {
    justify-content: left;
    white-space: nowrap;
  }
`;
