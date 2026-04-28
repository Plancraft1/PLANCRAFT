"use client";

import { LinkProps as NextLinkProps } from "next/link";
import React, { JSX, ReactNode, useState } from "react";
import Arrow from "../Svgs/Arrow";
import { StyledLink, StyledLinkSpan } from "./Styles/StyledLink";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  as?: keyof JSX.IntrinsicElements;
  noArrow?: boolean;
}

const Link = ({
  children,
  target,
  className,
  as,
  noArrow,
  ...rest
}: LinkProps) => {
  const [hover, sethover] = useState<boolean>(false);

  if (as) {
    return (
      <StyledLinkSpan
        as={as}
        className={className}
        onMouseEnter={() => {
          sethover(true);
        }}
        onMouseLeave={() => {
          sethover(false);
        }}
      >
        {children}
        {!noArrow && <Arrow animate={hover} />}
      </StyledLinkSpan>
    );
  }
  return (
    <StyledLink
      {...rest}
      className={className}
      target={target}
      onMouseEnter={() => {
        sethover(true);
      }}
      onMouseLeave={() => {
        sethover(false);
      }}
    >
      {children}
      {!noArrow && <Arrow animate={hover} />}
    </StyledLink>
  );
};

export default Link;
