import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './Pages/MainPage';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import AuthProvider from './providers/AuthProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AllCampaign from './Pages/AllCampaign';
import AddCampaign from './Pages/AddCampaign';
import MyCampaign from './Pages/MyCampaign';
import MyDonation from './Pages/MyDonation';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/all-campaign',
        element: <AllCampaign></AllCampaign>
      },
      {
        path: '/add-campaign',
        element: <AddCampaign></AddCampaign>
      },
      {
        path: '/my-campaign',
        element: <MyCampaign></MyCampaign>
      },
      {
        path: '/my-donation',
        element: <MyDonation></MyDonation>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
