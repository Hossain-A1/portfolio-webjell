import SectionTitle from "./SectionTitle";

const Contact = () => {
  const sendMessage = (e) => {
    e.preventDefault();
    // email js integration

    // Reset
    e.target.querySelector(".fullName").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact container mx-auto mt-32">
      <SectionTitle title={"Contact"} />
      <form onSubmit={sendMessage} className="mt-32 grid grid-cols-2 gap-10 ">
        <div className="control-from overflow-hidden w-full">
          <input
            text="text"
            placeholder="Write your name"
            name="Fullname"
            required
            className=" fullName bg-transparent border py-8 px-16 rounded-full border-gray-50/20 hover:border-teal-400 duration-300 outline-none w-full"
          />
        </div>
        <div className="control-from overflow-hidden">
          <input
            text="email"
            placeholder="Write your email"
            name="Fullname"
            required
            className=" email
            bg-transparent border py-8 px-16 rounded-full border-gray-50/20 hover:border-teal-400 duration-300 outline-none w-full"
          />
        </div>
        <div className="control-from overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className=" message bg-transparent border py-8 px-16 rounded-full border-gray-50/20 hover:border-teal-400 duration-300 outline-none resize-none w-full"
          />
        </div>
        <div className="control-from overflow-hidden">
          <input
            type="submit"
            value=" send  message"
            className=" uppercase bg-transparent border py-8 px-16 rounded-full border-gray-50/20 hover:border-teal-400 duration-300 outline-none resize-none w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
