import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadBooks } from "../Utility/LsRead";
import { saveWishBooks } from "../Utility/LsWishlist";

const BookDetails = () => {
  const handleRead = () => {
    saveReadBooks(intId);
    toast(`Book Added to Read Books List`);
  };

  const handleWish = () => {
    saveWishBooks(intId);
    toast(`Book Added to Wishlist`);
  };

  const books = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const book = books.find((book) => book.id === intId);
  const {
    name,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex items-center justify-between lg:mx-32 lg:mt-12">
      <div className="border bg-gray-200  p-10 rounded-lg">
        <img src={image} className="w-96 mx-auto" />
      </div>
      <div className="border">
        <h1>{name}</h1>
        <p>By: {author}</p>
        <hr />
        <h5>{category}</h5>
        <hr />
        <p>
          <bold>Review:</bold>
          {review}
        </p>
        <div>
          <p>Tag</p>
        </div>
        <hr />
        <div>
          <div>
            <p>Number of Pages:</p>
            <p>{totalPages}</p>
          </div>
          <div>
            <p>Publisher:</p>
            <p>{publisher}</p>
          </div>
          <div>
            <p>Year of Publishing:</p>
            <p>{yearOfPublishing}</p>
          </div>
          <div>
            <p>Rating:</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="space-x-4">
          <button onClick={handleRead} className="btn btn-primary">
            Read
          </button>

            <button onClick={handleWish} className="btn btn-primary">
              Wishlist
            </button>

        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BookDetails;
