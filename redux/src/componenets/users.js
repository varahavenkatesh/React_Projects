import React, { useEffect} from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../store/actions';



class User extends React.Component {

getUsersHandler(){
  this.props.dispatch(getUsers())
}


  render(){
    console.log(this.props)
    const {users} =this.props;
    console.log(this.getUsers)
    
        return(
      
    <>
    { users && users.getUsers ? users.getUsers.map(item =>(
      <div key={item.id}>
      name :{item.name}
      </div>
    )) :null}
    
    <button onClick={()=>{this.getUsersHandler()}}>
      Get Users
    </button>
    </>
    
      );
    
  }
}


export default connect()(User);

