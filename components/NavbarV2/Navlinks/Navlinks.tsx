import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { easing } from "../../../consts/animationConfig";
import Divider from "../../Divider/Divider";
import { navConfig } from "../../Navbar/navConfig";
import {
  NavlinksContent,
  NavlinksLayout,
  NavlinksList,
  Perex,
  StyledNavlinks,
} from "./StyledNavlinks";
import NavlinkItem from "./NavlinkItem/NavlinkItem";

interface NavlinksProps {
  onClose: () => void;
}

export default function Navlinks({ onClose }: NavlinksProps) {
  const pathname = usePathname();
  const [hoveredId, setHoveredId] = useState<string>(navConfig[0].id);
  const currNavItem = navConfig.find((p) => p.id === hoveredId);

  return (
    <StyledNavlinks
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {
          opacity: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.05,
            when: "afterChildren",
            ease: easing,
          },
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            when: "beforeChildren",
            ease: easing,
          },
        },
      }}
    >
      <NavlinksLayout>
        <NavlinksContent>
          <NavlinksList
            variants={{
              hidden: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
              visible: {
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            {navConfig.map((p, i) => (
              <NavlinkItem
                key={p.slug}
                slug={p.slug}
                name={p.name}
                isHovered={hoveredId === p.id}
                isActive={
                  p.slug === pathname ||
                  (pathname.includes("projekt/") && p.slug === "/projekty")
                }
                onHover={() => setHoveredId(p.id)}
                onClose={onClose}
              />
            ))}
          </NavlinksList>
          <AnimatePresence mode="wait">
            <Perex
              key={hoveredId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {currNavItem.perex}
            </Perex>
          </AnimatePresence>
        </NavlinksContent>
        <Divider fill="white" animate duration={1} />
      </NavlinksLayout>
    </StyledNavlinks>
  );
}
