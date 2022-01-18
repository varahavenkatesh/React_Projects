import React,{useRef,useContext,useState} from 'react';
import {Button,Form,Alert} from 'react-bootstrap';

import {GameContext} from '../context';

const Stage1 = () =>{
const textInput =useRef();
const context = useContext(GameContext);
const [error,setError] = useState(false,'')

const handleSubmit=(e)=>{
    e.preventDefault();
    const value =textInput.current.value;
    const validate = validateInput(value);
    if (validate){
        setError([false,'']);
        context.addPlayer(value)
        textInput.current.value=''
    }
console.log(context)

}

const validateInput=(data)=>{
    if(data ===''){
        setError([true,'Sorry, Please Add valid Player Name'])
        return false;
    }
    if(data.length<2){
        setError([true,'Add a valid Players Name which is More than 2 Char'])
        return false;
    }
    return true;
}

return(
    <>
    <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
            <Form.Control type ="text" placeholder='Add Player Name'
            name='player' ref={textInput}/>
        </Form.Group>
    {
        error[0]?<Alert variant ="danger">{error[1]}</Alert>:null
    }
        <Button className="miami" variant="primary" type="submit">
            Add Player
        </Button>
    </Form>

    {
         context.state.players && context.state.players.length > 0 ?
          <>
            <hr/>
            <div>
              <ul className="list-group">
                { context.state.players.map((item,idx)=>(
                  <li key={idx} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                    {item}
                    <span
                      className="badge badge-danger"
                      onClick={()=>context.removePlayer(idx)}
                    >x</span>
                  </li>
                ))
                }
              </ul>
              <div onClick ={()=>context.nextPage()} className="action_button">
                  NEXT

              </div>
            </div>
          </>
         :null
        }




    </>
)
}








export default Stage1;