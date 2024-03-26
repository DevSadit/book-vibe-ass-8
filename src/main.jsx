import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root/Root'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedBooks from './ListedBooks/ListedBooks';
import PagesToRead from './PagesToRead/PagesToRead';
import Home from './Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
