import React from "react";
import { render } from "react-dom";
import { GlobalStyle } from "./globalStyles";
import {
  BrowserRouter as Router, Route,
} from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
};

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
