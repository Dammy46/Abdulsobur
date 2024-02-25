import React from "react";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import variable from "./footer.module.scss";
import Magnet from "../Magnet";
import { socials } from "@/utils/data";
const Footer = () => {
  const [time, setTime] = useState("");
  const date: Date = new Date();
  const currentYear: number = date.getFullYear();
  const container: React.MutableRefObject<null> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [-500, 0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let getTime = new Date();
      setTime(getTime.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div style={{ y }} ref={container} className={variable.footer}>
      <div className={variable.body}>
        <div className={variable.first}>
          <span className={variable.sign}>Currently available for hiring</span>
          <div className={variable.container}>
            <span aria-label="Reach Out">
              Reach <br /> Out
            </span>
          </div>
        </div>
        <div className={variable.second}>
          <div className={variable.geo}>
            <span className={variable.time}>{time}</span>
            <p>Ajegunle, LA, Nigeria</p>
          </div>
          <div className={variable.info}>
            <p>
              For any project collaborative projects or inquiries feel free to
              reach out to me
            </p>
            <Link href="mailto:aabdulsobur46@gmail.com">
              aabdulsobur46@gmail.com
            </Link>
          </div>
        </div>
        <div className={variable.third}>
          <div className={variable.copyright}>
            <p>©{currentYear} Abdulsobur | All rights reserved </p>
          </div>
          <div className={variable.divider} />

          <div className={variable.socials}>
            {socials.map((social, index) => (
              <Magnet key={index}>
                <Link href={social.url} aria-label={social.name}>
                  {social.name}
                </Link>
              </Magnet>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
