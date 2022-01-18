import React from 'react';

const AgeBtn=({handleAge})=>{
    console.log('5-Age Button')
    return(
        <>
        <button onClick={handleAge}>
            Increment the Age
        </button>
        </>
    )
}

export default React.memo(AgeBtn);