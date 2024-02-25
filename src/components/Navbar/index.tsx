"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import variable from "./navbar.module.scss";
import Link from "next/link";
import Magnet from "../Magnet";
import RoundBtn from "../RoundBtn";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface navProps {
  noHeight?: boolean;
}
const Navbar: React.FC<navProps> = ({ noHeight }) => {
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();
  const button = useRef(null);
  
  const config: any = { scale: 0, duration: 0.25, ease: "power1.out" }
  useEffect(() => {
    if (isActive) setIsActive(false);

    //eslint-disable-next-line
  }, [pathname]);
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Work", link: "/work" },
  ];
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, config);
          setIsActive(false)
        },
      },
    });

    //eslint-disable-next-line
  }, []);
useEffect(() => {
if(!isActive) {
  gsap.to(button.current, config);
}  

}, [isActive])


  return (
    <>
      <div className={variable.navbar}>
        <Link
          href="/"
          aria-label="Code by Abdulsobur"
          className={variable.authorWrap}
        >
          <p className={variable.copyright}>©</p>
          <div className={variable.name}>
            <p className={variable.codeBy}>Code by</p>
            <p className={variable.abdulsobur}>Abdulsobur</p>
            <p className={variable.abdulazeez}>Abdulazeez</p>
          </div>
        </Link>
        <div className={variable.navLinks}>
          {links.map((link, index) => (
            <Magnet key={index}>
              <Link
                href={link.link}
                aria-label={link.name}
                className={`${variable.link} ${
                  pathname == link.link ? `${variable.active}` : ""
                } ${noHeight ? "" : `${variable.noHeight}`}`}
              >
                <span>{link.name}</span>
                <div className={variable.indicator}></div>
              </Link>
            </Magnet>
          ))}
        </div>
        <div className={variable.mobileTrigger}>
          <span onClick={() => {
             setIsActive(!isActive);
              gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
          }}>menu</span>
        </div>
      </div>
      <div ref={button} className={variable.headerButtonContainer}>
        <RoundBtn
          onClick={() => {
            setIsActive(!isActive);
     
         
          }}
          className={`${variable.button}`}
 
          aria-label={isActive ? "close menu" : "open menu"}
        >
          <div
            className={`${variable.burger} ${
              isActive ? variable.burgerActive : ""
            }`}
          ></div>
        </RoundBtn>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Navbar;
