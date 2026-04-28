"use client";

import { useState } from "react";
import { easeInOut } from "framer-motion";
import { ImageProps } from "../../app/service/[slug]/servicesData";
import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Mini } from "../Typography/Mini";
import {
  CardSmallCover,
  CardSmallImageAnimation,
  CardSmallImageMask,
  StyledCardSmall,
} from "./StyledCardSmall";

interface CardSmallProps {
  href: string;
  title: string;
  image: ImageProps;
  delay?: number;
}

const CardSmall = ({ image, title, href, delay = 0 }: CardSmallProps) => {
  const [hover, setHover] = useState(false);

  return (
    <StyledCardSmall
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <RevealAnimation delay={delay}>
        <CardSmallImageMask>
          <CardSmallImageAnimation
            animate={{ scale: hover ? 1.1 : 1 }}
            transition={{ ease: easeInOut }}
          >
            <CardSmallCover {...image} />
          </CardSmallImageAnimation>
        </CardSmallImageMask>
      </RevealAnimation>
      <RevealAnimation delay={delay + 0.5}>
        <Mini>{title}</Mini>
      </RevealAnimation>
    </StyledCardSmall>
  );
};

export default CardSmall;
