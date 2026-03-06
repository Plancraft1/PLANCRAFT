import { easing } from "../../../../consts/animationConfig";
import { device } from "../../../../consts/breakpoints";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import Divider from "../../../Divider/Divider";
import Arrow from "../../../Svgs/Arrow";
import {
  ArrowWrapper,
  NavlinkDividerWrapper,
  NavlinkInner,
  NavlinkItemWrapper,
  NavlinkLabel,
  NavlinkLink,
} from "./StyledNavlinkItem";

interface NavlinkItemProps {
  slug: string;
  name: string;
  isHovered: boolean;
  isActive: boolean;
  onHover: () => void;
  onClose: () => void;
}

export default function NavlinkItem({
  slug,
  name,
  isHovered,
  isActive,
  onHover,
  onClose,
}: NavlinkItemProps) {
  const { w } = useWindowSize();
  const isMobile = w <= device.tabletPortrait;

  return (
    <NavlinkItemWrapper
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.3, ease: easing }}
    >
      <NavlinkDividerWrapper>
        <Divider hidePlus fill="white" animate duration={1} />
      </NavlinkDividerWrapper>

      <NavlinkLink href={slug} onClick={onClose} onMouseEnter={onHover}>
        <NavlinkInner
          animate={{ x: isMobile ? 0 : isHovered ? 50 : 0 }}
          transition={{ ease: easing }}
        >
          <ArrowWrapper
            animate={{
              x: isHovered ? 0 : -50,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ ease: easing }}
          >
            <Arrow stroke={isActive ? "white" : "primary300"} strokeWidth={2} />
          </ArrowWrapper>
          <NavlinkLabel className={isActive ? "white" : "primary300"}>
            {name}
          </NavlinkLabel>
        </NavlinkInner>
      </NavlinkLink>
    </NavlinkItemWrapper>
  );
}
