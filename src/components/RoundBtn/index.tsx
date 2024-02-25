import React, { useEffect, useRef } from "react";
import variable from "./roundBtn.module.scss";
import gsap from "gsap";
import Magnet from "../Magnet";
import Link from "next/link";
import { roundBtnProps } from "@/utils/types";

export default function RoundBtn({
  children,
  backgroundColor = "#313bac",
  url,
  label,
  isMagnet = true,
  ...attributes
}: roundBtnProps) {
  const circle = useRef(null);
  let timeline: any = useRef(null);
  let timeoutId: any = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <>
      {isMagnet ? (
        <Magnet>
          {url ? (
            <Link
              href={url}
              aria-label={label}
              className={variable.roundedButton}
              style={{ overflow: "hidden" }}
              onMouseEnter={() => {
                manageMouseEnter();
              }}
              onMouseLeave={() => {
                manageMouseLeave();
              }}
              {...attributes}
            >
              {children}
              <div
                ref={circle}
                style={{ backgroundColor }}
                className={variable.circle}
              ></div>
            </Link>
          ) : (
            <div
              className={variable.roundedButton}
              style={{ overflow: "hidden" }}
              onMouseEnter={() => {
                manageMouseEnter();
              }}
              onMouseLeave={() => {
                manageMouseLeave();
              }}
              {...attributes}
            >
              {children}
              <div
                ref={circle}
                style={{ backgroundColor }}
                className={variable.circle}
              ></div>
            </div>
          )}
        </Magnet>
      ) : (
        <div>
          {url ? (
            <Link
              href={url}
              aria-label={label}
              className={variable.roundedButton}
              style={{ overflow: "hidden" }}
              onMouseEnter={() => {
                manageMouseEnter();
              }}
              onMouseLeave={() => {
                manageMouseLeave();
              }}
              {...attributes}
            >
              {children}
              <div
                ref={circle}
                style={{ backgroundColor }}
                className={variable.circle}
              ></div>
            </Link>
          ) : (
            <div
              className={variable.roundedButton}
              style={{ overflow: "hidden" }}
              onMouseEnter={() => {
                manageMouseEnter();
              }}
              onMouseLeave={() => {
                manageMouseLeave();
              }}
              {...attributes}
            >
              {children}
              <div
                ref={circle}
                style={{ backgroundColor }}
                className={variable.circle}
              ></div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
