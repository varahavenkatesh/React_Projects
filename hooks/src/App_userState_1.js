import React,{useState} from 'react'

const App= ({initialCount})=> {
  let [count,setCount] = useState(initialCount);

  const restOne =()=>{
    setCount(prevCount=>{
      return prevCount-1
    })
  }
  return(
    <>
    <h3>Count:{count}</h3>
    <button onClick={ ()=> setCount(count+1) }> Add one +1 </button>
    <button onClick={restOne}> Rest One -1</button>
    <button onClick={()=>setCount(initialCount)}>RESET</button>
    </>
  );
} 
export default App;