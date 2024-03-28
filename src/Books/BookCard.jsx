import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BookCard = ({ bookData }) => {
  const { name, tags, author, image, rating, category, id} = bookData;
  return (
    <Link to={`/bookdetails/${id}`}>
      <div className="card bg-base-100 border border-[#13131326] hover:bg-gray-100 px-14 py-4 md:h-[500px]">
        <div className="p-6">
          <img src={image} className="rounded-xl mx-auto w-32 h-52" />
        </div>

        <div className="md:space-y-4">
          <div className="flex gap-x-4">
            {tags.map((tag, i) => (
              <h4
                key={i}
                className="text-[#23BE0A] font-medium bg-[#23BE0D0D] rounded-full px-4 py-2"
              >
                {tag}
              </h4>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="font-medium">By: {author}</p>
          <hr className="border-dashed h-[1px] bg-[#13131326]" />
          <div className="flex gap-x-3 justify-between">
            <p className="font-medium">{category}</p>
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
