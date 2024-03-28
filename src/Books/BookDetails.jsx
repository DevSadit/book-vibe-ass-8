import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const bookData = books.find((book) => book.id === intId);
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
  } = bookData;

  const handleRead = () => {
    const storedReadBooks =
      JSON.parse(localStorage.getItem("books_read")) || [];
    const isBooks = storedReadBooks.find(book => book.id === intId);
    if(isBooks){
      toast.warn(`Book is Already Read!`)
    } else {
      storedReadBooks.push(bookData);
      localStorage.setItem(`books_read`, JSON.stringify(storedReadBooks))
      toast.success(`Book succesfully added!`)
    }
  };

  const handleWish = () => {
    const storedReadBooks = JSON.parse(localStorage.getItem("books_read")) || [];
  const storedWishlistBooks = JSON.parse(localStorage.getItem("books_wish")) || [];
      const isBook = storedReadBooks.find(book => book.id === intId);
      if(isBook){
        toast(`Book is Already Added to Read List!`);
      } else{
        const isWishBooks = storedWishlistBooks.find(book => book.id === intId)
        if(isWishBooks){
          toast.warn(`Book already Added to Readlist`);

        } else {
          storedWishlistBooks.push(bookData);
          localStorage.setItem(`books_wish`, JSON.stringify(storedWishlistBooks));
          toast.success(`book succesfully added to wishlist!`)
        }
      }
  };

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
