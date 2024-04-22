import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Confirmation from './pages/Confirmation'

// create routes here in an array with a path of '/', and add children to that "Home" layout component, another array with paths.
const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      { 
        index: true,
        element: <Products />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:productId',
        element: <SingleProduct />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/confirm',
        element: <Confirmation />
      }
    ]
  }
]
// use that route object to create the router
const router = createBrowserRouter(routes)

// use the router object in the RouterProvider component given by React-Router
const App = () => <RouterProvider router={router} />

// export it
export default App
