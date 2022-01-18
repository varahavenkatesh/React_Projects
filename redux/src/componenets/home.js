import React from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../store/actions';



class Home extends React.Component {

getMoviesHandler(){
  this.props.dispatch(moviesList())
}

  render(){
    console.log(this.props)
    const {movies} =this.props;
    return(
    <>
    { movies && movies.moviesList ? movies.moviesList.map(item =>(
      <div key={item.name}>
      name :{item.name}
      </div>
    )) :null}
    <button onClick={()=>{this.getMoviesHandler()}}>
      Get Movies
    </button>
    </>
    
      );
    
  }
}


const mapStateToProps =(state)=> {
  return {movies:state.movies}
}
export default connect(mapStateToProps)(Home);

