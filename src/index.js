import * as ReactDOM from 'react-dom';
import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// import { Normalize } from "styled-normalize";

const Global = createGlobalStyle`

  html, body, #root {
    margin: 0;
    height: 100vh;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    font-family: 'Open Sans', sans-serif;
    color: blue;
  }
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Index = () => {
  return <Button>Hello React,Webpack4,Babel7!</Button>;
};

export const App = () => (
  <>
    <Global />
    <Index />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
