"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledScrollFigureBanner = styled.div`
  display: grid;
  grid-template-columns: calc(0.55 * var(--column-count) * var(--gap-size)) auto;
  column-gap: calc(2 * var(--gap-size));
  align-items: center;
  height: 100%;
  overflow-y: hidden;
  ${breakpoint.tabletPortrait} {
    height: auto;
    margin: calc(6 * var(--gap-size)) 0;
    grid-template-columns: unset;
    row-gap: calc(3 * var(--gap-size));
  }
  ${breakpoint.phone} {
    margin: calc(5 * var(--gap-size)) 0 calc(2 * var(--gap-size));
  }
`;

export const ScrollFigureBannerContent = styled.div`
  display: grid;
  row-gap: calc(1 * var(--gap-size));
`;

export const ScrollFigureBannerCoverW = styled.div`
  height: 100%;
  position: relative;
  ${breakpoint.phone} {
    height: auto;
  }
`;

export const ScrollFigureBannerCoverWI = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${breakpoint.tabletPortrait} {
    position: static;
    height: auto;
    display: none;
    transform: none;
    &:first-child {
      display: block;
    }
  }
`;

export const ScrollFigureBannerCover = styled(Image)`
  width: 100%;
  height: 60%;
  object-fit: cover;
  aspect-ratio: 1.7;
  ${breakpoint.tabletPortrait} {
    height: auto;
  }
  ${breakpoint.phone} {
    height: auto;
  }
`;
