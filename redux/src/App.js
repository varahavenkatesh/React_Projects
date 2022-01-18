import React from 'react';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import Header from './componenets/header';
import Home  from './componenets/home';
import Movies from './componenets/movie';
import User from './componenets/users';
const App= () =>{
  return (

        <BrowserRouter>
          <Header/>
          <div className="container" >
        <Switch>
          
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={Movies}  /> 
        <Route path="/users" component={User}  /> 
        </Switch>
        </div>
        </BrowserRouter>
    
    );
}

export default App;
