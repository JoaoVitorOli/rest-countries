import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body  {
    background: ${(props) => props.theme.color.background};
    font-family: "Nunito Sans", sans-serif;
    color: ${(props) => props.theme.color.text};
  }
`;
