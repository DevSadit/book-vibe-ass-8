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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`/bookdata.json`),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            loader: () => fetch(`/bookdata.json`),
            element: <ListedBooksCard></ListedBooksCard>,
          },
          {
            path: "wishlist",
            loader: () => fetch(`/bookdata.json`),
            element: <WishlistedbookCard></WishlistedbookCard>,
          },
        ],
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`/bookdata.json`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
