import React, { Component } from "react"
import MovieCard from "./card-components/MovieCard.js"
import movieData from "./data.js"

class MovieShowcase extends Component {
  generateMovieCards = () => {
    const movies = movieData.map(movie => (
      <MovieCard
        title={movie.title}
        IMDBRating={movie.IMDBRating}
        genres={movie.genres}
        poster={movie.poster}
      />
    ))
    return movies
  }

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>
  }
}

export default MovieShowcase
