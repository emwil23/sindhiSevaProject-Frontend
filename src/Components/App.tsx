import './App.css';
import React, { FC } from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom';
import HomeComponent from './pages/homePage';
import NotFoundComponent from './pages/notfoundPage';

const App: FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomeComponent/>
    },
    {
      path: '*',
      element: <NotFoundComponent />
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