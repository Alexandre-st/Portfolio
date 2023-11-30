import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import MentionsLegales from './pages/MentionsLegales';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import "./styles/index.scss";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Homepage />} />
    <Route path="portfolio" element={<Portfolio />} />
    <Route path="portfolio/:work" element={<Project />} />
    <Route path="contact" element={<Contact />} />
    <Route path="mentions-legales" element={<MentionsLegales />} />
    <Route path="*" element={<NotFound />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
);
