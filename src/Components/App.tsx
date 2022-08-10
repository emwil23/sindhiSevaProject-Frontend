import './App.css';
import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom';
import HomeComponent from './pages/homePage';
import NotFoundComponent from './pages/notfoundPage';
import RegisterComponent from './pages/registerPage';
import LoginComponent from './pages/loginPage';

const App: FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomeComponent/>
    },
    {
      path: '*',
      element: <NotFoundComponent />
    },
    {
      path: '/auth/*',
      children: [
        {
          path: 'register',
          element: <RegisterComponent />
        },
        {
          path: 'login',
          element: <LoginComponent />
        },
        {
          path: '*',
          element: <NotFoundComponent />
        }
      ]
    }
  ])

  return (
    <React.Fragment>
      {routes}
      {/* <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='*' element={<NotFoundComponent />} />
      </Routes> */}
    </React.Fragment>
  )
}

export default App