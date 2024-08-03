import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './features/Pages/Error/ErrorPage';
import HomePage from './features/Pages/Home/HomePage';

import AddBuy from './features/Pages/AddBuy/AddBuy';
import Auth from './features/Pages/Register/AuthFirebase';
import Products from './features/Pages/Products/Products';

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
        path: "/product",
        element: <Products />,
      },
      {
        path: "/cuenta",
        element: <Auth />,
      },
      {
        path: "carrito",
        element: <AddBuy/>
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
