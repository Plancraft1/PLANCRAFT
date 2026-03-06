"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { easing } from "../../consts/animationConfig";
import { device } from "../../consts/breakpoints";
import { useDataAttrObserver } from "../../hooks/useDataAttrObserver";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useWindowSize } from "../../hooks/useWindowSize";
import Burger from "../Burger/Burger";
import { DisableScroll } from "../DisableScroll/DisableScroll";
import Divider from "../Divider/Divider";
import Arrow from "../Svgs/Arrow";
import Logo from "../Svgs/Logo";
import { Small } from "../Typography/Small";
import {
  BurgerWrapper,
  LinkDescription,
  LogoWrapper,
  NavLink,
  NavLinks,
  NavbarDividerWrapper,
  NavbarPlaceholder,
  Navigation,
  NavigationDashboard,
  NavlinkDividerWrapper,
  NavlinkInner,
  NavlinkInnerArrowW,
  NavlinkWrapper,
  StyledNavbar,
  Topbar,
  TopbarContent,
} from "./StyledNavbar";
import { navConfig } from "./navConfig";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { directionDown, scrollPos } = useScrollDirection();
  const { w } = useWindowSize();
  const [hoverIndex, setHoverIndex] = useState<number>(0);
  const pathname = usePathname();
  const [hideNavbarInSection, resetHideNavbar] = useDataAttrObserver(
    "data-hide-navbar",
    { rootMargin: "-10% 0% -90% 0%" },
    [pathname]
  );
  const showNavbar = !directionDown && !hideNavbarInSection;

  const handleClose = () => {
    setIsOpen(false);
    resetHideNavbar();
  };

  const isCompact = isOpen ? false : scrollPos > 100;

  return (
    <>
      <NavbarPlaceholder />
      <AnimatePresence>
        {showNavbar && (
          <StyledNavbar
            key={"navbar"}
            initial={{ y: `-100%` }}
            animate={{ y: `0%` }}
            exit={{ y: `-100%` }}
            transition={{ ease: easing }}
          >
            <Topbar>
              <NavbarDividerWrapper
                className={isCompact ? "hide" : "show"}
                layout
              >
                <Divider fill={isOpen ? "white" : "primary400"} />
              </NavbarDividerWrapper>
              <TopbarContent
                layoutId="navbar-content"
                layout="position"
                className={`${isCompact ? "compact" : ""} ${
                  isOpen ? "open" : "closed"
                }`}
              >
                <LogoWrapper
                  href={"/"}
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <Logo fill={isOpen ? "white" : "primary400"} />
                </LogoWrapper>
                <BurgerWrapper>
                  <Burger
                    isOpen={isOpen}
                    onClick={() => {
                      setIsOpen((p) => !p);
                    }}
                    strokeWidth={2}
                    height={20}
                    stroke={isOpen ? "white" : "primary400"}
                  />
                </BurgerWrapper>
              </TopbarContent>
            </Topbar>
            <DisableScroll scroll={!isOpen} />
            <AnimatePresence>
              {isOpen && (
                <>
                  <NavLinks
                    key={"navlinks"}
                    initial={"hidden"}
                    animate={"visible"}
                    exit={"hidden"}
                    variants={{
                      hidden: {
                        y: `-100%`,
                        transition: {
                          when: "afterChildren",
                          staggerChildren: 0.05,
                          ease: easing,
                          duration: 0.7,
                        },
                      },
                      visible: {
                        y: `0%`,
                        transition: {
                          when: "beforeChildren",
                          staggerChildren: 0.05,
                          ease: easing,
                          duration: 0.7,
                        },
                      },
                    }}
                  >
                    <NavigationDashboard>
                      <Navigation>
                        {navConfig.map(({ name, slug }, i) => {
                          const isActive =
                            slug === pathname ||
                            (pathname.includes("projekt/") &&
                              slug === "/projekty");
                          const isHover = hoverIndex === i;
                          return (
                            <NavlinkWrapper
                              key={i}
                              variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                              }}
                            >
                              <NavLink
                                onMouseEnter={() => setHoverIndex(i)}
                                onClick={() => {
                                  handleClose();
                                }}
                                href={slug}
                              >
                                <NavlinkDividerWrapper>
                                  <Divider
                                    hidePlus
                                    fill="white"
                                    animate={isOpen}
                                  />
                                </NavlinkDividerWrapper>
                                <NavlinkInner
                                  animate={{
                                    x:
                                      w <= device.tabletPortrait
                                        ? 0
                                        : isHover
                                          ? 50
                                          : 0,
                                  }}
                                  transition={{ ease: easing }}
                                >
                                  <NavlinkInnerArrowW
                                    animate={{
                                      x: isHover ? 0 : -50,
                                      opacity: isHover ? 1 : 0,
                                    }}
                                    transition={{ ease: easing }}
                                  >
                                    <Arrow
                                      stroke={
                                        !isActive ? "primary300" : "white"
                                      }
                                      strokeWidth={2}
                                    />
                                  </NavlinkInnerArrowW>
                                  <Small
                                    className={`navlink ${
                                      !isActive ? "primary300" : "white"
                                    }`}
                                  >
                                    {name}
                                  </Small>
                                </NavlinkInner>
                              </NavLink>
                            </NavlinkWrapper>
                          );
                        })}
                      </Navigation>
                      <LinkDescription
                        key={hoverIndex}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                      >
                        {navConfig[hoverIndex].perex}
                      </LinkDescription>
                    </NavigationDashboard>
                    <Divider fill="white" />
                  </NavLinks>
                </>
              )}
            </AnimatePresence>
          </StyledNavbar>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
