const ContactUs = () => {
  return (
    <section className="p-6 text-gray-100 mt-40">
      <form
        novalidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow-lg "
      >
        <h2 className="w-full text-3xl font-bold leading-tight text-black">
          Contact us
        </h2>
        <div>
          <label for="name" className="block mb-1 ml-1 text-black">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100"
          />
        </div>
        <div>
          <label for="email" className="block mb-1 ml-1 text-black">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100"
          />
        </div>
        <div>
          <label for="message" className="block mb-1 ml-1 text-black">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Message..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#23BE0A] dark:bg-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600 hover:ring-violet-400 hover:dark:ring-violet-600 text-gray-900 dark:text-gray-50"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
