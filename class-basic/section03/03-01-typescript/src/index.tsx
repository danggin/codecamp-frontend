import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Aaa from './routes/aaa';
import Bbb from './routes/bbb';
import Board from './routes/board1';
import BoardRefactoring from './routes/board2-refactoring';

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
  {
    path: '/board1',
    element: <Board />,
  },

  {
    path: '/board2',
    element: <BoardRefactoring />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as ReactDOM.Container);
root.render(<RouterProvider router={pages} />);
