"use client";

import React, { ButtonHTMLAttributes, JSX, ReactNode, useState } from "react";
import Divider from "../Divider/Divider";
import { ButtonInner, ButtonLink, Cap, StyledButton } from "./StyledButton";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  as?: keyof JSX.IntrinsicElements;
}

const Button = ({
  children,
  className,
  onClick,
  href,
  type,
  as,
}: ButtonProps) => {
  const [hover, sethover] = useState<boolean>(false);

  if (href) {
    return (
      <ButtonLink
        href={href}
        className={className}
        onMouseEnter={() => {
          sethover(true);
        }}
        onMouseLeave={() => {
          sethover(false);
        }}
      >
        <StyledButton as={"span"} className={className} onClick={onClick}>
          <Cap>
            <Divider animate={hover} duration={0.5} />
          </Cap>
          <ButtonInner>{children}</ButtonInner>
          <Cap>
            <Divider animate={hover} duration={0.5} />
          </Cap>
        </StyledButton>
      </ButtonLink>
    );
  }
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      type={type}
      as={as}
      onMouseEnter={() => {
        sethover(true);
      }}
      onMouseLeave={() => {
        sethover(false);
      }}
    >
      <Cap>
        <Divider animate={hover} duration={0.5} />
      </Cap>
      <ButtonInner>{children}</ButtonInner>
      <Cap>
        <Divider animate={hover} duration={0.5} />
      </Cap>
    </StyledButton>
  );
};

export default Button;
