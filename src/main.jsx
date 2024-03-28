import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root/Root'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedBooks from './ListedBooks/ListedBooks';
import PagesToRead from './PagesToRead/PagesToRead';
import Home from './Home/Home';
import BookDetails from './Books/BookDetails';
import ListedBooksCard from './ListedBooks/ListedBooksCard';
import WishlistedbookCard from './ListedBooks/WishlistedbookCard';
import ErrorElement from './ErrorElement';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './Contact/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`/bookdata.json`),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
          {
            index: true,
            element: <ListedBooksCard></ListedBooksCard>,
            errorElement: <ErrorElement></ErrorElement>,
          },
          {
            path: "wishlist",
            element: <WishlistedbookCard></WishlistedbookCard>,
            errorElement: <ErrorElement></ErrorElement>,
          },
        ],
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`/bookdata.json`),
        errorElement: <ErrorElement></ErrorElement>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
