import React, { ReactNode } from "react";

export interface CardProps {
  title: string;
  description: string;
  image: string;
  button: ReactNode;
  primaryColor: string;
  hasShadows: boolean;
  imageEffect: "none" | `blur(${number}px)` | `brightness(${number}%)` | `contrast(${number}%)` | `drop-shadow(${string})` | `grayscale(${number}%)` | `hue-rotate(${number}deg)` | `invert(${number}%)` | `opacity(${number}%)` | `saturate(${number}%)` | `sepia(${number}%)` | `url(${string})`
}


const TiltyCard = (props: CardProps) => {
  return <button>{props.title}</button>;
};

export default TiltyCard;