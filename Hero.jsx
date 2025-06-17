import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const paraRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      paraRef.current.querySelectorAll("span"),
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const text =
    "Welcome to our premium collection. Discover products that blend design and performance.";
  const words = text.split(" ");

  return (
    <section className="py-16 text-center bg-white">
      <h1 className="text-4xl font-bold mb-4">Premium Landing Page</h1>
      <p ref={paraRef} className="text-lg text-gray-700 max-w-xl mx-auto">
        {words.map((word, i) => (
          <span key={i} className="inline-block mr-1 opacity-0">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}
