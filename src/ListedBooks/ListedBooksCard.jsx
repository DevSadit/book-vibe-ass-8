
import { useEffect, useState } from "react";
import BookCard from "../Books/BookCard";
import SingleBookCard from "./SingleBookCard";

const ListedBooksCard = () => {

  const [readBooks, setReadBooks] = useState([]);
  useEffect(()=>{
        const storedReadBooks =
          JSON.parse(localStorage.getItem("books_read")) || [];
          setReadBooks(storedReadBooks)
  }, []);
  console.log(readBooks);

  return (
    <div>
      {
        readBooks.map((book, i)=> <SingleBookCard 
        key={i}
        book={book}
        ></SingleBookCard> )
      }
    </div>

  );
};

export default ListedBooksCard;
