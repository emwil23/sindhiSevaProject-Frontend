import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom';
import HomeComponent from './pages/homePage';
import HeaderComponent from './website/header';
import FooterComponent from './website/footer';
import { Spin } from 'antd';
const NotFoundComponent = React.lazy(() => import('./pages/notfoundPage'));
const RegisterComponent = React.lazy(() => import('./pages/registerPage'));
const LoginComponent = React.lazy(() => import('./pages/loginPage'));


const App: FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomeComponent/>
    },
    {
      path: '*',
      element: <React.Suspense fallback={<Spin />}><NotFoundComponent /></React.Suspense> 
    },
    {
      path: '/auth/*',
      children: [
        {
          path: 'register',
          element: <React.Suspense fallback={<Spin />}><RegisterComponent /></React.Suspense> 
        },
        {
          path: 'login',
          element: <React.Suspense fallback={<Spin />}><LoginComponent /></React.Suspense> 
        },
        {
          path: '*',
          element:<React.Suspense fallback={<Spin />}><NotFoundComponent /></React.Suspense> 
        }
      ]
    }
  ])

  return (
    <React.Fragment>
      <HeaderComponent />
      {routes}
      {/* <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='*' element={<NotFoundComponent />} />
      </Routes> */}
      <FooterComponent />
    </React.Fragment>
  )
}

export default App