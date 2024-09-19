"use client";
import variable from "./projects.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import RoundedBtn from "../RoundBtn";
import MobileWorks from "./components/mobile";
import { projects } from "@/utils/data";
import { scaleAnimation } from "./animation";
import { modalProps } from "@/utils/types";

export default function Projects() {
        const container: React.MutableRefObject<null> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  const [modal, setModal] = useState<modalProps>({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer: React.MutableRefObject<null> = useRef(null);
  const cursor: React.MutableRefObject<null> = useRef(null);
  const cursorLabel: React.MutableRefObject<null> = useRef(null);
  let xMoveContainer: any = useRef(null);
  let yMoveContainer: any = useRef(null);
  let xMoveCursor: any = useRef(null);
  let yMoveCursor: any = useRef(null);
  let xMoveCursorLabel: any = useRef(null);
  let yMoveCursorLabel: any = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
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
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active: any, index: any, x: any, y: any) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <div
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={variable.projects}
    >
      <div className={variable.sectionTitle}>
        <h5>recent works</h5>
      </div>
      <div className={variable.body}>
        {projects.slice(0, 3).map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              link={project.link}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <MobileWorks projects={projects.slice(0, 3)} />
      <div className={variable.moreBtn}>
        <RoundedBtn url="/work" label="Work">
          <p>More work</p>
        </RoundedBtn>
      </div>
            <motion.div style={{ height }} className={variable.circleContainer}>
        <div className={variable.circle}></div>
      </motion.div>
      <div>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={variable.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={variable.modalSlider}
          >
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={variable.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              );
            })}
          </div>
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
      </div>
    </div>
  );
}
