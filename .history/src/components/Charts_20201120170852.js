import React,{useEffect, useState} from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    transition: all 0.3s;
    position: relative;
    width:100vw;
`

const Guage = styled.div`
    position: absolute;
    transition: all 0.3s;
    height: 30px;
    background-color: red;
    min-width: ${props => ((props.total*100)/props.totalcases)*5}%;
`

const Bar = styled.div`
  position: absolute;
  transition: all 0.3s;
  width: 100vw;
  top: ${props => props.totalcases > props.totalUp ? (props.space-1)*7 : props.totalcases < props.totalDown ? (props.space+1)*7 : props.space*7}%;
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
        console.log(item.timeline.cases[date[i-1]])
        console.log(item.timeline.cases[date[i+1]])
        if(count > 30) {
            console.log(item.timeline.cases[date[i-1]])
            setTimeout(()=>{
                setCount(0)
            },300)
        } else {
            setTimeout(()=>{
                setCount(count+1)
            },300)
        }
    })
    
    return (
        <div style={{width:'100%', height:'100vh'}}>
            { 
                data.map((item,i)=>{
                return <Bar key={i} space={i} totalcases={totalcases[date[i]]} total={item.timeline.cases[date[i]]} totalUp={item.timeline.cases[date[i+1]]} totalDown={item.timeline.cases[date[i-1]]}>
                        <Wrap>
                            <Guage key={i} space={i} totalcases={totalcases[date[count]]} total={item.timeline.cases[date[i]]} totalUp={item.timeline.cases[date[i+1]]} totalDown={item.timeline.cases[date[i-1]]} />
                            <p style={{margin:'0',padding:'0',position:'absolute'}}>{item.country} ( {item.timeline.cases[date[count]]} cases)</p>
                        </Wrap>
                    </Bar>
                })
           }
        </div>
    )
}
