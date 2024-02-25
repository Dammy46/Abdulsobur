import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import variable from "./slides.module.scss";
import Image from "next/image";
import { slider1, slider2 } from "@/utils/data";

export default function SlidingWorks() {
  const container: React.MutableRefObject<null> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 150]
  );
  const x2: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -150]
  );
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={variable.slidingImages}>
      <motion.div style={{ x: x1 }} className={variable.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={variable.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={variable.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={variable.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={variable.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={variable.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={variable.circleContainer}>
        <div className={variable.circle}></div>
      </motion.div>
    </div>
  );
}
