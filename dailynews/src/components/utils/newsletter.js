import React,{useRef,useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Form,Button } from 'react-bootstrap';
import {addNewsLetter, clearNewsLetter} from '../../store/actions';
import {showToast} from './tools';



const NewsLetter = () => {
    const useData= useSelector(state =>state.user)
    const dispatch = useDispatch();
    const textInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        dispatch(addNewsLetter({email:value}))
    }

useEffect(() => {
  if (useData.newsletter){
      if(useData.newsletter ==="added") {
          showToast('SUCCESS','Thank You For Subscribing');
          textInput.current.value="";
      }
      if(useData.newsletter ==="failed") {
        showToast('ERROR','You are already a Subscriber');
        textInput.current.value="";
    }

  }


},[useData]) 

useEffect(()=>{
    return (()=>{
        dispatch(clearNewsLetter())
    },[dispatch])
})






return (
        <>
            <div className='newsletter_container'>

                <h1>Join News Letter Subscription</h1>
                <div className='form'>
                    <Form onSubmit= {handleSubmit} className='mt-4'>
                        <Form.Group>
                            <Form.Control
                             type="text"
                             placeholder="Example : youename@email.com"
                             name="email"
                             ref={textInput}
                             />

                        </Form.Group>
                        <Button variant ="primary"  type ="submit"> 
                                Add To List
                        </Button>


                    </Form>
                </div>
           </div>
        </>
)
}

export default NewsLetter;