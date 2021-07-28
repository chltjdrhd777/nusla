import React from "react";
import { Global, css } from "@emotion/react";
import { device } from "./theme";

const globalCSS = css``;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
