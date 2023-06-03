import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Button } from './BackLink.styled'; 

const BackLink = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

    return (
        <Button>
            <Link to={backLinkLocationRef.current}>Go back</Link>
        </Button>
            
        
    );
};

export default BackLink;