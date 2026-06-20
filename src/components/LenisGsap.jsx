import { useLayoutEffect } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { setRootLenis } from "../utils/rootLenis";

gsap.registerPlugin(ScrollTrigger);

const LenisGsap = () => {
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (lenis) {
      setRootLenis(lenis);
      return () => setRootLenis(null);
    }
    setRootLenis(null);
    return undefined;
  }, [lenis]);

  useLenis(() => {
    ScrollTrigger.update();
  });

  useLayoutEffect(() => {
    if (!lenis) return;

    const el = document.documentElement;

    ScrollTrigger.scrollerProxy(el, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      ScrollTrigger.scrollerProxy(el, {});
    };
  }, [lenis]);

  return null;
};

export default LenisGsap;
