import React from "react";
export type roundBtnProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  url?: string;
  label?: string;
  isMagnet?: boolean;
  [key: string]: any;
};
export type modalProps = {
  active: boolean;
  index: number;
};
export type ProjectProps = {
  index: number;
  title: string;
  link: string;
  manageModal: (active: boolean, index: number, x: any, y: any) => void;
};
