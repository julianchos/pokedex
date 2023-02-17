import { Suspense, lazy, useEffect } from 'react'
import { useRoutes, useLocation, Navigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

// layouts
import Layout from 'main/layouts'

// ----------------------------------------------------------------------
const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={<CircularProgress color="secondary" />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {

  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Navigate to="/list" replace />},
        { path: '/list', element: (<PokemonListPage />) }
      ]
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/pokemon/:id', element: (({id})=><PokemonDetailPage id={id}/>) },
      ]
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/compare/:id', element: (<PokemonComparePage />) },
      ]
    },
  ]);
}

// IMPORT COMPONENTS

const PokemonListPage = Loadable(lazy(() => import('features/PokemonList/presenter/pages/PokemonListPage')))
const PokemonDetailPage = Loadable(lazy(() => import('features/PokemonDetail/presenter/pages/PokemonDetailPage')))
const PokemonComparePage = Loadable(lazy(() => import('features/PokemonCompare/presenter/pages/PokemonComparePage')))