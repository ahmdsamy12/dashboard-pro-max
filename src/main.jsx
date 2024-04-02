import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { registerLicense } from "@syncfusion/ej2-base/src/index.js";
import { ContextProvider } from "./contexts/ContextProvider.jsx";

registerLicense(
  "ORg4AjUWIQA/Gnt2UFhhQlJBfVtdX2FWfFN0QXNddV55fldEcDwsT3RfQFljSnxWd0NgXH1YdHxVQg=="
);

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
