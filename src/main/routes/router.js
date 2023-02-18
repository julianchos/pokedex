import { Suspense, lazy, useEffect } from 'react'
import { useRoutes, useLocation, Navigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import {
  Grid
} from '@mui/material'
// layouts
import Layout from 'main/layouts'

// ----------------------------------------------------------------------
const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <Grid container sx={{width: '100%'}} justifyContent="center" spacing={4} marginBottom={3} marginTop={1}>
          <Grid item alignItems="center">
            <CircularProgress color="secondary" />
          </Grid>
          <Grid item alignItems="center">
            <span>Cargando...</span>
          </Grid>
        </Grid>
      }
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
        { path: '/pokemon/:id', element: (<PokemonDetailPage />) },
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