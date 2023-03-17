import { useRef } from "react";
import { UseHoverEfff } from "../hooks/UseHoverEfff";
import SectionTitle from "./SectionTitle";

const data = {
  img1: 'https://res.cloudinary.com/dyaj1dlzu/image/upload/v1678809892/parsonal-protfolio/pexels-photo-3473525_hr0pqi.jpg',
  img2:'https://res.cloudinary.com/dyaj1dlzu/image/upload/v1678809892/parsonal-protfolio/pexels-photo-3370021_r6f03t.jpg'
}

const About = () => {

  const aboutLeftRef = useRef(null)

   UseHoverEfff(aboutLeftRef, data.img1,data.img2)
  return (
    <div className="container mx-auto mt-32" id="about">
      <SectionTitle title={'About'}/>
      <div className="about-wrapper mt-32 grid grid-cols-2 gap-10 overflow-hidden">
        <div className="about-L" ref={aboutLeftRef}></div>
        <div className="about-R ">
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem dolores odio similique blanditiis temporibus sed fuga quas consectetur, quisquam animi vitae reprehenderit esse at velit delectus quos rerum dicta voluptates omnis eius! Voluptate nostrum assumenda est harum quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae reiciendis assumenda eligendi nesciunt quos, explicabo natus exercitationem esse aspernatur, atque fugiat. Nam enim deserunt vitae exercitationem error maxime, amet laudantium! </p>
          <p className="mt-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam. Illo quia, praesentium vel molestiae impedit veniam quibusdam, quos eius nostrum, officiis omnis nihil ut. Harum labore quos, est, ab impedit aspernatur nulla ut doloribus laudantium qui ratione voluptatum aliquam voluptate modi error. Qui, magnam quam distinctio repellendus atque non!</p>
          <a href='https://fonts.google.com/' target='_blank' rel="noreferrer" className="uppercase inline-block mt-5 py-4 px-8 border border-gray-400 rounded-full hover:text-teal-400 duration-300  ">Resume</a>
        </div>
      </div>
    </div>
  )
}

export default About