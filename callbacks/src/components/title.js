import React from 'react';

const Title=()=>{
    console.log('1-Title')
    return (
        <>
             <h1> Quick CallBack App</h1>
             <hr/>   
        </>
    );
}

export default React.memo(Title);


