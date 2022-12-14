import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  background: ${({ theme }) =>
    theme.toggle === false ? "#f0f2f5" : "#262626"};
  width: 100%;
  height: 100vh;
`;

const CardContainer = styled.div`
  position: relative;
  /* background: #1e1e1e; */
  background: ${({ theme }) => (theme.toggle === false ? "#fff" : "#1e1e1e")};
  height: 350px;
  width: 550px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 215px;
  position: absolute;
  left: 20px;
  z-index: 3;
`;

const ButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 10px;
  & a {
    display: inline-block;
    overflow: hidden;
    position: relative;
    font-size: 11px;
    /* color: #aaa; */
    color: ${({ theme }) => (theme.toggle === false ? "#111" : "#aaa")};
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => (theme.toggle === false ? "#aaa" : "#333")};
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: -10px;
      width: 0%;
      background: ${({ theme }) => (theme.toggle === false ? "#111" : "#262626")};
      height: 100%;
      z-index: -1;
      transition: width 0.3s ease-in-out;
      transform: skew(-25deg);
      transform-origin: right;
    }

    &:hover {
      color: #fff;
      transition: all 0.5s ease;

      &::after {
        width: 150%;
        left: -10px;
        transform-origin: left;
      }
    }

    &:nth-of-type(1) {
      border-radius: 50px 0 0 50px;
      border-right: none;
    }

    &:nth-of-type(2) {
      border-radius: 0px 50px 50px 0;
    }
  }
`;

export { Container, CardContainer, ContentContainer, ButtonContainer };
