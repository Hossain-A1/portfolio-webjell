import { useEffect } from "react";

export const useCustomCursor = (innerRef, outerRef) => {
  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;

      innerRef.current.style.left = `${x}px`;
      innerRef.current.style.top = `${y}px`;
      outerRef.current.style.left = `${x}px`;
      outerRef.current.style.top = `${y}px`;

      let links = document.querySelectorAll("a");

      links.forEach((link) => {
        link.addEventListener("mouseover", () => {
          innerRef.current.classList.add('grow')
        });

        link.addEventListener('mouseleave', ()=>{
          innerRef.current.classList.remove('grow')
        })
      });
    }
  }, [innerRef, outerRef]);
};

export default useCustomCursor;
