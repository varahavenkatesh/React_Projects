import React,{useRef} from'react';

const App =() =>{

    const textinput = useRef();

 const triggerHandler =() =>{
    console.log(textinput.current.value)
}

    return(
    <>
    <h1> Form</h1>
  
    <InputComponent ref={textinput}/>
    <button onClick={triggerHandler}>Trigger </button>
    </>
    );


}
const InputComponent = React.forwardRef((props,ref)=>{
    return(
        <input type="text" ref={ref}/>
    )
})
export default App;