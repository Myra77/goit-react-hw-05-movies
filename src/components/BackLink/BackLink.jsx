import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';

import css from './BackLink.module.css';

const BackLink = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

    return (
        <button className={css['BtnBack']}>
            <Link to={backLinkLocationRef.current}>Go back</Link>
        </button>
    );
};

export default BackLink;