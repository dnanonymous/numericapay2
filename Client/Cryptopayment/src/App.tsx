// src/App.tsx
import React from 'react';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import { checkAuthLoader } from './utils/loaders';
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardHome from './pages/DashboardHome';
import ApiKeys from './pages/ApiKeys';
import Stats from './pages/Stats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        loader: () => redirect('/login'),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: checkAuthLoader,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: 'keys',
            element: <ApiKeys />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          // Si más adelante necesitas otras secciones:
          // { path: 'settings', element: <Settings /> },
          // { path: 'logs', element: <Logs /> },
        ],
      },
    ],
  },
  // Ruta catch-all para 404
  {
    path: '*',
    element: <div className="p-4 text-center">404 – Página no encontrada</div>,
  },
]);

export default function App(): React.ReactNode {
  return <RouterProvider router={router} />;
}
