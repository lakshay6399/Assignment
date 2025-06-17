import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import FAQ from "./components/FAQ";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="font-sans">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Hero />
          <BestSellers />
          <FAQ />
        </>
      )}
    </div>
  );
}
