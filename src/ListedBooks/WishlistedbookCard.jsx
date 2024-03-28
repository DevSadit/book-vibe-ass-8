import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishBooks } from "../Utility/LsWishlist";

const WishlistedbookCard = () => {
    const books = useLoaderData();
    const [wishBooks, setWishBooks] = useState([]);
    useEffect(()=>{
        const storeWishBooksIds = getWishBooks();
        if(books.length){
            const bookWish =[];
            

        }
    },[])
    return (
      <div>
        <h1>ami wishlist</h1>
      </div>
    );
};

export default WishlistedbookCard;