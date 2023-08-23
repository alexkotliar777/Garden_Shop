import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import CatalogPage from 'pages/CatalogPage/Catalog';
import CartPage from 'pages/CartPage/CartPage';
import SalesPage from 'pages/SalesPage/SalesPage';
import HomePage from 'pages/HomePage/HomePage';
import Loader from 'components/Loader/Loader';
import ErrorVievPage from 'pages/ErrorVievPage/ErrorVievPage';
import AllItemsPage from 'pages/AllItemsPage/AllItemsPage';
import SingleItemPage from 'pages/SingleItemPage/SingleItemPage';
import ItemsFromCategoryPage from 'pages/ItemsFromCategoryPage/ItemsFromCategoryPage';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorVievPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/category',
          element: <CatalogPage />,
        },
        {
          path: '/cart',
          element: <CartPage />,
        },
        {
          path: '/sales',
          element: <SalesPage />,
        },
        {
          path: '/products',
          element: <AllItemsPage />,
        },
        {
          path: '/products/:id',
          element: <SingleItemPage />,
        },
        {
          path: '/category/:id',
          element: <ItemsFromCategoryPage />,
        },
        {
          path: '/*',
          element: <ErrorVievPage />,
        },
      ],
    },
  ],
  { basename: '/gardenshop' }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
