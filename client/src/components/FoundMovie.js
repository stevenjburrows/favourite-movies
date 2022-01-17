import React from 'react'

function FoundMovie({movieSearch, updateFavFilms}) {

    return (
        <div className='foundMovieWrapper'>

            <div className='foundMovieInfoWrapper'>
                <div className='foundMovieImage'>
                    <img src={movieSearch.Poster} alt='movie poster'/>
                </div>
                <div className='foundMovieInfo'>
                <div className='movieFoundTitle' >
                <h3>{movieSearch.Title}</h3>
            </div>
                    <ul>
                        <li>{movieSearch.Plot}</li>
                        <li>Genre: {movieSearch.Genre}</li>
                        <li>IMDB Rating: {movieSearch.imdbRating}</li>
                        <li>Type: {movieSearch.Type}</li>
                        <li>Run time: {movieSearch.Runtime}</li>
                        <li>Released: {movieSearch.Released}</li>
                    </ul>
                    <div className='foundMovieButton'>
                    <button onClick={() => updateFavFilms(movieSearch, 'add')}>Add to Favorites</button>
                </div>
                </div>


            </div>

        </div>
    )
}

export default FoundMovie
