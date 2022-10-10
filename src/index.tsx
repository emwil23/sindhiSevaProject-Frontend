import './Components/App.scss';
import "react-multi-carousel/lib/styles.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
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
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

