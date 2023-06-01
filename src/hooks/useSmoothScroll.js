import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
export const useSmoothScroll = () => {
 useEffect(() => {
    const lenis = new Lenis(
      {
        duration: 1.3,
        easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
        direction: "vertical",
        smooth: true
      })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, []);
};

export default useSmoothScroll;
{
    
    }