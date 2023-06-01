import { useRef } from 'react';
import {useSocialAnimation} from '../hooks/Gsap'

const data = [

  {
    id:1, title: 'Facebook', url: 'https://google.com'
  },
  {
    id:2, title: 'LinkedIn', url: 'https://www.linkedin.com/in/hossain-ahmed-163b11236/'
  },
  {
    id:3, title: 'Instragram', url: 'https://google.com'
  },
  {
    id:4, title: 'Twitter', url: 'https://google.com'
  },
  {
    id:5, title: 'GitHub', url: 'https://github.com/Hossain-A1'
  },

]
const Social = () => {

  const socialRef = useRef(null)
  useSocialAnimation(socialRef, 2 )
  return (
    <div className="socials flex gap-5 uppercase text-sm  text-gray-50/50 fixed left-5 top-[90%] 2xl:top-[75%] origin-left -rotate-90 backdrop-blur-xl bg-black/30 z-50 " ref={socialRef}>
      {
        data.map((social)=>(
          <a className="hover:text-teal-400 " href={social.url} target='_blank' rel="noreferree" key={social
          .id}>{social.title}</a>
        ))
      }
    </div>
  )
}

export default Social