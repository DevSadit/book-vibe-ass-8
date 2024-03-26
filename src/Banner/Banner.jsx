const Banner = () => {
  return (
    <div className="bg-base-200 lg:mx-32 rounded-lg lg:mt-24">
      <div className="flex justify-evenly items-center p-12">
        <div>
          <h1 className="text-6xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-primary mt-12">View The List</button>
        </div>
        <img src="bannerbook.png" className="max-w-sm rounded-lg" />
      </div>
    </div>
  );
};

export default Banner;
