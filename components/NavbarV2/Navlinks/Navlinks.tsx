import { useState } from "react";
import { navConfig } from "../../Navbar/navConfig";
import {
  Navlink,
  NavlinksLayout,
  NavlinksList,
  Perex,
  StyledNavlinks,
} from "./StyledNavlinks";

interface NavlinksProps {
  onClose: () => void;
}

export default function Navlinks({ onClose }: NavlinksProps) {
  const [hoveredId, setHoveredId] = useState<string>(navConfig[0].id);
  const currNavItem = navConfig.find((p) => p.id === hoveredId);

  return (
    <StyledNavlinks>
      <NavlinksLayout>
        <NavlinksList>
          {navConfig.map((p) => (
            <Navlink
              key={p.slug}
              href={`${p.slug}`}
              onClick={onClose}
              onMouseEnter={() => setHoveredId(p.id)}
            >
              {p.name}
            </Navlink>
          ))}
        </NavlinksList>
        <Perex>{currNavItem.perex}</Perex>
      </NavlinksLayout>
    </StyledNavlinks>
  );
}
