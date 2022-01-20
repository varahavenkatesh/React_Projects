import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './header';
import FormOne from './formone';
import FormTwo from './formtwo';
import FormThree from './formthree';
import YupForm from './yupform';

class Routes extends Component {

    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/formthree" component={FormThree} />
                    <Route path="/yupform" component={YupForm} />
                    <Route path="/formtwo" component={FormTwo} />
                    <Route path="/" component={FormOne} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;