import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position off-screen
    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.15,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.15,
      ease: "power3",
    });

    let hasMoved = false;

    const onMouseMove = (e) => {
      if (!hasMoved) {
        hasMoved = true;
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseEnterIteractable = () => setIsHovering(true);
    const onMouseLeaveIteractable = () => setIsHovering(false);

    window.addEventListener("mousemove", onMouseMove);

    // Add listeners to interactive elements
    const interactables = document.querySelectorAll(
      "a, button, input, textarea, .interactable"
    );

    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterIteractable);
      el.addEventListener("mouseleave", onMouseLeaveIteractable);
    });

    // Cleanup
    const observer = new MutationObserver(() => {
      const newInteractables = document.querySelectorAll("a, button, input, textarea, .interactable");
      newInteractables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterIteractable);
        el.removeEventListener("mouseleave", onMouseLeaveIteractable);
        el.addEventListener("mouseenter", onMouseEnterIteractable);
        el.addEventListener("mouseleave", onMouseLeaveIteractable);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterIteractable);
        el.removeEventListener("mouseleave", onMouseLeaveIteractable);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden h-4 w-4 rounded-full border-[1.5px] border-sky-400 mix-blend-difference drop-shadow-[0_0_8px_rgba(56,189,248,0.4)] transition-all duration-300 ease-out md:block ${
        isHovering ? "scale-[3] bg-sky-400/20 border-transparent opacity-80" : "scale-100 bg-sky-400"
      }`}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
