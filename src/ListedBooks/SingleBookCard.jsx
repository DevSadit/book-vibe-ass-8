import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { MdMenuBook } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SingleBookCard = ({ book }) => {
  const {
    id,
    tags, 
    author,
    name,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    image,
    rating,
  } = book;
  return (
    <div className="flex justify-between border rounded-lg p-3 mx-32 mb-4">
      <div className="">
        <img className="bg-gray-200 mx-auto w-56 rounded-lg p-10" src={image} />
      </div>
      <div className="flex-1 px-10 md:space-y-4">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-medium ">By: {author}</p>
        <div className="flex space-x-10">
          <div className="flex gap-x-4 items-center">
            <p className="font-bold">Tags:</p>
            <div className="flex gap-x-3">
              {tags.map((tag, i) => (
                <h5
                  className="text-[#23BE0A] rounded-full font-medium px-3 py-2 bg-[#23BE0A0D]"
                  key={i}
                >
                  {tag}
                </h5>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-x-3 items-center">
              <IoLocationOutline />
              <p>Year of Publishing: {yearOfPublishing}</p>
            </div>
          </div>
        </div>

        <div className="flex  gap-x-5">
          <div className="flex items-center gap-x-1 text-[#13131399]">
            <CiUser></CiUser>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex gap-x-1 items-center text-[#13131399]">
            <MdMenuBook></MdMenuBook>
            <p>{totalPages}</p>
          </div>
        </div>
        <hr />
        <div className="flex gap-x-5 items-center">
          <h5 className="text-[#328EFF] px-3 py-2 bg-[#328EFF26] rounded-full">
            Category: {category}
          </h5>
          <h5 className="text-[#FFAC33] px-3 py-2 bg-[#FFAC3326] rounded-full">
            Rating: {rating}
          </h5>
          <Link to={`/bookdetails/${id}`}>
            <button className="cursor-pointer px-3 py-2 text-white bg-[#23BE0A] rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SingleBookCard.propTypes={
  book: PropTypes.object,
}

export default SingleBookCard;
