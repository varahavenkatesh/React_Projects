import axios from 'axios';

export const moviesList = () =>{
    
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Pulp fiction' },
            {id:2,name:'Pacific Rim' },
            {id:3,name:'Rambo' }
        ]
    }
}

export const movieData =() => {
    return {

        type:'MOVIES_DATA',
        payload:{
            id:1,
            name: 'Pulp Fiction',
            actors:['Travolta','Thurman'],
            year:1990,
            director:'Tarantino'
            }
        }
}

export const getUsers= async() =>{
                               
    const request = await axios.get(`https://jsonplaceholder.typicode.com/users`).then(response=>{
       return response.data
    });
    //const request = await fetch(`https://jsonplaceholder.typicode.com/users`)

    //const json = await request.json();
    console.log(request)
   
    return {
        
        type:'GET_USER',
        payload:request
        
    }
}


/*
export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: 'GET_USER',
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: 'USERS_ERROR',
            payload: console.log(e),
        })
    }

}
*/