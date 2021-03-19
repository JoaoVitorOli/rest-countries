import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.color.primary};
  height: 80px;
  align-items: center;
  box-shadow: 0 1px 5px ${(props) => props.theme.color.shadow};
  
  div {
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;

    button {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 120px;
      height: 35px;

      padding: 0 15px;

      color: ${(props) => props.theme.color.text};
      background: transparent;

      border: 0;
      border-radius: 50px;
      outline: none;

      cursor: pointer;

      :hover {
        background: ${(props) => props.theme.color.hoverButton};
      }

      svg {
        fill: ${(props) => props.theme.color.text};
      }
    }
  }

  @media (max-width: 530px) {
    div > h3 {
      font-size: 16px;
    }

    div > button {
      font-size: 12px;
    }
  }

  @media (max-width: 400px) {
    div > h3 {
      font-size: 14px;
    }

    div > button {
      width: auto;

      p {
        display: none;
      }
    }
  }
`;
