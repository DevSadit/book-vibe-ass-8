const AboutUs = () => {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-100">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg"
          alt=""
          className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-500 dark:bg-gray-50">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              Welcome to Book Vibe. where words come alive and stories unfold.
            </a>
          </div>
          <div className="text-gray-100 dark:text-gray-800">
            <p>
              At Book Vibe, we believe in the power of storytelling to inspire,
              educate, and connect. Whether you're an avid reader seeking your
              next adventure or an aspiring author ready to share your voice
              with the world, you'll find a home here among fellow enthusiasts.
              Our mission is to cultivate a space where literary exploration
              knows no bounds. From timeless classics to contemporary
              bestsellers, we curate a diverse selection of titles to cater to
              every taste and interest. Dive into worlds unknown, traverse
              landscapes both real and imaginary, and embark on journeys that
              will linger in your heart long after the final page is turned. But
              [Your Book Website] is more than just a platform for books—it's a
              vibrant community fueled by a shared love for literature. Join
              discussions, exchange recommendations, and forge connections with
              fellow book lovers from around the globe. Whether you're
              discovering new favorites or revisiting old classics, the joy of
              reading is always amplified when shared with kindred spirits.
              Behind the scenes, our team is comprised of passionate book
              enthusiasts, dedicated to providing you with a seamless and
              enriching experience. From meticulously curating our collection to
              providing personalized recommendations, we are committed to
              helping you find the perfect read for every mood and moment. So,
              whether you're seeking solace in the pages of a beloved novel or
              embarking on a literary adventure unlike any other, [Your Book
              Website] is here to accompany you on your journey through the
              endless realms of imagination. Join us as we celebrate the
              transformative power of storytelling and embark on a quest to
              discover the magic of words together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
