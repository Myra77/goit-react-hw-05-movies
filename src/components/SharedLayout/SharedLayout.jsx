import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import {Header} from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <div>
            <Header>
            <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
            </Header>
                
            
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
                </Suspense>
            </main>
        </div>
    );
};

export default SharedLayout;