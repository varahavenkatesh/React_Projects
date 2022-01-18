import React, { useContext } from 'react';
import { GameContext
 } from '../context';

const Stage2 = () =>{
const context =useContext(GameContext);

    return(
    <>
    <div className="result-wrapper">
        <h3> The Looser is :</h3>
        <div>{context.state.result}</div>
    </div>
    <div className="action_button" onClick={()=>context.resetGame()}>
        START OVER
    </div>
    <div className="action_button btn_2" onClick={()=>context.getNewLooser()}>
        New Looser
    </div>
    </>
);
}


export default Stage2;