"use client";
import React, { useLayoutEffect, useRef } from "react";
import variable from "./hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import { slideUp } from "@/utils/data";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Hero = () => {
  const slider: React.MutableRefObject<null> = useRef(null);
  let direction = -1;
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
  }, []);

  return (
    <motion.header
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={variable.heroHeader}
    >
      <Navbar noHeight={false} />
      <div className={variable.container}>
        <div className={variable.flexWrap}>
          <div className={variable.infos}>
            <h1>
              Abdulsobur <br /> <span>Abdulazeez</span>
            </h1>
            <div className={variable.desc}>
              <p>
                <span>Hello, I&apos;m Abdulsobur </span> <br />
                I&apos;m a Frontend Developer with 2 years of experience, passionate
                about creating user-friendly websites using HTML, CSS,
                JavaScript, and frameworks like React!
              </p>

              <p>
                I love staying updated with the latest trends and I&apos;m eager to
                grow in dynamic environments. Let&apos;s build remarkable web
                experiences together!
              </p>
            </div>
          </div>
          <div className={variable.imgContainer}>
            <div className={variable.profileImg}>
              <div className={variable.overlay}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={variable.resume}>
        <Link href={"/resume.pdf"} target="_blank" aria-label="Download resume">
          Download resume
        </Link>
      </div>
    </motion.header>
  );
};

export default Hero;
