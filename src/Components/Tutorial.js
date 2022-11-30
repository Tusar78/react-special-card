import React from "react";
import { Container } from "../Styled_Components/Container.styles";
import Card from "./Card";
import Toggle from "./Toggle";

const Tutorial = () => {
  return (
    <>
      <Container>
        <Toggle />
        <Card />
      </Container>
    </>
  );
};

export default Tutorial;
