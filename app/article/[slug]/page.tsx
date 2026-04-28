import { Metadata } from "next";
import { notFound } from "next/navigation";
import parse, { Element, HTMLReactParserOptions } from "html-react-parser";
import { getArticleBySlug, getArticles } from "../../../lib/cms";
import type { _Prepr_Types } from "../../../gql/types";
import {
  ArticleBlock,
  ArticleCoverWrapper,
  ArticleHeader,
  ArticleImage,
  ArticleCategory,
  ArticleMeta,
  StyledArticle,
} from "./(client)/StyledArticle";
import { formatDate } from "../../../helpers/formatDate";
import RevealAnimation from "../../../components/TextAnimation/RevealAnimation";
import DetailNavigation from "../../../components/DetailNavigation/DetailNavigation";

export async function generateStaticParams() {
  const { items } = await getArticles();
  return items.map((article) => ({ slug: article._slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Clanek nenalezen" };
  }

  const { article_title, article_cover } = article;

  return {
    title: `Clanek\u2002|\u2002${article_title}`,
    openGraph: {
      images: article_cover?.url,
      title: article_title ?? undefined,
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const parserOptions: HTMLReactParserOptions = {
  replace(domNode) {
    if (domNode instanceof Element && domNode.name === "img") {
      const { src, alt, width, height } = domNode.attribs;
      return (
        <ArticleImage
          src={src}
          alt={alt ?? ""}
          width={Number(width) || 800}
          height={Number(height) || 600}
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      );
    }
  },
};

function renderBlock(block: _Prepr_Types, index: number) {
  switch (block.__typename) {
    case "Text":
      if (!block.html) return null;
      return (
        <ArticleBlock key={block._id}>
          <RevealAnimation>{parse(block.html, parserOptions)}</RevealAnimation>
        </ArticleBlock>
      );

    case "Assets":
      return (
        <ArticleBlock key={index}>
          <RevealAnimation>
            {block.items?.map((asset) =>
              asset?.url ? (
                <ArticleImage
                  key={asset._id}
                  src={asset.url}
                  alt={asset.description ?? ""}
                  width={asset.width ?? 800}
                  height={asset.height ?? 600}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              ) : null
            )}
          </RevealAnimation>
        </ArticleBlock>
      );

    default:
      return null;
  }
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <StyledArticle>
      <ArticleHeader>{article.article_title}</ArticleHeader>
      <ArticleMeta>
        {article.article_category?.map((cat) => (
          <ArticleCategory key={cat._slug}>
            {cat.article_category_name}
          </ArticleCategory>
        ))}
        {article._publish_on && (
          <span>Publikováno {formatDate(article._publish_on)}</span>
        )}
      </ArticleMeta>
      {article.article_cover?.url && (
        <ArticleCoverWrapper>
          <ArticleImage
            src={article.article_cover.url}
            alt={
              article.article_cover.description ?? article.article_title ?? ""
            }
            width={article.article_cover.width ?? 1200}
            height={article.article_cover.height ?? 675}
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </ArticleCoverWrapper>
      )}
      {article.article_content?.map(
        (block, index) => block && renderBlock(block, index)
      )}
      <DetailNavigation
        backHref="/articles"
        backLabel="Zpět na články"
        nextHref={
          article.article_next_articles?.[0]
            ? `/article/${article.article_next_articles[0]._slug}`
            : undefined
        }
        nextLabel={
          article.article_next_articles?.[0]
            ? `Další článek: ${article.article_next_articles[0].article_title}`
            : undefined
        }
      />
    </StyledArticle>
  );
};

export default page;
