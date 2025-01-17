import PropTypes from "prop-types";
import BookCard from "./BookCard";
const Books = ({ bookData }) => {
  return (
    <div className="mt-24">
      <div className="text-center text-4xl font-bold">
        <h1>Books</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 container mx-auto mt-24">
        {bookData.map((bookData) => (
          <BookCard bookData={bookData} key={bookData.id}></BookCard>
        ))}
      </div>
    </div>
  );
};
Books.propTypes = {
  bookData: PropTypes.object,
};
export default Books;