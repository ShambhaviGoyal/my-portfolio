import { useLayoutEffect } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { setRootLenis } from "../utils/rootLenis";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Lenis smooth scroll does not update native scrollTop, so ScrollTrigger must
 * use Lenis via scrollerProxy. Without this, `.reveal-up` stays invisible.
 */
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

  useGSAP(
    () => {
      if (!lenis) return;

      const elements = gsap.utils.toArray(".reveal-up");
      gsap.set(elements, { y: 40, opacity: 0, force3D: true });

      ScrollTrigger.batch(elements, {
        scroller: document.documentElement,
        start: "top 92%",
        batchMax: 14,
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.72,
            stagger: 0.055,
            ease: "power3.out",
            overwrite: true,
          });
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { dependencies: [lenis], revertOnUpdate: true }
  );

  return null;
};

export default LenisGsap;
