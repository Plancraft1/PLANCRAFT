import { gql } from "@apollo/client";

export const ARTICLE_CATEGORIES_QUERY = gql`
  query ArticleCategories($locale: String!, $limit: Int) {
    ArticleCategories(locale: $locale, limit: $limit) {
      total
      items {
        _id
        _slug
        _changed_on
        article_category_name
      }
    }
  }
`;
