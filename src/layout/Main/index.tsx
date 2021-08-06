import React from "react";
import styled from "@emotion/styled";
import Content from "components/Section";

function Index() {
  return (
    <Main>
      <Content />
    </Main>
  );
}

const Main = styled.main`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
`;

export default Index;
