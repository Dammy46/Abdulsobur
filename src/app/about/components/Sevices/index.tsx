"use client";
import React, { useRef } from "react";
import variable from "./services.module.scss";
import { services } from "@/utils/data";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { slideUp } from "./animation";

const Services = () => {
  const phrase = "What i can do.";
  const container: React.MutableRefObject<null> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  const isInView: boolean = useInView(container);
  return (
    <motion.div ref={container} className={variable.serviceWrap}>
      <div className={variable.container}>
        <div className={variable.sectionTitle}>
          <h2 aria-label={phrase}>
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
          </h2>
        </div>
        <div className={variable.flex}>
          {services.map((data, index) => (
            <div className={variable.serviceCard} key={index}>
              <div className={variable.titleWrap}>
                <p className={variable.number}>{`0${index + 1}`}</p>
                <div className={variable.divider} />
                <span className={variable.title} aria-label={data.title}>
                  {data.title.split(" ").map((word, index) => {
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
                </span>
                <p>
                  {data.desc.split(" ").map((word, index) => {
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
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div style={{ height }} className={variable.circleContainer}>
        <div className={variable.circle}></div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
