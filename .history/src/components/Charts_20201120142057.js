import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  position: absolute;
  width: ${this.props.total};
  height: 20px;
  background-color: red;
`
const [date,setDate] = useState([])
const [count,setCount] = useState(0)
const [data,setData] = useState([])

const Bar = styled.div`
  position: absolute;
  width: ${props.total};
  height: 20px;
  background-color: red;
`

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

export default function Charts() {
    return (
        <div>
            <Bar total={data.length} />
        </div>
    )
}
