import React,{useState} from 'react';

const App= ({initialCount})=> {


  let [state,setState] = useState({
      count:initialCount,
      user:"Venkatesh "
    });

      let [posts,setPosts]=useState([
        {
              name:'Super awesome post',
              body:'The Content of the Post'

        },
        {
            name:'JS is Great',
            body:'Scritps are too advanced'
        },
        {
            name:'React Vs Angular Js ',
            body:'Never Ending Competation'
        },
        {
            name:'React vs Angular JS vs Vue JS',
            body:'Neck to Neck Competation in the Software Market'
        }
     ]
      )

     
let restOne=()=>{
    setState({...state,count:state.count-1})
}
  
let addOnePost= ()=>{
    let newPost={
        name:'What next in Java Script Space',
        body:'Keep Wactching This SPACE ..............'
    }
    setPosts([...posts,newPost])

}




  return(
    <>
    <h1>{state.user}</h1>
    <h3>Count:{state.count}</h3>
    <button onClick={ ()=> setState({...state,count:state.count+1}) }> Add one +1 </button>
    <button onClick={restOne}>Subtract one -1</button>

    <hr/>
    {
        posts.map((item,i)=>(
        <div key={i}>
        <div> Name:{item.name}</div>    
        <div> Blog:{item.body}</div>
        <hr/>
        </div>
    ))}
    <button onClick={addOnePost}>Add Post</button>
    </>
  );
} 
export default App;