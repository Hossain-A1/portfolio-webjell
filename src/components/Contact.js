import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import {useContactAnimation} from '../hooks/Gsap'

const Contact = () => {
  const contactRef1 = useRef(null)
  const contactRef2 = useRef(null)
  const contactRef3 = useRef(null)
  const contactRef4 = useRef(null)

  const contactArr = [contactRef1, contactRef2,contactRef3,contactRef4]

  useContactAnimation(contactArr, 2)

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
        <div className="control-from overflow-hidden w-full"  ref={contactRef1}>
          <input
            text="text"
            placeholder="Write your name"
            name="Fullname"
            required
            className=" fullName bg-transparent border py-8 px-16 rounded-full border-gray-50/20 hover:border-teal-400 duration-300 outline-none w-full"
          />
        </div>
        <div className="control-from overflow-hidden" ref={contactRef2}>
          <input
            text="email"
            placeholder="Write your email"
            name="Fullname"
            required
            className=" email
            bg-transparent border py-8 px-16 rounded-full border-gray-50/20 hover:border-teal-400 duration-300 outline-none w-full"
          />
        </div>
        <div className="control-from overflow-hidden" ref={contactRef3}>
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className=" message bg-transparent border py-8 px-16 rounded-full border-gray-50/20 hover:border-teal-400 duration-300 outline-none resize-none w-full"
          />
        </div>
        <div className="control-from overflow-hidden" ref={contactRef4}>
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
