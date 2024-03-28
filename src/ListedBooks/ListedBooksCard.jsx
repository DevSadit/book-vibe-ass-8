import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { MdMenuBook } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReadBooks } from "../Utility/LsRead";
import PropTypes from "prop-types";

const ListedBooksCard = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const storeReadBooksIds = getReadBooks();
    if (books.length) {
      const booksRead = [];
      for (const id of storeReadBooksIds) {
        const book = books.find((book) => book.id == id);
        if (book) {
          booksRead.push(book);
        }
      }

      setReadBooks(booksRead);
    }
  }, []);

  return readBooks.map((book) => <Item readBooks={book} key={book.id}></Item>);
};


const Item = ({readBooks}) => {
  const {
    category,
    rating,
    publisher,
    yearOfPublishing,
    totalPages,
    image,
    name,
    author,
  } = readBooks;
  return (
    <div className="flex justify-between border rounded-lg p-3 mx-32 mb-4">
      <div className="">
        <img className="bg-gray-200 mx-auto w-56 rounded-lg p-10" src={image} />
      </div>
      <div className="flex-1 px-10">
        <h1>{name}</h1>
        <p>By: {author}</p>
        <div className="flex justify-between">
          <div className="flex gap-x-3 items-center">
            <IoLocationOutline />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>

        <div className="flex  gap-x-5">
          <div className="flex items-center gap-x-1">
            <CiUser></CiUser>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <MdMenuBook></MdMenuBook>
            <p>{totalPages}</p>
          </div>
        </div>

        <div className="flex gap-x-5 items-center">
          <h5>Category: {category}</h5>
          <h5>Rating: {rating}</h5>
          <button className="btn">View Details</button>
        </div>
      </div>
    </div>
  );
};
Item.propTypes = {
  readBooks: PropTypes.object,
};
export default ListedBooksCard;
