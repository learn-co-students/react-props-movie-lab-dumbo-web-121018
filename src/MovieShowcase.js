import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    // movieData.map(movie =>
    //   console.log(movie)
    // );
    return movieData.map((movie, index) =>
    {
      const {poster, title, IMDBRating, genres} = movie
        return <MovieCard poster={poster} title={title} IMDBRating={IMDBRating} genres={genres} key={index}/>
      }
    );
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
