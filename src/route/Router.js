import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookingPage from '../pages/BookingPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import InfoPage from '../pages/InfoPage';
import MyOrderPage from '../pages/MyOrderPage';
import PricingPage from '../pages/PricingPage';
import QueuePage from '../pages/QueuePage';
import ProtectedRoute from '../utils/ProtectedRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/info',
    element: <InfoPage />,
  },
  {
    path: '/pricing',
    element: <PricingPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/test',
    element: <h1>Test</h1>
  },
  {
    path: '/queue',
    element: <QueuePage />
  }
  ,
  {
    path: '/booking',
    element: <ProtectedRoute><BookingPage /></ProtectedRoute>
  },
  {
    path: '/myorder',
    element: <ProtectedRoute><MyOrderPage /></ProtectedRoute>
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

  
  export default function Router() {
    return <RouterProvider router={router} />;
  }
  