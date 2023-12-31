import ImageSlider from "./ImageSlider";
import Focus from "./components/Focus";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Numbers from "./components/Numbers";
import Offerings from "./components/Offerings";
import Range from "./components/Range";
import Solutions from "./components/Solutions";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <WhatWeDo />
      <Numbers />
      <Offerings />
      <Solutions />
      <Range />
      <Focus/>
      <JoinUs/>
    </main>
  );
}
