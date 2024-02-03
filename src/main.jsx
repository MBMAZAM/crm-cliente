import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Layout from './components/Layout'
import NewClient from './pages/NewClient'
import Index from './pages/Index'
import { loader as clientLoader, action as clientAction, loaderUpd, actionUpd, actionDel } from './helpers/Index'
import ErrorPage from './components/ErrorPage'
import EditarClient from './pages/EditarClient'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/client/new',
        element: <NewClient />,
        action: clientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/client/:clientId/editar',
        element: <EditarClient />,
        loader: loaderUpd,
        action: actionUpd,
        errorElement: <ErrorPage />
      },
      {
        path: '/client/:clientId/eliminar',
        element: <h1>Detalle del cliente</h1>,

        action: actionDel,
        errorElement: <ErrorPage />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
