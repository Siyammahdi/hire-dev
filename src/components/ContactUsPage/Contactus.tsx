import { LinkedIn, Mail, Twitter, WhatsApp } from "../Icon";

const ContactUs = () => {
  return (
    <section className="container flex flex-wrap py-[150px]">
      <div className="w-full lg:w-1/2 pr-4">
        <p className="font-bold text-3xl">Contact </p>

        <p className="text-lg leading-8 pt-5">
          Uttara, Dhaka-1230 <br />
        </p>
        <div className="flex items-center gap-x-3 py-3">
          <Mail /> <p> +880 1234567890</p>
        </div>
        <div className="flex items-center gap-x-3 py-3">
          <WhatsApp /> <p> +880 1234567890</p>
        </div>
        <div className="flex items-center gap-x-3 py-3">
          <LinkedIn /> <p> +880 1234567890</p>
        </div>
        <div className="flex items-center gap-x-3 py-3">
          <Twitter /> <p> +880 1234567890</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 pl-4">
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              className="w-full p-2 focus:outline-0 rounded placeholder:text-[black] border-b-[1px] border-[3F1F1F1]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              className="w-full p-2 focus:outline-0 rounded placeholder:text-[black] border-b-[1px] border-[3F1F1F1]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              name="subject"
              className="w-full p-2 focus:outline-0 rounded placeholder:text-[black] border-b-[1px] border-[3F1F1F1]"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 focus:outline-0 rounded placeholder:text-[black] border-b-[1px] border-[3F1F1F1]"
              required
              placeholder="type message here..."
            />
          </div>
          <div className="text-end">
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-black hover:text-[#585757] rounded hover:bg-[#F4E8E4]"
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
