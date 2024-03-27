import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BookCard = ({ bookData }) => {
  const { name, author, image, rating, category, id} = bookData;
  return (
    <Link to={`/bookdetails/${id}`}>
      <div className="card w-96 bg-base-100 border border-[#13131326] hover:bg-gray-100">
        <div className="p-12">
          <img src={image} className="rounded-xl mx-auto" />
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
    </Link>
  );
};
BookCard.propTypes = {
  bookData: PropTypes.object,
};
export default BookCard;
