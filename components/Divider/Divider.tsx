"use client";

import { ResolvedValues } from "framer-motion";
import { easing } from "../../consts/animationConfig";
import { ColorKeys } from "../../consts/colors";
import Plus from "../Svgs/Plus";
import { DividerLine, PlusWrapper, StyledDivider } from "./StyledDivider";

interface DividerProps {
  fill?: ColorKeys | "currentColor";
  hidePlus?: boolean;
  animate?: boolean | "inView" | "animatePresence";
  duration?: number;
  once?: boolean;
  onAnimationEnded?: (arg: ResolvedValues) => void;
  reverse?: boolean;
}

const Divider = ({
  fill = "primary400",
  hidePlus = false,
  animate = "inView",
  duration = 3,
  once = true,
  reverse,
  onAnimationEnded = () => {},
}: DividerProps) => {
  return (
    <StyledDivider className={hidePlus ? "hide-plus" : ""}>
      {!hidePlus && (
        <PlusWrapper className="left">
          <Plus stroke={fill} />
        </PlusWrapper>
      )}
      <DividerLine
        className={reverse ? "reverse" : ""}
        color={fill}
        initial={"hidden"}
        whileInView={animate === "inView" ? "visible" : undefined}
        viewport={{ once }}
        animate={animate !== "inView" && animate ? "visible" : "hidden"}
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ ease: easing, duration: duration }}
        onUpdate={(arg) => {
          onAnimationEnded(arg);
        }}
      />
      {!hidePlus && (
        <PlusWrapper className="right">
          <Plus stroke={fill} />
        </PlusWrapper>
      )}
    </StyledDivider>
  );
};

export default Divider;
