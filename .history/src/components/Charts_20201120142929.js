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
        .then((result)=>{
            console.log(result.json())
          setDate(result.json().result.date);
          setData(result.json().result.data)
          console.log(data)
      console.log(date)
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
