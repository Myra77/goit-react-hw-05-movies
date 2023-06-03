import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/FetchData';
import { getImage } from '../../services/GetImage';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchCast(id).then(setCast);
    }, [id]);

    return (
        <>
            <ul>
                {cast.map(({ name, id, profile_path, character }) => (
                    <li key={id}>
                        <img alt={name} width={80}>
                            src={getImage(profile_path)} 
                        </img>
                        <h3>{name}</h3>
                        <p>{character}</p>
                    </li>
                ))}
            </ul>
        </>
    )
};
    
export default Cast;