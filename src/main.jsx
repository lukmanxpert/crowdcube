import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-toastify/dist/ReactToastify.css';

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
import PrivateRoute from './providers/PrivateRoute';
import DetailsPage from './Pages/DetailsPage';

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
        loader: () => fetch('http://localhost:5000/campaigns'),
        element: <AllCampaign></AllCampaign>
      },
      {
        path: '/add-campaign',
        element: <PrivateRoute>
          <AddCampaign></AddCampaign>
        </PrivateRoute>
      },
      {
        path: '/my-campaign',
        element: <PrivateRoute>
          <MyCampaign></MyCampaign>
        </PrivateRoute>
      },
      {
        path: '/my-donation',
        element: <PrivateRoute>
          <MyDonation></MyDonation>
        </PrivateRoute>
      },
      {
        path: '/campaigns/:id',
        element: <PrivateRoute>
          <DetailsPage></DetailsPage>
        </PrivateRoute>
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
