import React,{useEffect, useState} from 'react'
import styled from 'styled-components'



const Bar = styled.div`
  position: absolute;
  transition: all 0.3s;
  width: ${props => ((props.total*100)/props.totalcases)*5}%;
  height: 20px;
  top: ${props => props.space*5}%;
  background-color: red;
`

export default function Charts(props) {

    const [totalcases,setTotalcases] = useState([])
    const [date,setDate] = useState([])
    const [count,setCount] = useState(0)
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3012/all')
        .then(res=> res.json())
        .then((result)=>{
        console.log(result)
          setDate(result.result.date);
          setData(result.result.data);
          setTotalcases(result.result.totalCases);
        })
        .catch((err)=>{
          console.log(err)
        })
    },[])

    useEffect(()=>{
        if(count > 30) {
            setTimeout(()=>{
                setCount(0)
            },1000)
        } else {
            setTimeout(()=>{
                setCount(count+1)
            },1000)
        }
    })
    
    return (
        <div style={{width:'100%', height:'100vh'}}>
            { 
                data.map((item,i)=>{
                return <Bar key={i} space={i} totalcases={totalcases[date[i]]} total={item.timeline.cases[date[i]]} >{item.country} ( {item.timeline.cases[date[count]]} cases)</Bar>
                })
           }
        </div>
    )
}