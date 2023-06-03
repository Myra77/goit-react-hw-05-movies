import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/FetchData';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchReviews(id).then(response => {
            if (response.length === 0) {
                setReviews(null)
            }
            else {
                setReviews(response)
            };
        });
    }, [id]);

    return (
        <>
        <ul>
            {!reviews && <p>Sorry, there are no reviews yet</p>}
                {reviews?.length > 0 ?
                        reviews.map(({ author, content, id }) => (
                            <li key={id}>
                                <h2> {author ? `Author:${author}` : 'No information available'}</h2>
                                <p>{content}</p> 
                            </li>        
                        ))
                        : 'No information available'}
            </ul>
        </>
    );
};

export default Reviews;