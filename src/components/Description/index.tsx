"use client";
import React, { useRef } from "react";
import variable from "./desc.module.scss";
import { useInView, motion } from "framer-motion";
import { slideUp, opacity } from "./animation";
import RoundBtn from "../RoundBtn";
import { phrase } from "@/utils/data";

const Description = () => {

  const description: React.MutableRefObject<null> = useRef(null);
  const isInView: boolean = useInView(description);
  return (
    <div ref={description} className={variable.description} id="desc">
      <div className={variable.body}>
        <p aria-label={phrase}>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={variable.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          BASED IN LAGOS NIGERIA <br /> AVAILABLE FOR FREELANCE PROJECTS.
        </motion.p>
        <div data-scroll data-scroll-speed="0.3">
          <RoundBtn className={variable.button} url="/about" label="About">
            <p>About me</p>
          </RoundBtn>
        </div>
      </div>
    </div>
  );
};

export default Description;
