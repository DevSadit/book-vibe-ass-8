
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
    <div className="flex flex-col ">
      <details className="dropdown self-end mx-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
      <div>
        {readBooks.map((book, i) => (
          <SingleBookCard key={i} book={book}></SingleBookCard>
        ))}
      </div>
    </div>
  );
};

export default ListedBooksCard;
