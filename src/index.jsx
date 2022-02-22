/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import { MetaProvider, Title, Link, Meta } from "solid-meta";

import "./index.css";
import Routes from "./pages";

render(
  () => (
    <MetaProvider>
      <Router>
        <Routes />
      </Router>
    </MetaProvider>
  ),
  document.getElementById("root")
);
