import { Button } from '@material-tailwind/react'
import React from 'react'
import HomePage from './pages/home/HomePage';
import NoPage from './pages/noPage/NoPage';
import { Layout } from './components/layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductInfo from './pages/productInfo/ProductInfo';
import CartPage from './pages/cart/CartPage';
import AllProduct from './components/allproduct/AllProduct';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddProductPage from './pages/admin/AddProductPage';
import UpdateProductPage from './pages/admin/UpdateProductPage';
import { Toaster } from 'react-hot-toast';
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin';
import { ProtectedRouteForUser } from './protectedRoute/ProtectedRouteForUser';
import CategoryPage from './pages/category/CategoryPage';
// import ScrollTop from './components/scrollTop/ScrollTop';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/category/:categoryname",
        element: <CategoryPage/>,
      },
      {
        path: "/productinfo/:id",
        element: <ProductInfo/>,
      },
      {
        path: "/cart",
        element: <CartPage/>,
      },
      {
        path: "/allproduct",
        element: <AllProduct/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/user-dashboard",
        element: <ProtectedRouteForUser>
        <UserDashboard />
      </ProtectedRouteForUser>,
      },
    ]

  },
  
  {
    path: "/admin-dashboard",
    element: <ProtectedRouteForAdmin>
    <AdminDashboard />
  </ProtectedRouteForAdmin>,
  },
  {
    path: "/addproduct",
    element:  <ProtectedRouteForAdmin>
    <AddProductPage />
  </ProtectedRouteForAdmin>,
  },
  {
    path: "/updateproduct/:id",
    element: <ProtectedRouteForAdmin>
    <UpdateProductPage />
  </ProtectedRouteForAdmin>,
  },
  

])

const App = () => {
  
  return (
    <>
  <RouterProvider router={router}>
    
     </RouterProvider>
     <Toaster position="top-right" reverseOrder={false} />
  </>
  );
    

}

export default App
