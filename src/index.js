import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeProvider } from "styled-components";
import theme from "./theme/materialTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

serviceWorker.unregister();
