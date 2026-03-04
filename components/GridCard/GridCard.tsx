"use client";

import { easeInOut } from "framer-motion";
import { useState } from "react";
import { ImageProps } from "../../app/service/[slug]/servicesData";
import Link from "../Link/Link";
import { Mini } from "../Typography/Mini";
import { Small } from "../Typography/Small";
import {
  GridCardContent,
  GridCardContentFooter,
  GridCardContentHeader,
  GridCardImage,
  GridCardImageAnimation,
  GridCardImageAnimationW,
  GridCardImageMask,
  GridCardInner,
  GridCardTags,
  StyledGridCard,
} from "./StyledGridCard";

interface GridCardProps {
  title: string;
  href: string;
  tags: string[];
  detail: string;
  ctaLabel: string;
  image: ImageProps;
  progress?: number;
}

const GridCard = ({
  title,
  href,
  tags,
  detail,
  ctaLabel,
  image,
  progress,
}: GridCardProps) => {
  const [hover, sethover] = useState<boolean>(false);
  const revealAnimation = Math.max((5 / 3) * progress - 1 / 3, 0);

  return (
    <StyledGridCard
      href={href}
      onMouseEnter={() => {
        sethover(true);
      }}
      onMouseLeave={() => {
        sethover(false);
      }}
    >
      <GridCardInner>
        <GridCardImageMask>
          <GridCardImageAnimationW>
            <GridCardImageAnimation
              animate={{ scale: hover ? 1.1 : 1 }}
              transition={{ ease: easeInOut }}
            >
              <GridCardImage
                src={image.src}
                height={image.height}
                width={image.width}
                alt={title}
              />
            </GridCardImageAnimation>
          </GridCardImageAnimationW>
        </GridCardImageMask>
        <GridCardContent>
          <GridCardContentHeader>
            <Small className="uppercase">{title}</Small>
            <GridCardTags>
              {tags.map((tag, i) => (
                <Mini key={i}>{tag}</Mini>
              ))}
            </GridCardTags>
          </GridCardContentHeader>

          <GridCardContentFooter animate={{ opacity: revealAnimation }}>
            <Mini>{detail}</Mini>
            <Link as={"span"} href={""}>
              <Mini className="uppercase">{ctaLabel}</Mini>
            </Link>
          </GridCardContentFooter>
        </GridCardContent>
      </GridCardInner>
    </StyledGridCard>
  );
};

export default GridCard;
