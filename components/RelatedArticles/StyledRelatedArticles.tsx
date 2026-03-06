"use client";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledRelatedArticles = styled.section`
  margin-top: 120px;

  ${breakpoint.phone} {
    margin-top: 60px;
  }
`;

export const RelatedArticlesPerex = styled.div`
  max-width: 600px;
  margin: 60px var(--gap-size) 60px;

  ${breakpoint.phone} {
    margin: 30px 0 60px;
  }
`;

export const RelatedArticlesLink = styled.div`
  margin-top: 30px;
`;
