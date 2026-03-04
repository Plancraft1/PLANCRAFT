"use client";

import { useAction } from "next-safe-action/hooks";
import { useParams } from "next/navigation";
import { Fragment, useState } from "react";
import type { Article, Articles } from "../../gql/types";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import GridCard from "../GridCard/GridCard";
import RevealAnimation from "../TextAnimation/RevealAnimation";
import { formatDate } from "../../helpers/formatDate";
import { loadMoreArticlesAction } from "../../app/articles/[[...category]]/(client)/actions";
import { GridCardW, LoadMoreW, StyledArticlesGrid } from "./StyledArticlesGrid";

interface ArticlesGridProps {
  articles: Articles;
  totalCount: number;
}

export const articlesPerPage = 6;

const ArticlesGrid = ({
  articles: initialArticles,
  totalCount,
}: ArticlesGridProps) => {
  const [articles, setArticles] = useState<Article[]>(initialArticles.items);
  const [skip, setSkip] = useState<number>(articlesPerPage);
  const query = useParams<{ category: string[] }>();

  const { execute, isPending } = useAction(loadMoreArticlesAction, {
    onSuccess: ({ data }) => {
      if (data) {
        setSkip((p) => p + articlesPerPage);
        setArticles((p) => [...p, ...data.items]);
      }
    },
  });

  const handleLoadMore = () => {
    execute({
      skip,
      limit: articlesPerPage,
      category: query.category,
    });
  };

  return (
    <StyledArticlesGrid>
      {articles.map(
        (
          {
            article_title,
            _slug,
            _publish_on,
            article_category,
            article_cover,
          },
          i
        ) => (
          <Fragment key={_slug}>
            <RevealAnimation>
              <GridCardW>
                <GridCard
                  title={article_title}
                  href={`/clanek/${_slug}`}
                  tags={
                    article_category?.map((cat) => cat.article_category_name) ??
                    []
                  }
                  detail={`Publikováno ${formatDate(_publish_on)}`}
                  ctaLabel="Číst článek"
                  image={{
                    src: article_cover?.url,
                    width: article_cover?.width,
                    height: article_cover?.height,
                    alt: article_cover?.description || article_title,
                  }}
                />
              </GridCardW>
            </RevealAnimation>
            {!(i === articles.length) && <Divider hidePlus />}
          </Fragment>
        )
      )}
      {totalCount > articles.length && (
        <LoadMoreW>
          <RevealAnimation noCrop>
            <Button onClick={handleLoadMore}>
              {isPending ? "Načítám" : "Další články"}
            </Button>
          </RevealAnimation>
        </LoadMoreW>
      )}
    </StyledArticlesGrid>
  );
};

export default ArticlesGrid;
