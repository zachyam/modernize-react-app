import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));

/* ****Pages***** */
const Roof = Loadable(lazy(() => import('../views/quotes/Roof')))
const Kitchen = Loadable(lazy(() => import('../views/quotes/Kitchen')))
const MasterBathroom = Loadable(lazy(() => import('../views/quotes/MasterBathroom')))
const MasterBedroom = Loadable(lazy(() => import('../views/quotes/MasterBedroom')))
const LivingRoom = Loadable(lazy(() => import('../views/quotes/LivingRoom')))
const Painting = Loadable(lazy(() => import('../views/quotes/Painting')))
const Pool = Loadable(lazy(() => import('../views/quotes/Pool')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Approved = Loadable(lazy(() => import('../views/pipeline/Approved.js')));
const Scheduled = Loadable(lazy(() => import('../views/pipeline/Scheduled')));
const Completed = Loadable(lazy(() => import('../views/pipeline/Completed')));
const Summary = Loadable(lazy(() => import('../views/pipeline/Summary')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/quotes/roof" /> },
      { path: '/quotes/roof', exact: true, element: <Roof /> },
      { path: '/quotes/kitchen', exact: true, element: <Kitchen /> },
      { path: '/quotes/masterbathroom', exact: true, element: <MasterBathroom /> },
      { path: '/quotes/masterbedroom', exact: true, element: <MasterBedroom /> },
      { path: '/quotes/livingroom', exact: true, element: <LivingRoom /> },
      { path: '/quotes/pool', exact: true, element: <Pool /> },
      { path: '/quotes/painting', exact: true, element: <Painting /> },
      { path: '/pipeline/approved', exact: true, element: <Approved /> },
      { path: '/pipeline/scheduled', exact: true, element: <Scheduled /> },
      { path: '/pipeline/completed', exact: true, element: <Completed /> },
      { path: '/pipeline/summary', exact: true, element: <Summary /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
