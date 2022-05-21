import React from 'react';
import { BASE_URL } from './helpers';
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './images/search.svg';

import MovieCard from './components/MovieCard';


const App = () =>
{
    const [keyword, setKeyword] = useState('');
    const [movies, setMovies] = useState([]);


    const searchMovies = async (movieTitle) =>
    {
        console.log(movieTitle);
        const response = await fetch(`${BASE_URL}&s=${movieTitle}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);

    }
    useEffect(() =>
    {
        // searchMovies(keyword);
    }, []);

    return (
        <div className='app'>
            <h1>Movie Buddy 🎬</h1>
            <div className="search">
                <input type="search"
                    name="search"
                    id="searchField"
                    value={keyword}
                    placeholder='Search for movies'
                    onChange={
                        (e) => setKeyword(e.target.value)
                    }

                />
                <img src={SearchIcon} alt="search icon" onClick={
                    () => searchMovies(keyword)
                } />
            </div>

            {
                movies?.length === 0
                    ?
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
                    :
                    (
                        <div className="container">
                            {

                                movies.map((movie) =>

                                (
                                    <MovieCard movie={movie} />
                                )

                                )
                            }
                        </div>
                    )
            }

        </div>
    );
}

export default App;
