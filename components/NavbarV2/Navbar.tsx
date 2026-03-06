"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Burger from "../Burger/Burger";
import Logo from "../Svgs/Logo";
import {
  BurgerWrapper,
  DividerWrapper,
  NavbarContainer,
  NavbarWrapper,
  StyledNavbar,
} from "./StyledNavbar";
import Divider from "../Divider/Divider";
import clsx from "clsx";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { usePathname } from "next/navigation";
import { useDataAttrObserver } from "../../hooks/useDataAttrObserver";
import Navlinks from "./Navlinks/Navlinks";
import { useDisableScroll } from "../../hooks/useDisableScroll";

interface NavbarProps {
  onClick: () => void;
  isOpen: boolean;
}

function NavbarInner({ onClick, isOpen }: NavbarProps) {
  return (
    <StyledNavbar>
      <Logo onClick={isOpen ? onClick : undefined} />
      <BurgerWrapper onClick={onClick}>
        <Burger isOpen={isOpen} strokeWidth={3} />
      </BurgerWrapper>
    </StyledNavbar>
  );
}

interface NavbarInnerProps {
  isCompact?: boolean;
  hasBorder?: boolean;
  theme?: "dark" | "light" | "transparent";
}

function NavbarLayout({
  isCompact,
  theme,
  hasBorder,
  isOpen,
  onClick,
}: NavbarInnerProps & NavbarProps) {
  return (
    <NavbarWrapper
      className={clsx({
        bgTransparent: theme === "transparent",
        bgLight: theme === "light",
        bgDark: theme === "dark",
        hasBorder,
        isCompact,
      })}
    >
      {!isCompact && (
        <DividerWrapper>
          <Divider fill={"currentColor"} />
        </DividerWrapper>
      )}
      <NavbarInner onClick={onClick} isOpen={isOpen} />
    </NavbarWrapper>
  );
}

export default function NavbarController() {
  const [isOpen, setIsOpen] = useState(false);
  const { directionDown, scrollPos } = useScrollDirection();
  useDisableScroll(isOpen);
  const pathname = usePathname();
  const [hideNavbarInSection] = useDataAttrObserver(
    "data-hide-navbar",
    { rootMargin: "-10% 0% -90% 0%" },
    [pathname]
  );

  const hasScrolled = scrollPos > 200;
  const hideNavbar = directionDown || hideNavbarInSection;

  return (
    <NavbarContainer className={clsx({ hidden: hideNavbar, opened: isOpen })}>
      <NavbarLayout
        isCompact={isOpen ? false : hasScrolled}
        theme={isOpen ? "dark" : hasScrolled ? "light" : "transparent"}
        hasBorder={isOpen ? false : hasScrolled ? true : false}
        isOpen={isOpen}
        onClick={() => setIsOpen((p) => !p)}
      />
      {isOpen &&
        createPortal(
          <Navlinks onClose={() => setIsOpen(false)} />,
          document.body
        )}
    </NavbarContainer>
  );
}
