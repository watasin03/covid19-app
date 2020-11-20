import React from 'react'

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

export default function Charts() {
    return (
        <div>
            
        </div>
    )
}
