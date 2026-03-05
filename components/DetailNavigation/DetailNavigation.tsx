"use client";

import DividerHeader from "../Divider/DividerHeader";
import Link from "../Link/Link";
import { Mini } from "../Typography/Mini";
import {
  DetailNavigationInner,
  StyledDetailNavigation,
} from "./StyledDetailNavigation";

interface DetailNavigationProps {
  backHref: string;
  backLabel: string;
  nextHref?: string;
  nextLabel?: string;
}

const DetailNavigation = ({
  backHref,
  backLabel,
  nextHref,
  nextLabel,
}: DetailNavigationProps) => {
  return (
    <StyledDetailNavigation>
      <DividerHeader className="flip">
        <DetailNavigationInner>
          <Link className="flip backlink" href={backHref}>
            {backLabel}
          </Link>

          {nextHref && nextLabel && <Link href={nextHref}>{nextLabel}</Link>}
        </DetailNavigationInner>
      </DividerHeader>
    </StyledDetailNavigation>
  );
};

export default DetailNavigation;
