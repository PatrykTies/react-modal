import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import ToggleButton from './ToggleButton';
// import { Normalize } from "styled-normalize";

const Global = createGlobalStyle`
  html, body, #root {
    margin: 0;
    height: 100vh;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
`;

export const App = () => (
  <>
    <Global />
    <ToggleButton />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
