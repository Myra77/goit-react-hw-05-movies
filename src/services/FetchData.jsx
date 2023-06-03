import axios from 'axios';

const KEY = 'api_key=7c8c4a85f3e5bf51d7c8e7e89688e5d7';
const URL = 'https://api.themoviedb.org';

export const fetchTrendMovies = async () => {
    const responsive = await axios.get(`${URL}/3/trending/movie/week?${KEY}`);

  return responsive.data;
};

export const fetchMovieDetails = async id => {
    const responsive = await axios.get(`${URL}/3/movie/${id}?${KEY}`);

    return responsive.data;
  };

export const fetchCast = async id => {
    const responsive = await axios.get(
        `${URL}/3/movie/${id}/credits?${KEY}`
      );
    
      return responsive.data;
    };

export const fetchReviews = async id => {
    const responsive = await axios.get(
        `${URL}/3/movie/${id}/reviews?${KEY}`
      );
    
      return responsive.data;
    };

export const fetchMoviesByQuery = async query => {
    const responsive = await axios.get(
        `${URL}/3/search/movie?${KEY}&query=${query}`);

    return responsive.data;
};