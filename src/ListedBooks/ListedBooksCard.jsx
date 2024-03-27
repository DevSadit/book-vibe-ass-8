import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { MdMenuBook } from "react-icons/md";

const ListedBooksCard = ({ bookCart }) => {
const {
  category,
  rating,
  tags,
  publisher,
  yearOfPublishing,
  totalPages,
} = bookCart;
  return (
    <div className="flex justify-between border rounded-lg p-3 mx-32 mb-4">
      <div className="">
        <img
          className="bg-gray-200 mx-auto w-56 rounded-lg p-10"
          src={bookCart.image}
        />
      </div>
      <div className="flex-1 px-10">
        <h1>{bookCart.name}</h1>
        <p>By: {bookCart.author}</p>
        <div className="flex justify-between">
          <div className="flex gap-x-5 ">
            {tags.map((tag, i) => (
              <p key={i}>{tag}</p>
            ))}
          </div>
          <div className="flex gap-x-3 items-center">
            <IoLocationOutline />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>

        <div className="flex  gap-x-5">
          <div className="flex items-center gap-x-1">
            <CiUser></CiUser>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <MdMenuBook></MdMenuBook>
            <p>{totalPages}</p>
          </div>
        </div>

        <div className="flex gap-x-5 items-center">
          <h5>Category: {category}</h5>
          <h5>Rating: {rating}</h5>
            <button className="btn">View Details</button>
        </div>
      </div>
    </div>
  );
};


ListedBooksCard.propTypes = {
  bookCart: PropTypes.object,
};
export default ListedBooksCard;
