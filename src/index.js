import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles/GLobalStyle';
import Charts from './components/Charts';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <Charts />
  </React.StrictMode>,
  document.getElementById('root')
);
