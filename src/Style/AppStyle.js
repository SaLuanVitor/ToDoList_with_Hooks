import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export const ToDo = styled.div`
  border: solid black;
  margin: 0 auto;
  max-width: 1100px;
  border-radius: 2em;
`;

export const H1 = styled.h1`
  text-align: center;
  color: rebeccapurple;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  border-radius: 2em;
  margin-left: 2em;
  padding: 0.5em;
`;

export const Button = styled.button`
  border: none;
  border-radius: 2em;
  margin-top: 1em;
  padding: 0.5em;
  width: 5em;
  cursor: pointer;
  margin-left: 1em;
  transition: 1s all;
  :hover {
    background-color: rebeccapurple;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 2em auto;
  align-items: left;
  padding: 2em;
`;

export const DelButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 1em;
  transition: 1s all;
  :hover {
    background-color: rebeccapurple;
  }
`;

export const Img = styled.img`
  width: 10px;
  cursor: pointer;
`;
