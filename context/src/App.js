import React from 'react';
import User from './component/user';
import {AppProvider} from './context';


const App= ()=> {
  return(

    <>
    <AppProvider>
         <User/> 
    </AppProvider>
    
    </>
  )
}


export default App;