import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Layout from './components/Layout'
import NewClient from './pages/NewClient'
import Index from './pages/Index'
import { loader as clientLoader, action as clientAction } from './helpers'
import ErrorPage from './components/ErrorPage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/client/new',
        element: <NewClient />,
        action: clientAction
      },

    ]
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
