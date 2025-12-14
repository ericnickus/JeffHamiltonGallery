import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageWrapper({ children }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    // Fade in the page
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" });

    // Optional: fade out on unmount (cleanup)
    return () => {
      gsap.to(el, { opacity: 0, duration: 0.4, ease: "power2.in" });
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
