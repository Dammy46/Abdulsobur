
"use client"
import React, { useRef, useLayoutEffect } from "react";
import variable from "./hero.module.scss";
import Navbar from "../Navbar";
import Link from "next/link";
import svg from './svg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';
import Image from "next/image";
import { slideUp } from "@/utils/data";

const Hero = () => {
  const {svgText} = svg()
  const slider:  React.MutableRefObject<null> = useRef(null);
  let direction: number = -1;
    useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
   
  }, [])

 
  return (
    <motion.header variants={slideUp}  initial="initial" animate="enter"  className={variable.heroHeader}>
      <div className={variable.boxWrap}>
        <div className={variable.box}></div>
      </div>
      <Navbar noHeight={true}/>
      <div className={variable.introWrap}>
      <div className={variable.introContainer}>
        {svgText}
       
        <p>
          <span>It&apos;s hard to label me</span><br/> but i can certainly <span className={variable.share}>
            <Link href={'/about'} aria-label="share about myself">share</Link>
            </span> a little bit about myself
        </p>
      </div>
      </div>
      <Link href={'#desc'} aria-label="scroll down" className={variable.arrowDown}>

    <Image src={'/arrow-down.svg'} alt="arrow" width={100} height={100}/>
      </Link>
    </motion.header>
  );
};

export default Hero;
