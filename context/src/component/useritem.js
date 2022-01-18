import React, { useContext } from 'react';
import { AppContext } from '../context';


const UserItem= ()=>{
    const context = useContext(AppContext);
      
       
      let output = context.users.map((user)=>(
          
        <div key = {user.id}>
           
        <h3>{user.id} &nbsp;
        {user.name}</h3>
        <hr/>
        </div>
        

    
))

    return(
        <>
        <h2> USERS</h2>
        <hr/>
         {output}
         </>
          
    )
      

          
}

export default UserItem;