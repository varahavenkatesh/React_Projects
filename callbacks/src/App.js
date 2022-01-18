import React ,{useState,useCallback} from 'react';
import Title from './components/title';
import Count from './components/count';
import CountBtn from './components/countBtn';
import Age from './components/age';
import AgeBtn from './components/ageBtn';


const App= ()=>{
  const [count,setCount]=useState(0);
  const [age,setAge]=useState(20);
  const incrementCount = useCallback(()=>{
    setCount(prevcount=>prevcount+1);
  },[])
  const incrementAge =useCallback(()=>{
    setAge(age+1);
    console.log(age)
  },[age])
console.log(age)
  return(
  <>
  <Title></Title>
  <Count count={count}/>
  <CountBtn handleCount={incrementCount}/>
  <Age age={age}/>
  <AgeBtn handleAge={incrementAge}/>
  </>
  );

  }


export default App;
