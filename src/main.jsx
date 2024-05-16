import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Root from './FixedLayouts/Root'
import Favorites from './pages/Favourites/Favorites'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Phone from './pages/Phone/Phone'

/* creating router to route through website */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../phones.json'),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>
      }, 
      {
        path: "/login", 
        element: <Login></Login>
      },
      {
        path: "/phones/:id",
        element: <Phone></Phone>,
        loader: ()=> fetch('/phones.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
