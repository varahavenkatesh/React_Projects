import React from 'react';

const CountBtn=({handleCount})=>{
    console.log('3-Countbtn')

    return(
        <>
        <button onClick={handleCount}>
        Increment The Count
        </button>
        </>
    );
}

export default React.memo(CountBtn);