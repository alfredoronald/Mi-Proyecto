import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './features/Pages/Error/ErrorPage';
import HomePage from './features/Pages/Home/HomePage';
import Register from './features/Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/inicio",
        element: <HomePage />,
      },
      {
        path: "/cuenta",
        element: <Register />,
      },
      
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
