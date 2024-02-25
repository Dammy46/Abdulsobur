import React, { useEffect, useRef, useState } from 'react'
import variable from './projects.module.scss'
import Link from 'next/link'
import gsap from 'gsap'
import {motion, useInView, useScroll, useTransform} from 'framer-motion'
import { modalProps } from '@/utils/types'
import { projects } from '@/utils/data'
const Projects = () => {
    const [modal, setModal] = useState<modalProps>({ active: false, index: 0 });
  const { active, index } = modal;
    const cursor: React.MutableRefObject<null> = useRef(null);
  const cursorLabel: React.MutableRefObject<null> = useRef(null);
    let xMoveCursor: any = useRef(null);
  let yMoveCursor: any = useRef(null);
  let xMoveCursorLabel: any = useRef(null);
  let yMoveCursorLabel: any = useRef(null);
    const container: React.MutableRefObject<null> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
    useEffect(() => {

    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: any, y: any) => {

    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active: any, index: any, x: any, y: any) => {
    moveItems(x, y);
    setModal({ active, index });
  };
  const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
  return (
    <motion.div ref={container}  className={variable.projects}>
      <div className={variable.titleWrap}>
        <h4>Featured Works</h4>
      </div>
      <div className={variable.flexWrap}>
        {projects.map((item, index) => (

        <div className={variable.card} key={index}>
          <div className={variable.cardContainer}>
            <Link href={item.link} onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} onMouseMove={(e) => manageModal(true, index, e.clientX, e.clientY)}>
              <div className={variable.cardImg}>
                <div className={variable.overlay} style={{backgroundColor: item.color}}/>
                <div className={`${variable.overlay} ${variable.overlayImg}`} style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: `url('./images/${item.src}')` }}></div>
              </div>
              <div className={variable.title}>
                <h4>{item.title}</h4>
                <div className={variable.divider}/>
              </div>
              <div className={variable.additionalInfo}>
                <p>Development</p>
                <p>2023</p>
              </div>
            </Link>
          </div>
        </div>
        ))}
      </div>
          <motion.div style={{ height }} className={variable.circleContainer}>
        <div className={variable.circle}></div>
      </motion.div>
              <motion.div
          ref={cursor}
          className={variable.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={variable.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
    </motion.div>
  )
}

export default Projects