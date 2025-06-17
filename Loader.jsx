import { useEffect } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }) {
  useEffect(() => {
    const tl = gsap.timeline({ onComplete });
    tl.to(".loader", { y: "-100%", duration: 1.5, ease: "power2.inOut" });
  }, []);

  return (
    <div className="loader fixed inset-0 bg-black z-50 flex items-center justify-center text-white text-2xl">
      Loading...
    </div>
  );
}
