import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/FetchData';
import { getImage } from '../../services/GetImage';
import { List, ListItem } from './MovieDetailsCard.styled';


const MovieDetailsCard = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const { id } = useParams();
    const { poster_path, title, vote_average, overview, genres } = movieDetails;

    useEffect(() => {
        fetchMovieDetails(id).then(setMovieDetails);
    }, [id]);

    const getGenres = () => {
        if (genres) return genres.map(el => el.name).join(', ');
    };

    return (
        <>
            <div>
                <div>
                    <img 
                        src={getImage(poster_path)} 
                        alt="poster" 
                        width={200} 
                    />
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>User score: {vote_average}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{getGenres()}</p>
                </div>
            </div>
            <div>
                <p>Additional information</p>
                <List>
                    <ListItem>
                        <Link to="cast">Cast</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="reviews">Reviews</Link>
                    </ListItem>
                </List> 
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>  
        </>
    );
};

export default MovieDetailsCard;