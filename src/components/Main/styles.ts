import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

export const DivWrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 30px auto;
`;

export const SearchArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  div {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background: ${(props) => props.theme.color.primary};
    box-shadow: 0 1px 5px ${(props) => props.theme.color.shadow};
    border-radius: 5px;

    input {
      margin-left: 20px;
      background: transparent;
      border: 0;
      outline: none;
      width: 300px;
      height: 30px;
      color: ${(props) => props.theme.color.text};
    }

    button {
      display: none;
    }
  }

  select {
    padding: 0 15px;
    width: 200px;

    color: ${(props) => props.theme.color.text};

    border: 0;
    border-radius: 5px;
    outline: none;

    background: ${(props) => props.theme.color.primary};
    box-shadow: 0 1px 5px ${(props) => props.theme.color.shadow};

    option {
      background-color: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.text};
      display: flex;
      padding: 15px;
    }

    :after {
      position: absolute;
      content: "";
      top: 14px;
      right: 10px;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-color: #fff transparent transparent transparent;
    }
  }

  @media (max-width: 663px) {
    display: block;

    div {
      width: 100%;

      input {
        width: 100%;
      }
    }

    select {
      height: 50px;

      margin-top: 20px;
    }  
  }
`;

export const CardContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

export const Card = styled.div`
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.text};
  box-shadow: 0 1px 5px ${(props) => props.theme.color.shadow};
  height: 380px;
  width: 287px;
  border-radius: 5px;
  cursor: pointer;

  div:nth-child(1) {
    height: 200px;
    width: inherit;

    img {
      width: inherit;
      height: inherit;
      border-radius: 5px 5px 0 0;
    }

    @media (max-width: 400px) {
      height: 180px;
      width: 100%;
    }
    
  }

  div:nth-child(2) {
    padding-left: 18px;

    h3 {
      margin: 20px 0;
    }

    p + p {
      margin-top: 5px;
    }

    @media (max-width: 400px) {
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    height: 330px;
    width: 237px;
  }
`;

export const Button = styled.button`
  display: block;
  background: ${(props) => props.theme.color.primary};
  box-shadow: 0 1px 5px ${(props) => props.theme.color.shadow};
  color: ${(props) => props.theme.color.text};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 0;
  outline: none;
  border-radius: 5px;

  width: 120px;
  height: 40px;
  margin-bottom: 30px;
  padding: 0 35px;

  cursor: pointer;

  @media (max-width: 450px) {
    width: 100px;
    padding: 0 26px;
  }
`;

export const DetailsContainer = styled.div`
  @media (max-width: 450px) {
    font-size: 14px;
  }

  @media (max-width: 317px) {
    font-size: 12px;
  }
`;

export const ImgInformationContainer = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ImageDiv = styled.div`
  width: 500px;
  height: 300px;

  img {
    width: inherit;
    height: inherit;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const InformationContainer = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;

  p, h3 {
    margin-right: 60px;

    @media (max-width: 317px) {
      margin: 0;
    }
  }

  h3 {
    margin-bottom: 25px;
  }

  p {
    line-height: 30px;  
  }

  @media (max-width: 1200px) {
    margin: 30px 0 0 0;
  }
`;

export const ListDetails = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-wrap: wrap;
    width: 50%;

    strong {
      margin-right: 15px;
    }

    p {
      margin-right: 15px;
      background-color: ${(props) => props.theme.color.primary};
      box-shadow: 0 1px 5px ${(props) => props.theme.color.shadow};
      border-radius: 5px;
      padding: 0 10px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 790px) {
    height: auto;

    div {
      width: auto;
    }
  }
`;

export const BorderCountries = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;

  strong {
    margin-right: 15px;
    white-space: nowrap;
  }

  p {
      margin-right: 15px;
      background-color: ${(props) => props.theme.color.primary};
      box-shadow: 0 1px 5px ${(props) => props.theme.color.shadow};
      border-radius: 5px;
      padding: 0 10px;
      margin-bottom: 10px;
    }
`;
