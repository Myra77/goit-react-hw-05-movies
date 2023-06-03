import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from '../../services/FetchData';
import { getImage } from '../../services/GetImage';
import { List } from './TopMoviesList.styled';


const TopMoviesList = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchTrendMovies().then(response => setMovies(response));
    }, []);

    return (
        <>
            <List>
                {movies.map(({ id, title, poster_path, vote_average }) => (
                        <li key={id}>
                            <Link to={`movies/${id}`} state={{ from: location }}>
                                
                                    src={getImage(poster_path)} alt="poster"
                                
                                {title}
                                {vote_average}
                            </Link>
                        </li>
                    ))}
            </List>
        </>
    );
};

export default TopMoviesList;