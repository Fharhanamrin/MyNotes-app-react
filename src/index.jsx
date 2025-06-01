import React from 'react';

import './styles/style.css';

import HomePage from './pages/HomePage';
import NoteDetailPage from './pages/NoteDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import './i18n';


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";


import ReactDOM from "react-dom/client";
import HomePageUnArchice from './pages/HomePageUnarchive';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './components/AuthContext';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/landing-page',
        element: <LandingPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/unarchive',
        element: <HomePageUnArchice />,
    },
    {
        path: '/note-detail-page/:id',
        element: <NoteDetailPage />,
    },
    {
        path: '/note-found-page',
        element: <NotFoundPage />,
    },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
);
