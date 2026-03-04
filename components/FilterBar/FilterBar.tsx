import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Mini } from "../Typography/Mini";
import DividerHeader from "../Divider/DividerHeader";
import {
  StyledFilterBarInner,
  StyledFilterItem,
  StyledFilterItems,
} from "./StyledFilterBar";

export interface FilterItem {
  label: string;
  href: string;
  isActive: boolean;
}

interface FilterBarProps {
  label: string;
  filters: FilterItem[];
  className?: string;
}

const FilterBar = ({ label, filters, className }: FilterBarProps) => {
  return (
    <DividerHeader className={className}>
      <StyledFilterBarInner>
        <RevealAnimation delay={0.5}>
          <Mini className="uppercase">{label}</Mini>
        </RevealAnimation>
        <StyledFilterItems>
          {filters.map(({ label, href, isActive }, i) => (
            <RevealAnimation
              delay={i * 0.5 + 1}
              style={{ width: "auto" }}
              key={href}
            >
              <StyledFilterItem
                href={href}
                className={isActive ? "" : "inactive"}
              >
                <Mini>{label}</Mini>
              </StyledFilterItem>
            </RevealAnimation>
          ))}
        </StyledFilterItems>
      </StyledFilterBarInner>
    </DividerHeader>
  );
};

export default FilterBar;
