import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Aaa from './routes/aaa';
import Bbb from './routes/bbb';

const pages = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/aaa',
    element: <Aaa />,
  },
  {
    path: '/bbb',
    element: <Bbb />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={pages} />);
