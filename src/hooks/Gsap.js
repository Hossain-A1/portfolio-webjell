import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const useImageAnimation = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: "-100vh",
      },
      {
        y: 0,
        duration: 3,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useGsapHeadline = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [items, delay]);
};

export const useLinksAnimation = (links, delay = 0) => {
  useEffect(() => {
    const el = links.map((link) => link.current);

    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [links, delay]);
};

export const useBioAnimation = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 400,
      },
      {
        y: 0,
        duration: 3,
        delay,
        ease: "power4.out",
        stagger: 0.5,
      }
    );
  }, [el, delay]);
};
export const useSocialAnimation = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        x: -400,
      },
      {
        x: 0,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.5,
      }
    );
  }, [el, delay]);
};
export const useTitleAnimation = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el, delay]);
};
export const useProjectLeftRight = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};
export const useAboutAnimation = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

export const useSkillLineAnimation = (elements) => {
  useEffect(() => {
    elements.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          onEnter() {
            el.classList.add("reveal");
          },
        },
      });
    });
  }, [elements]);
};

export const useSkillTextAnimation = (elements) => {
  useEffect(() => {
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 200,
        },
        {
          y: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: el,
          },
        }
      );
    });
  }, [elements]);
};
export const useFooterAnimation = (el) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: -300,
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el]);
};
export const useContactAnimation = (items, delay= 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y:200,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [items, delay]);
};
