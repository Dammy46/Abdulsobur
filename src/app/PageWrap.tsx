"use client";
import Hero from "@/components/Hero";
import variable from "./page.module.scss";
import Description from "@/components/Description";
import { useEffect, useState } from "react";
import SlidingWorks from "@/components/SlidingWorks";
import Projects from "@/components/Projects";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
export default function PageWrap() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <div className={variable.mainWrap}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Description />
      <Projects />
      <SlidingWorks />
      <Footer />
    </div>
  );
}
