import React from 'react'
import FoundMovie from './FoundMovie';

function MoviesPage({user, movieLookUp, movieSearch, movieSearchError, movieArray, updateFavFilms}) {

    const handleSubmit = (event) => {
        movieLookUp(event.target.imdb.value)
        event.preventDefault();

    }

    const ListFavoriteMovies = () => {
        
        return (
            
            <div className='favoriteMovies' >
            {movieArray.map((movie) => {
                return(
                <div className='favMoviesWrapper'>
                    <div className='favMovieTitle'>
                        <h2>{movie.Title}</h2>
                    </div>
                    <div className='favMovieImage'>
                        <img src={movie.Poster} alt='movie poster'/>
                    </div>
                     <div className='favMovieInfo'>
                        <ul>
                            <li>{movie.Plot}</li>
                            <li>Genre: {movie.Genre}</li>
                            <li>IMDB Rating: {movie.imdbRating}</li>
                            <li>Type: {movie.Type}</li>
                            <li>Run time: {movie.Runtime}</li>
                            <li>Released: {movie.Released}</li>
                        </ul>
                    </div>
                    <div className='favMovieButton'>
                    <button onClick={() => updateFavFilms(movie, 'delete')}>Delete from Favorites</button>
                </div>
                </div>
            
            )})}
        </div>
        )
    }

    return (
        <div className='mainWrapper' >
            <div className='welcome'>
            <h1>Welcome {user.firstname} {user.lastname} </h1> 

            </div>
            <div className='movieSearch'>
                <h2>Look up your favorite Movie using the IMDB number</h2>
                <form onSubmit={handleSubmit}>
                    <div className='searchImdb'>
                        <input type='text' name='imdb' placeholder='Enter IMDB reference' />
                    </div>
                    <div className='submitImdb'>
                        <input type='submit' value='Search'/>
                    </div>
                    <div className='formError'>
                        {movieSearchError}
                    </div>
                    
                </form>
                <div className='foundMovie'>
                    {movieSearch ? <FoundMovie movieSearch={movieSearch} updateFavFilms={updateFavFilms} /> : null}
                </div>

                  <ListFavoriteMovies />

            </div>

            
        </div>
    )
}

export default MoviesPage
