const ContactUs = () => {
  return (
    <section className="container flex flex-wrap items-center py-10">
      <div className="w-full lg:w-1/2 pr-4">
        <p className="text-5xl  font-bold">Contact </p>

        <p className="text-lg leading-8 pt-5">
          Uttara, Dhaka-1230 <br />
          +880 1234567890
        </p>
      </div>

      <div className="w-full lg:w-1/2 pl-4">
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-gray-800"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-gray-800"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block mb-2 font-bold text-gray-800"
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-gray-800"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
