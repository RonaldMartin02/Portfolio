import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

const router = createBrowserRouter(
  [
    { path: '/',
     element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/About',
        element: <About/>,
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
    ],
    },
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);