import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components'
import { GlobalStyle } from './styles/GLobalStyle';

const Bar = styled.div`
  position: absolute;
  width: 50px;
  height: 20px;
  background-color: red;
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <Bar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
