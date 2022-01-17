import React, {useState} from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from '../components/LoginPage'
import axios from 'axios'
import MoviesPage from '../components/MoviesPage'
import '../styles/main.css'


function HomePageContainer() {
    const [loginError, setLoginError] = useState('')
    const [userDetails, setUserDetails]= useState({})
    const [movieSearch, setMovieSearch] = useState()
    const [movieSearchError, setMovieSearchError] = useState('')
    const [movieArray, setMovieArray] = useState([])

    let navigate = useNavigate();
    //setting the base URL to make it easy to add more
axios.defaults.baseURL = 'http://luminar-backend.herokuapp.com/api'

    const login = async (username, password) => {
        

        try{
            const user = await axios.post('/auth', {
                'un': username,
                'pw': password
            })
            setUserDetails(user.data[0])
            var UsersMovies = user.data[0].favourite_movies.split(',')
            UsersMovies.map((imdb)=> {
                favMovieLookUp(imdb)
                return null
            })
            setLoginError('')
            navigate('/movies')
        } catch (error){
                if(error.response.status === 401) {
                setLoginError(error.response.data.error)
            } else{
                console.log(error);
            }
        }

    }

    const movieLookUp = async (imdb) => {
        
        try {
            const movie = await axios.get(`movies?imdb=${imdb}`)
            if(movie.data.Response === 'True') {
                setMovieSearchError()
                setMovieSearch(movie.data)
            } else {
                setMovieSearchError('Movie not found try again')
            }
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const favMovieLookUp = async (imdb) => {
        
        try {
            const movie = await axios.get(`movies?imdb=${imdb}`)
            favFilms(movie.data, 'add')

        } catch (error) {
            console.log(error.response.data);
        }
    }

    const favFilms = (film, todo) => {
        if(todo === 'add'){
            setMovieArray(movieArray => [...movieArray, film])
        } else if(todo === 'delete'){
            let newFav = movieArray.filter(filmFav => filmFav !== film)
            setMovieArray(newFav)
        }
        
    }

    const updateFavFilms = (film, todo) => {
        let imdb = film.imdbID
        let userFav = userDetails.favourite_movies.split(',')
        if(todo === 'add') {
            userFav.push(imdb)
             axios.post('/user/updatemovies',
            {
                'movies': userFav.toString(),
                'id': userDetails.id
            })
            setUserDetails({favourite_movies: userFav.toString()})
            favFilms(film, todo)
            setMovieSearch()
        } else if(todo === 'delete'){
            let newFav = userFav.filter(film => film !== imdb)
            axios.post('/user/updatemovies',
            {
                'movies': newFav.toString(),
                'id': userDetails.id
            })
            setUserDetails({favourite_movies: newFav.toString()})
            favFilms(film, todo)

        }


        
    }

    return (
        <>
        <Routes>
            <Route path="/" element={<LoginPage login={login} error={loginError}/>} />
            <Route 
            path="/movies" 
            element={<MoviesPage 
                user={userDetails} 
                movieLookUp={movieLookUp} 
                movieSearch={movieSearch} 
                movieSearchError={movieSearchError} 
                movieArray={movieArray}
                updateFavFilms={updateFavFilms}
                />}
            />
        </Routes>
        </>
    )
}

export default HomePageContainer
