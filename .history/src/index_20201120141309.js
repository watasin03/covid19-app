import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components'
import { GlobalStyle } from './styles/GLobalStyle';

const Bar = styled.div`
  position: absolute;
  width: ${this.props.total};
  height: 20px;
  background-color: red;
`
const [date,setDate] = useState([])
const [count,setCount] = useState(0)
const [data,setData] = useState([])

useEffect(()=>{
  fetch('http://localhost:3012/all')
  .then((result)=>{
    setDate(result.json().result.date);
    setData(result.json().result.data)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <Bar total={data.length} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
