
import { useEffect, useState } from "react";
import SingleBookCard from "./SingleBookCard";

const ListedBooksCard = () => {

  const [readBooks, setReadBooks] = useState([]);
  useEffect(()=>{
        const storedReadBooks =
          JSON.parse(localStorage.getItem("books_read")) || [];
          setReadBooks(storedReadBooks)
  }, []);
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
