import React,{Component} from "react";

const AppContext = React.createContext();


class AppProvider extends Component{

    state = {
        users:[
            {id:1,name:'Venky'},
            {id:2,name:'Adithya'},
            {id:3,name:'Kusuma'},
            {id:4,name:'Rathna'},
            {id:5,name:'Murthy'}
        ]
    }

render() {
    return(
        <AppContext.Provider value ={this.state}>
            {this.props.children}
        </AppContext.Provider>
         )
}

}

export {AppContext,AppProvider}