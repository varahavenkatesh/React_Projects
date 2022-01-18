import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { render } from 'react-dom';
import {GameContext} from './context';
import Stage1 from './components/stage_1';
import Stage2 from './components/stage_2';


class  App extends React.Component {
static contextType= GameContext;


  render() {
 return(
  <div className="wrapper">
  <div className="center-wrapper">
  <h1> Who Pays the Bill?</h1>
  {this.context.state.stage===1?
  <Stage1/>
  :
  <Stage2/>
  }
  </div> 
</div>
 )
}
}
export default App;