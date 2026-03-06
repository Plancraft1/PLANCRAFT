"use client";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledAbout = styled.main`
  padding: 0 calc(1 * var(--gap-size));
`;

export const AboutValues = styled.div`
  display: grid;
  row-gap: calc(1 * var(--gap-size));
  margin-bottom: calc(2 * var(--gap-size));
`;

export const AboutTeam = styled.section``;

export const AboutTeamIntro = styled.div`
  display: grid;
`;

export const AboutTeamFigureBanner = styled.div`
  padding: 0 calc(1 * var(--gap-size));
`;

export const AboutTeamClaim = styled.div`
  display: grid;
  row-gap: calc(3 * var(--gap-size));
  margin: calc(5 * var(--gap-size)) 0;
  ${breakpoint.monitor} {
    margin: calc(4 * var(--gap-size)) 0 calc(5 * var(--gap-size));
  }
  ${breakpoint.tabletLandscape} {
    row-gap: calc(5 * var(--gap-size));
  }
`;

export const AboutTeamClaimHeader = styled.div`
  margin-left: calc(6 * var(--gap-size));
  ${breakpoint.monitor} {
    margin-left: calc(10 * var(--gap-size));
  }
  ${breakpoint.phone} {
    margin-left: 0px;
  }
`;

export const AboutTeamClaimInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  justify-items: start;
  column-gap: calc(2 * var(--gap-size));
  ${breakpoint.phone} {
    grid-template-columns: unset;
    row-gap: calc(2 * var(--gap-size));
  }
`;

export const AboutTeamClaimImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
