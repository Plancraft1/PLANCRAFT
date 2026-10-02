"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";
import { spaces } from "../../consts/spaces";

export const StyledFooter = styled.footer`
  background-color: ${colors.primary400};
  padding: calc(2 * var(--gap-size)) calc(1 * var(--gap-size))
    calc(1 * var(--gap-size));
  padding-bottom: 0;
`;

export const FooterContact = styled.div`
  display: grid;
  gap: calc(2 * var(--gap-size));
  grid-template-columns: 1fr minmax(600px, 1fr) 1fr;
  grid-template-areas: "text links address";
  padding: calc(2 * var(--gap-size)) calc(1 * var(--gap-size));
  ${breakpoint.smallNotebook} {
    grid-template-columns: 1fr minmax(400px, 1fr) minmax(250px, 1fr);
  }
  ${breakpoint.tabletLandscape} {
    grid-template-columns: 1fr minmax(350px, 1fr) minmax(200px, 1fr);
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text links";
    padding: calc(3 * var(--gap-size)) calc(1 * var(--gap-size));
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    grid-template-areas: "text" "links";
    padding: calc(3 * var(--gap-size)) 0px;
  }
`;

export const FooterContactText = styled.div`
  grid-area: text;
`;

export const FooterContactLinks = styled.div`
  grid-area: links;
`;

export const FooterContactAddress = styled.div`
  grid-area: address;
  ${breakpoint.tabletPortrait} {
    display: none;
  }
`;

export const FooterLogo = styled.div`
  padding: calc(2 * var(--gap-size)) calc(1 * var(--gap-size));
  ${breakpoint.tabletPortrait} {
    padding: calc(4 * var(--gap-size)) calc(1 * var(--gap-size));
  }
  ${breakpoint.phone} {
    padding: calc(4 * var(--gap-size)) 0px;
  }
`;

export const FooterCopywrite = styled.div`
  display: flex;
  justify-content: space-between;
  padding: calc(1 * var(--gap-size)) calc(1 * var(--gap-size));
  ${breakpoint.phone} {
    padding: calc(1 * var(--gap-size)) 0px;
    gap: calc(1 * var(--gap-size));
  }
`;

export const FooterLegalLinks = styled.div`
  display: flex;
  gap: calc(1 * var(--gap-size));
  ${breakpoint.phone} {
    flex-direction: column;
    gap: 0;
  }
`;

export const FooterPublicity = styled.div`
  display: flex;
  background-color: ${colors.white};
  justify-content: space-between;
  gap: calc(3 * var(--gap-size));
  margin-top: calc(1 * var(--gap-size));
  margin-left: ${-1 * spaces.l}px;
  padding: calc(1 * var(--gap-size)) calc(2 * var(--gap-size));
  margin: 0 calc(-1 * var(--gap-size));
  ${breakpoint.tabletPortrait} {
    margin-top: calc(2 * var(--gap-size));
    gap: calc(2 * var(--gap-size));
    flex-direction: column;
  }
  ${breakpoint.phone} {
    padding: calc(1 * var(--gap-size)) calc(1 * var(--gap-size));
  }
`;

export const PublicityLogos = styled.div`
  display: flex;
  align-items: center;
  gap: calc(2 * var(--gap-size));
  ${breakpoint.smallNotebook} {
    gap: calc(3 * var(--gap-size));
  }
  ${breakpoint.phone} {
    align-items: start;
    gap: calc(2 * var(--gap-size));
  }
  ${breakpoint.smallPhone} {
    flex-direction: column;
  }
`;

export const PublicityLogo = styled.img`
  height: 50px;
  ${breakpoint.smallNotebook} {
    height: 40px;
  }
  ${breakpoint.phone} {
    height: 30px;
  }
`;
