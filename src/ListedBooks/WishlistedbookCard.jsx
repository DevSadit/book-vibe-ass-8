import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const WishlistedbookCard = () => {
    const books = useLoaderData();
    const [wishBooks, setWishBooks] = useState([]);
    
    return (
      <div>
        <h1>ami wishlist</h1>
      </div>
    );
};

export default WishlistedbookCard;