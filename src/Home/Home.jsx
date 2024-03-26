import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    const bookData= useLoaderData();
    return (
      <div>
        <Banner></Banner>
        <Books bookData={bookData}></Books>
      </div>
    );
};

export default Home;