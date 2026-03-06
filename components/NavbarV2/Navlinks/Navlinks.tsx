import { useState } from "react";
import { navConfig } from "../../Navbar/navConfig";
import {
  Navlink,
  NavlinksLayout,
  NavlinksList,
  Perex,
  StyledNavlinks,
} from "./StyledNavlinks";

export default function Navlinks() {
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
