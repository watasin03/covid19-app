import React,{useEffect, useState} from 'react'
import styled from 'styled-components'



const Bar = styled.div`
  position: absolute;
  width: ${props => props.total/5}%;
  height: 20px;
  top: ${props => props.space*5}%;
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

    useEffect(()=>{
        setInterval(()=>{
            setCount(count+1)
        },2000)
    })
    
    return (
        <div style={{width:'100%', height:'100vh'}}>
            { 
                data.map((item,i)=>{
                return <Bar key={i} space={i} total={item.timeline.cases[date[i]]} >{item.country} ( {item.timeline.cases[date[count]]} cases)</Bar>
                })
           }
        </div>
    )
}
