import React from "react";
import styled from "@emotion/styled";
import back1 from "images/model-s.jpg";
import { css } from "@emotion/css";

function Index() {
  return (
    <Section>
      <div className="container">
        <article className="itemText centering flex-column">
          <h1>Model S</h1>
          <p>Order Online for Touchless Delivery</p>
        </article>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  background: url(${back1}) center no-repeat;
  background-size: cover;

  & article[class~="itemText"] {
    padding-top: 15vh;
    & > h1 {
      font-size: 2rem;
    }
  }
`;

export default Index;
