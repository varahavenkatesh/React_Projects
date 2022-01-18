import React,{Component} from 'react';
import {ToastContainer,toast} from 'react-toastify';

const GameContext = React.createContext();

class GameProvider extends Component{

    state= {
        stage:1,
        players:[],
        result:''
    }

    addPlayerHandler = (name)=> {
        this.setState((prevState)=>({
            players:[...prevState.players,name]
        }))

    }

    removePlayerHandler =(idx)=>{
    let newPlayers= this.state.players;
    newPlayers.splice(idx,1);
    this.setState({players:newPlayers})
    }

nextHandler =()=>{
    let player =this.state.players;
    if(player.length<2){
        console.log('error')
        toast.error('You need more than one Player for This Game',{
            position:toast.POSITION.TOP_LEFT,autoclose:3000
        })
    } else{
        this.setState({stage:2},()=>{
            setTimeout(()=>{
                this.generateLooser()
            },2000)
        })
    }
}

generateLooser= ()=>{
    let looser= this.state.players;
    this.setState({ result: looser[Math.floor(Math.random()*looser.length)]
})
}

resetGame=()=>{
    this.setState({
       
            stage:1,
            players:[],
            result:''
     
    });
}

render(){
    return(
        <>
        <GameContext.Provider value = {{state:this.state,
         addPlayer: this.addPlayerHandler,
         removePlayer: this.removePlayerHandler,
         nextPage:this.nextHandler,
         getNewLooser: this.generateLooser,
         resetGame: this.resetGame
          }}>
            {this.props.children}
        </GameContext.Provider>
        <ToastContainer/>
        </>
    )
}

}


export {GameContext,GameProvider}