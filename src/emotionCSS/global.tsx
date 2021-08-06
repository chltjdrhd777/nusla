import React from "react";
import { Global, css } from "@emotion/react";
import { device } from "./theme";
import { colors } from "./theme";

const globalCSS = css`
  * {
    font-family: "Rubik", sans-serif;
    box-sizing: border-box;
    color: ${colors.black};
    margin: 0;
    padding: 0;
  }

  .centering {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-column {
    flex-direction: column;
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
