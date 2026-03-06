import { useState } from "react";
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
          transition: { staggerChildren: 0.05, when: "afterChildren" },
        },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05, when: "beforeChildren" },
        },
      }}
    >
      <NavlinksLayout>
        <NavlinksContent>
          <NavlinksList
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                  ease: easing,
                },
              },
              visible: {
                transition: { staggerChildren: 0.05, ease: easing },
              },
            }}
          >
            {navConfig.map((p, i) => (
              <NavlinkItem
                key={p.slug}
                slug={p.slug}
                name={p.name}
                isHovered={hoveredId === p.id}
                onHover={() => setHoveredId(p.id)}
                onClose={onClose}
              />
            ))}
          </NavlinksList>
          <Perex>{currNavItem.perex}</Perex>
        </NavlinksContent>
        <Divider fill="white" animate duration={1} />
      </NavlinksLayout>
    </StyledNavlinks>
  );
}
