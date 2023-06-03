import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from '../../services/FetchData';
import { getImage } from '../../services/GetImage';


const TopMoviesList = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchTrendMovies().then(response => setMovies(response));
    }, []);

    return (
        <>
            <ul>
                {movies.map(({ id, title, poster_path, vote_average }) => (
                    <ul key={id}>
                        <Link to={`movies/${id}`} state={{ from: location }}>
                            <>
                            src={getImage(poster_path)} alt="poster"
                            
                            {title}
                            
                            {vote_average}
                            </>
                            
                        </Link>
                    </ul>
                ))}
            </ul>
        </>
    );
};

export default TopMoviesList;