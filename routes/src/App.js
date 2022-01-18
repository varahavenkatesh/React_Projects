import React from 'react';
import { BrowserRouter, Route,Switch} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from'./components/postitem';
import Header from './components/header';


const App = () => {
  return (
    <BrowserRouter>
       
    <div className="container">
      <Header/>
      <Switch>
        <Route path="/posts/:id" exact component={PostItem}/>
        <Route path="/posts" exact component={Posts}/>
        <Route path="/profile"  exact component={Profile}/>
        <Route path="/" exact component={Home}/>
        <Route render = {()=>(<h1>  OOPS PAGE Not Found !!!!!</h1>)}/>

      </Switch>
        
        </div>
    </BrowserRouter>
  );
}

export default App;
