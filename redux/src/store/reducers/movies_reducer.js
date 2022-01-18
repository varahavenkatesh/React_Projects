const DEFAULT_STORE ={
    userName:'Venkatesh',
    userID: 99999
}

export default function appReducer(state=DEFAULT_STORE,action){
    switch(action.type){
            case 'MOVIES_LIST':
                return {...state,moviesList:action.payload}
                case 'MOVIES_DATA':
                    return {...state,movieData:action.payload}

                    case 'GET_USER':
                    return {...state,users:action.payload}

             default:
                 return state   
    }
}