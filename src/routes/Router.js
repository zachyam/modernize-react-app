import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Roof = Loadable(lazy(() => import('../views/quotes/Roof')))
const Kitchen = Loadable(lazy(() => import('../views/quotes/Kitchen')))
const MasterBathroom = Loadable(lazy(() => import('../views/quotes/MasterBathroom')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/pipeline/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/pipeline/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
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
      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/pipeline/typography', exact: true, element: <TypographyPage /> },
      { path: '/pipeline/shadow', exact: true, element: <Shadow /> },
      { path: '/pipeline/approved', exact: true, element: <Approved /> },
      { path: '/pipeline/scheduled', exact: true, element: <Scheduled /> },
      { path: '/pipeline/completed', exact: true, element: <Completed /> },
      { path: '/pipeline/summary', exact: true, element: <Summary /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
