import { useEffect, useState } from "react";

import SingleWishBook from "./SingleWishBook";

const WishlistedbookCard = () => {
    const [wishBooks, setWishBooks] = useState([]);
    useEffect(()=>{
      const storedWishBooks =
        JSON.parse(localStorage.getItem("books_wish")) || [];
        setWishBooks(storedWishBooks);
    },[])
    return (
      <div className="flex flex-col">
        <details className="dropdown self-end mx-32 ">
          <summary className="m-1 btn bg-[#23BE0A] text-white">Sort</summary>
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
          {wishBooks.map((book, i) => (
            <SingleWishBook key={i} book={book}></SingleWishBook>
          ))}
        </div>
      </div>
    );
};

export default WishlistedbookCard;