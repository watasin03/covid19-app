import React,{useEffect, useState} from 'react'
import styled from 'styled-components'



const Bar = styled.div`
  position: absolute;
  width: ${props => props.total};
  height: 20px;
  background-color: red;
`

export default function Charts(props) {
    const [date,setDate] = useState([])
    const [count,setCount] = useState(0)
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3012/all')
        .then(res=> res.json())
        .then((result)=>{
        console.log(result)
          setDate(result.result.date);
          setData(result.result.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    },[])
    
    return (
        <div>
            <Bar total={data.length} />
        </div>
    )
}