import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
  query Articles(
    $where: ArticleWhereInput
    $limit: Int
    $skip: Int
    $sort: ArticleSortInput
    $coverImageWidth: Int
    $coverImageHeight: Int
    $coverImageFormat: String
    $coverImageCropPreset: String
  ) {
    Articles(
      where: $where
      limit: $limit
      skip: $skip
      sort: $sort
      locale: "cs-CZ"
    ) {
      total
      items {
        article_title
        article_cover {
          url(
            width: $coverImageWidth
            height: $coverImageHeight
            format: $coverImageFormat
            preset: $coverImageCropPreset
          )
          description
          width
          height
        }
        article_content {
          ... on Text {
            __typename
            body
            html
            text
            _id
            format
          }
          ... on Assets {
            __typename
            _type
            items {
              _id
              url
              width
              height
              description
            }
          }
          ... on ImagesRow {
            __typename
            _id
            image {
              _id
              width
              height
              url
              description
            }
          }
          ... on TableRow {
            __typename
            _id
            table_header
            table_body
          }
        }
        article_category {
          article_category_name
          _slug
        }
        article_next_articles {
          article_title
          _slug
          article_cover {
            url(
              width: $coverImageWidth
              height: $coverImageHeight
              format: $coverImageFormat
              preset: $coverImageCropPreset
            )
            description
            width
            height
          }
        }
        _id
        _slug
        _read_time
        _publish_on
      }
    }
  }
`;
