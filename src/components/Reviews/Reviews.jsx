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
            {!reviews && <p>Sorry, there are no reviews yet</p>}
            {reviews && (
                <ul>
                    {reviews.map(({ author, content, id }) => (
                            <li key={id}>
                                <h4>Author: {author}</h4>
                                <p>{content}</p>
                            </li>          
                    ))}
                </ul>
            )}
        </>
    );
};

export default Reviews;