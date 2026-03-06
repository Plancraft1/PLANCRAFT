import { getArticlesByCategory } from "../../lib/cms";
import DividerHeader from "../Divider/DividerHeader";
import Link from "../Link/Link";
import CardSmall from "../CardSmall/CardSmall";
import { CardsSmallWrapper } from "../CardSmall/StyledCardSmall";
import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Mini } from "../Typography/Mini";
import { Small } from "../Typography/Small";
import {
  RelatedArticlesLink,
  RelatedArticlesPerex,
  StyledRelatedArticles,
} from "./StyledRelatedArticles";

interface RelatedArticlesProps {
  category: string;
}

const RelatedArticles = async ({ category }: RelatedArticlesProps) => {
  const { items } = await getArticlesByCategory({
    categorySlug: category,
    limit: 3,
  });

  if (items.length === 0) {
    return null;
  }

  return (
    <StyledRelatedArticles>
      <DividerHeader>
        <Mini className="uppercase">Související články</Mini>
      </DividerHeader>
      <RevealAnimation>
        <RelatedArticlesPerex>
          <Small>
            Přečtěte si naše články k tématu a dozvíte se více o našem přístupu.
          </Small>
          <RelatedArticlesLink>
            <Link href="/clanky">
              <Mini className="uppercase">Všechny články</Mini>
            </Link>
          </RelatedArticlesLink>
        </RelatedArticlesPerex>
      </RevealAnimation>
      <CardsSmallWrapper>
        {items.map(({ article_title, _slug, article_cover }, i) => (
          <CardSmall
            key={_slug}
            delay={i * 0.5}
            href={`/clanek/${_slug}`}
            title={article_title}
            image={{
              src: article_cover?.url,
              width: article_cover?.width,
              height: article_cover?.height,
              alt: article_cover?.description || article_title,
            }}
          />
        ))}
      </CardsSmallWrapper>
    </StyledRelatedArticles>
  );
};

export default RelatedArticles;
