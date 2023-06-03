import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../services/FetchData';
import { getImage } from '../../services/GetImage';

import css from './SearchMovie.module.css';

const SearchMovie = () => {
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        if (!searchParams) return;

        setInputValue(searchParams.get('query') ?? '');

        async function getMovieList() {
            const movieList = await fetchMoviesByQuery(searchParams.get('query'));
            setMovies(movieList);
        }

        getMovieList();
    }, [searchParams]);

    const handleSubmit = e => {
        e.preventDefault();
        const query = inputValue !== '' ? { query: inputValue } : {};
        setSearchParams(query);
        fetchMoviesByQuery(inputValue)
            .then(setMovies)
            .catch(console.error);
    };

    const handleChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    return (
        <>
            
                <form className={css['SearchForm']} onSubmit={handleSubmit}>
                    <input>
                        name="query"
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Find your favorite movie"
                        autoComplete="off"
                        autoFocus
                    </input>
                    <button type="sumbit" className={css['SearchFormBtn']}>
                        Search
                    </button> 
                </form>
            <ul>
                {movies.map(({ id, title, poster_path, vote_average }) => (
                    <ul key={id}>
                        <Link to={`${id}`} state={{ from: location }}>
                            <>
                            src={getImage(poster_path)} alt="poster"
                            </> 
                            <>
                            {title}
                            </>
                            <>
                            {vote_average}
                            </>
                        </Link>
                    </ul>
                ))}
            </ul>  
        </>
    );
};

export default SearchMovie;