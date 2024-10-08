import 'bootstrap/dist/css/bootstrap.min.css';

import * as ReactDOMClient from 'react-dom/client';

import { BrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app/app/app';
import { Provider } from 'react-redux';
import React from 'react';
import store from './app/services/store';

// import store from './app/services/store';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
