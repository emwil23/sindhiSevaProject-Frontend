import 'react-phone-number-input/style.css';
import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom';
import HomeComponent from './pages/homePage';
import HeaderComponent from './website/header';
import FooterComponent from './website/footer';
import LoadingService from '../services/loadingService';
import ProtectedRoute from '../services/protectedRoute';
const NotFoundComponent = React.lazy(() => import('./pages/notfoundPage'));
const RegisterComponent = React.lazy(() => import("./pages/registerPage"));
const LoginComponent = React.lazy(() => import('./pages/loginPage'));
const AboutUsComponent = React.lazy(() => import('./pages/aboutPage'));
const ContactUsComponent = React.lazy(() => import('./pages/contactUsPage'));
const DirectoriesComponent = React.lazy(() => import("./pages/DirectoriesPage"));
const ProfileComponent = React.lazy(() => import('./pages/porfilePage'));
const Association = React.lazy(() => import('./pages/associations'));
const AdvertismentComponent = React.lazy(() => import('./pages/advertismentPage'));


const App: FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomeComponent />
    },
    {
      path: '/aboutUs',
      element: <React.Suspense fallback={<LoadingService />}><AboutUsComponent /></React.Suspense>
    },
    {
      path: '/contactUs',
      element: <React.Suspense fallback={<LoadingService />}><ContactUsComponent /></React.Suspense>
    },
    {
      path: '/directories',
      element: <ProtectedRoute><React.Suspense fallback={<LoadingService />}><DirectoriesComponent /></React.Suspense></ProtectedRoute>
    },
    {
      path: '/profile/*',
      children: [
        {
          path: '',
          element: <ProtectedRoute><React.Suspense fallback={<LoadingService />}><ProfileComponent /></React.Suspense></ProtectedRoute>
        },
        {
          path: 'ads',
          element: <ProtectedRoute><React.Suspense fallback={<LoadingService />}><AdvertismentComponent /></React.Suspense></ProtectedRoute>
        },
        {
          path: '*',
          element: <React.Suspense fallback={<LoadingService />}><NotFoundComponent /></React.Suspense>
        }
      ]
    },
    {
      path: '/associations',
      element: <React.Suspense fallback={<LoadingService />}><Association /></React.Suspense>
    },
    {
      path: '*',
      element: <React.Suspense fallback={<LoadingService />}><NotFoundComponent /></React.Suspense>
    },
    {
      path: '/auth/*',
      children: [
        {
          path: 'register',
          element: <React.Suspense fallback={<LoadingService />}><RegisterComponent /></React.Suspense>
        },
        {
          path: 'login',
          element: <React.Suspense fallback={<LoadingService />}><LoginComponent /></React.Suspense>
        },
        {
          path: '*',
          element: <React.Suspense fallback={<LoadingService />}><NotFoundComponent /></React.Suspense>
        }
      ]
    }
  ])

  return (
    <React.Fragment>
      <HeaderComponent />
      <div className='main-body'>
        {routes}
      </div>
      <FooterComponent />
    </React.Fragment>
  )
}

export default App