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
      <div>
        {
          wishBooks.map((book, i)=>
          <SingleWishBook 
          key={i} 
          book={book}></SingleWishBook>)
        }
          
      </div>
    );
};

export default WishlistedbookCard;