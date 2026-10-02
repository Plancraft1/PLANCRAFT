"use client";

import { CookieSettingsLink } from "../CookieConsent/CookieSettingsLink";
import DividerHeader from "../Divider/DividerHeader";
import Link from "../Link/Link";
import { Mini } from "../Typography/Mini";
import {
  SimpleFooterDividerHeaderInner,
  StyledSimpleFooter,
} from "./StyledSimpleFooter";

interface SimpleFooterProps {}

const SimpleFooter = ({}: SimpleFooterProps) => {
  return (
    <StyledSimpleFooter>
      <DividerHeader className="flip big">
        <SimpleFooterDividerHeaderInner>
          <Mini>{`${new Date().getFullYear()} PLANCRAFT`}</Mini>
          <Mini>
            <CookieSettingsLink>Nastavení cookies</CookieSettingsLink>
          </Mini>
          <Mini className="tar">
            Made with Style & Ease by{" "}
            <Link
              noArrow
              href={"https://steezy.studio"}
              target="_blank"
              className="underline inline"
            >
              steezy.studio
            </Link>
          </Mini>
        </SimpleFooterDividerHeaderInner>
      </DividerHeader>
    </StyledSimpleFooter>
  );
};

export default SimpleFooter;
