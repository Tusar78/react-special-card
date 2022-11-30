import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  :root {
    --line-color: hsl(234, 12%, 35%);
    --active-color: hsl(234, 100%, 98%);
    --inactive-color: hsl(234, 20%, 68%);
    --body-color: hsl(0deg 0% 15%);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .toggle__content {
    display: grid;
    position: absolute;
    top: 3rem;
    right: 3rem;
  }

  .toggle__label {
    cursor: pointer;
    padding-bottom: .5rem;
  }

  .toggle__check {
    display: none;
  }

  .toggle__rail {
    position: relative;
    width: 52px;
    height: 4px;
    background-color: var(--line-color);
    border-radius: 2rem;
  }

  .toggle__circle {
    display: block;
    width: 24px;
    height: 24px;
    background-color: var(--body-color);
    box-shadow: inset 0 0 0 4px var(--inactive-color);
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    transition: transform .4s, box-shadow .4s;
    z-index: 2;
  }

  .toggle__border {
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: var(--body-color);
    border-radius: 50%;
    left: -4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    transition:  transform .4s;
  }

  .toggle__check:checked ~ .toggle__rail .toggle__circle {
    transform: translateX(28px);
    box-shadow: inset 0 0 0 12px var(--active-color);
  }

  .toggle__check:checked ~ .toggle__rail .toggle__border {
    transform: translateX(28px);
  }
`;

export default GlobalStyle;
