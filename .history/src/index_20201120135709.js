import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components'
import { GlobalStyle } from './styles/GLobalStyle';

const Bar = styled.div`
  position: absolute;
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle>
    </GlobalStyle>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
