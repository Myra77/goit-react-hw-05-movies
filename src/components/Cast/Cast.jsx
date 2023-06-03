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
                {cast.map(({ id, name, profile_path, character }) => (
                    <li key={id}>
                        <img 
                            src={getImage(profile_path)} alt={name} width={80}>
                        </img>
                        <h2>{name}</h2>
                        <p>{character}</p>
                    </li>
                ))}
            </ul>
        </>
    )
};
    
export default Cast;