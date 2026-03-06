"use client";

import { useState } from "react";
import Burger from "../Burger/Burger";
import Logo from "../Svgs/Logo";
import {
  BurgerWrapper,
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
      <Logo />
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
      {!isCompact && <Divider fill={"currentColor"} />}
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

  const hasScrolled = scrollPos > 100;
  const hideNavbar = directionDown || hideNavbarInSection;

  return (
    <NavbarContainer className={clsx({ hidden: hideNavbar, opened: isOpen })}>
      <NavbarLayout
        isCompact={isOpen ? false : hasScrolled}
        theme={isOpen ? "dark" : hasScrolled ? "light" : "transparent"}
        isOpen={isOpen}
        onClick={() => setIsOpen((p) => !p)}
      />
      {/* {isOpen && <Navlinks />} */}
    </NavbarContainer>
  );
}
