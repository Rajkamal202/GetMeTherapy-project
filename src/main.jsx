// main.jsx

import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Onboarding1 from './components/Onboarding/Onboarding1.jsx';
import Onboarding2 from './components/Onboarding/Onboarding2.jsx';
import Onboarding3 from './components/Onboarding/Onboarding3.jsx';
import SignInPage from './app/auth/SignInPage.jsx';
import SignUpPage from './app/auth/SignUpPage.jsx';
import TrackingScreen from './components/PostLoginScreen/TrackingScreen.jsx';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  { path: "/", element: <Onboarding1 /> },
  { path: "/onboarding2", element: <Onboarding2 /> },
  { path: "/onboarding3", element: <Onboarding3 /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/tracking", element: <TrackingScreen /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={publishableKey}>
    <RouterProvider router={router} />
  </ClerkProvider>
);


