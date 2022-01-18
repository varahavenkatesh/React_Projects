import React from'react';
import { useDispatch,useSelector } from 'react-redux';
import {movieData} from '../store/actions';

const Movie = (props) =>{

    const movies =useSelector(state=>state.movies)
    const dispatch = useDispatch();


    const getMovie=() =>{
            dispatch(movieData())
    }

    console.log(movies)
    return(
        <>
        {movies && movies.movieData ?
        <div>
        <div>Name:{movies.movieData.name}</div>
        <div>Director:{movies.movieData.director}</div>
        <div>Year:{movies.movieData.year}</div>
        { movies && movies.movieData.actors ? movies.movieData.actors.map(item =>(
      <div key={item}>
      name :{item}
      </div>
    )) :null}

      </div>
        :null}



        <button onClick ={ () => getMovie()}>
           Get Movie
           </button>
        </>

    )
}



export default Movie;