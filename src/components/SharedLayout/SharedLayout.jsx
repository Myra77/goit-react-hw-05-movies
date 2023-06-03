import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';

const SharedLayout = () => {
    return (
        <div>
            <ul className={css['Header']}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
            </ul>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
                </Suspense>
            </main>
        </div>
    );
};

export default SharedLayout;