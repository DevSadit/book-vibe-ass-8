import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const bookData = books.find((book) => book.id === intId);
  const {
    tags,
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
    <div className="flex items-center justify-between lg:mx-32 lg:mt-12 ">
      <div className=" bg-gray-200  p-16 rounded-lg">
        <img src={image} className="md:w-80 mx-auto" />
      </div>
      <div className="md:space-y-6">
        <h1 className="font-bold text-4xl">{name}</h1>
        <p className="font-medium text-xl">By: {author}</p>
        <hr />
        <h5 className="font-medium text-xl">{category}</h5>
        <hr />
        <p>
          <strong>Review:</strong>
          <span className="text-[#131313B2]">{review}</span>
        </p>
        <div className="flex gap-x-4 items-center">
          <p className="font-bold">Tag</p>
          <div className="flex gap-x-4">
            {tags.map((tag, i) => (
              <h5
                className="text-[#23BE0A] font-medium bg-[#23BE0D0D] rounded-full px-4 py-2"
                key={i}
              >
                {tag}
              </h5>
            ))}
          </div>
        </div>
        <hr />
        <div className="md:space-y-3">
          <div className="flex justify-between">
            <p className="font-bold">Number of Pages:</p>
            <p>{totalPages}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Publisher:</p>
            <p>{publisher}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Year of Publishing:</p>
            <p>{yearOfPublishing}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Rating:</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="space-x-4">
          <button
            onClick={handleRead}
            className="btn bg-none border border-gray-300"
          >
            Read
          </button>

          <button onClick={handleWish} className="btn bg-[#50B1C9] text-white">
            Wishlist
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BookDetails;
