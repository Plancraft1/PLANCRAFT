"use client";

import styled from "styled-components";
import Image from "next/image";
import { breakpoint } from "../../../../consts/breakpoints";
import { colors } from "../../../../consts/colors";
import { spaces } from "../../../../consts/spaces";

export const StyledArticle = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 calc(2 * var(--gap-size));
  color: ${colors.primary400};
  ${breakpoint.phone} {
    padding: 0 calc(1 * var(--gap-size));
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const ArticleCoverWrapper = styled.div`
  padding-top: 36px;
`;

export const ArticleHeader = styled.h1`
  font-size: 60px;

  ${breakpoint.tabletPortrait} {
    font-size: 36px;
  }

  ${breakpoint.phone} {
    font-size: 24px;
  }
`;

export const ArticleBlock = styled.div`
  h2,
  h3,
  h4 {
    padding-top: 28px;
    ${breakpoint.phone} {
      padding-top: 14px;
    }
  }

  h5,
  h6 {
    padding-top: 21px;
    ${breakpoint.phone} {
      padding-top: 14px;
    }
  }

  ul,
  ol,
  p {
    padding-top: 18px;
    ${breakpoint.phone} {
      padding-top: 14px;
    }
  }

  h2 {
    font-size: 32px;
    ${breakpoint.phone} {
      font-size: 24px;
    }
  }

  h3 {
    font-size: 28px;
    ${breakpoint.phone} {
      font-size: 24px;
    }
  }

  h4 {
    font-size: 24px;
    ${breakpoint.phone} {
      font-size: 21px;
    }
  }

  h5 {
    font-size: 21px;
    ${breakpoint.phone} {
      font-size: 18px;
    }
  }

  h6 {
    font-size: 18px;
    ${breakpoint.phone} {
      font-size: 14px;
    }
  }

  p {
    font-size: 18px;
    text-align: left !important;
    ${breakpoint.phone} {
      font-size: 14px;
    }
  }

  ul {
    font-size: 18px;
    padding-left: 2em;
    list-style: none;
    ${breakpoint.phone} {
      font-size: 14px;
    }

    li::before {
      content: "—";
      position: absolute;
      margin-left: -2em;
    }
  }

  ol {
    font-size: 18px;
    padding-left: 1.3em;
    ${breakpoint.phone} {
      font-size: 14px;
    }
  }

  img {
    padding-top: ${spaces.m}px;
    ${breakpoint.phone} {
      padding-top: ${spaces.xs}px;
    }
  }
`;

export const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${spaces.m}px;
  padding-top: ${spaces.s}px;
  font-size: 16px;
  ${breakpoint.phone} {
    font-size: 14px;
  }
`;

export const ArticleCategory = styled.span`
  background-color: ${colors.primary200};
  border-radius: 4px;
  padding: 2px 8px;
`;

export const ArticleImage = styled(Image)`
  width: 100%;
  height: auto;
`;
