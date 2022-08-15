import './Components/App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';
import { persistor, store } from './Components/app/store';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingService from './services/loadingService';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingService />} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

