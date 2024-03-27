import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getReadBooks } from "../Utility/LsRead";
import ListedBooksCard from "./ListedBooksCard";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const storeReadBooksIds = getReadBooks();
    if (books.length > 0) {
      const booksRead = [];
      for (const id of storeReadBooksIds) {
        const book = books.find((book) => book.id === id);
        if (book) {
          booksRead.push(book);
        }
      }

      setReadBooks(booksRead);
      // console.log(books, storeReadBooksIds, booksRead);
    }
  }, []);
  return (
    <div>
      <div className="text-center mt-9 bg-gray-100 rounded-2xl mx-32">
        <h1 className="font-bold text-3xl py-9">Books</h1>
      </div>
      <div></div>

      <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap   text-black dark:text-gray-800 mx-32 mt-3">
        <Link
          // to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : ""
          } rounded-t-lg border-gray-400 dark:border-gray-600 text-black dark:text-gray-900`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          // to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : ""
          } rounded-t-lg border-gray-400 dark:border-gray-600 text-black dark:text-gray-900`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      <hr className="mx-32 mt-3" />

      <div className="mt-8">
        {readBooks.map((bookCart) => (
          <ListedBooksCard
            key={bookCart.id}
            bookCart={bookCart}
          ></ListedBooksCard>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
