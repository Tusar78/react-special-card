import nerdImage from "../assets/images/illustration.png";
import React from "react";
import { ButtonContainer, CardContainer, ContentContainer } from "../Styled_Components/Container.styles";
import { H1, Image, P, Tag } from "../Styled_Components/Elements.styles";
import { StyledTitle } from "../Styled_Components/Custom.styles";
import Button from "./Button";

const Card = () => {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag bgColor="#4361ee">EXCLUSIVE</Tag>
        <H1>
          <StyledTitle text="React Styled Components" color="#fff" />
        </H1>

        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </P>
        <ButtonContainer>
          <Button text="Watch now" />
          <Button text="Github repo" />
        </ButtonContainer>
      </ContentContainer>
      <Image src={nerdImage} alt="nerd" width="300px" />
    </CardContainer>
  );
};

export default Card;