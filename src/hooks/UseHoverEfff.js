import hoverEffect from "hover-effect";
import { useEffect } from "react";
import cloud from '../assets/images/hossain.jpeg'


export const UseHoverEfff = (el, img1,img2) => {
  return (
    useEffect(()=>{
      new hoverEffect({
        parent: el.current,
        image1: img1,
        image2: img2,
        displacementImage: cloud,
        intensity: 0.7,
      })
    },[el,img1,img2])
  )
}
