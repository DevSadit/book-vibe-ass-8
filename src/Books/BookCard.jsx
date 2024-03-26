import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";
const BookCard = ({ bookData }) => {
  const { name, author, image, rating, category,} = bookData;
  return (
    <div
      className="card w-96 bg-base-100 border border-[#13131326]"
    >
      <div className="p-12">
        <img src={image} className="rounded-xl" />
      </div>

      <div>
        <h2 className="card-title">{name}</h2>
        <p>By: {author}</p>
        <hr />
        <div className="flex justify-between">
          <p>{category}</p>
          <div className="flex items-center gap-x-2">
            <p>{rating}</p>
            <CiStar />
          </div>
        </div>
      </div>
    </div>
  );
};
BookCard.propTypes = {
  bookData: PropTypes.object,
};
export default BookCard;
