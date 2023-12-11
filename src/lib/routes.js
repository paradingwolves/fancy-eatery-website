import { createBrowserRouter, useParams } from "react-router-dom";
import React from "react";

import Layout from "../components/layout";
import Home from "../components/home/Home";
import Menu from "../components/menu/Menu";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import BookReservation from "../components/reservations/BookReservation";
import NotFound from "../components/error404/NotFound";

export const ROOT = "/";
export const HOME = "/home";
export const MENU = "/menu";
export const ABOUT = "/about";
export const RESERVE = "/book_reservation";
export const CONTACT = "/contact";




export const router = createBrowserRouter([
    { 
      path: ROOT,
      element: <Layout />,
      children: [ 
        {
          path: HOME,
          element: <Home />
        },
        {
          path: MENU,
          element: <Menu />
        },
        {
          path: ABOUT,
          element: <About />
        },
        {
          path: CONTACT,
          element: <Contact />
        },
        {
          path: RESERVE,
          element: <BookReservation />
        }
      ]
    },
    { path: "*", element: <NotFound /> }
  ]);
  export default router;