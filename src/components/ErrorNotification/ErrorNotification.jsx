import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import { getResponseError } from "../../app/githubApi/gitHubApiSelectors";
import { MuiAlertWithStyles } from "./styles";

export default function ErrorNotification() {
  const [open, setOpen] = useState(false);
  const error = useSelector(getResponseError);

  const handleClose = (event, reason) => {
    reason !== "clickaway" && setOpen(false);
  };

  useEffect(() => {
    error?.config && setOpen(true);
  }, [error]);

  return (
    <Snackbar open={open} onClose={handleClose}>
      <MuiAlertWithStyles onClose={handleClose} severity="error">
        Something went wrong :(
        <br />
        Try again later.
        <br />
        Loading error of this url:
        <br />
        <span>{`${error?.config?.baseURL}${error?.config?.url}`}</span>
      </MuiAlertWithStyles>
    </Snackbar>
  );
}
