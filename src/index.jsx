import React from 'react';

import './styles/style.css';

import HomePage from './pages/HomePage';
import NoteDetailPage from './pages/NoteDetailPage';
import NotFoundPage from './pages/NotFoundPage';



import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";


import ReactDOM from "react-dom/client";
import HomePageUnArchice from './pages/HomePageUnarchive';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />,
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
    <RouterProvider router={router} />
);
