import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import(`./SharedLayout/SharedLayout`));
const Home = lazy(() => import(`../pages/Home`));
const Movies = lazy(() => import(`../pages/Movies`));
const MovieDetails = lazy(() => import(`../pages/MovieDetails`));
const Cast = lazy(() => import(`./Cast/Cast`));
const Reviews = lazy(() => import(`./Reviews/Reviews`));
// const NotFound = lazy(() => import(`../pages/NotFound`));

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
    </>
  );
};