import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-base-200 lg:mx-32 rounded-lg lg:mt-24">
      <div className="flex flex-col md:justify-evenly md:flex-row items-center p-12">
        <div>
          <h1 className="text-6xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <Link to="/listedbooks">
            <button className="btn bg-[#23BE0A] rounded-lg text-white mt-12">
              View The List
            </button>
          </Link>
        </div>
        <div>
          <img src="bannerbook.png" className="max-w-sm rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
