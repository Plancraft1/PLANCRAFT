import { gql } from "@apollo/client";

export const PROJECTS_QUERY = gql`
  query Query(
    $where: ProjectWhereInput
    $limit: Int
    $skip: Int
    $coverImageWidth: Int
    $coverImageHeight: Int
    $coverImageFormat: String
    $coverImageCropPreset: String
    $detailImageWidth: Int
    $detailImageHeight: Int
    $detailImageFormat: String
  ) {
    Projects(where: $where, limit: $limit, skip: $skip, locale: "cs-CZ") {
      total
      items {
        project_name
        project_table {
          table_body
          table_header
          _id
        }
        project_description
        project_cover {
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
        project_body {
          ... on Text {
            body
            html
            text
            _id
            format
          }
          ... on ImagesRow {
            __typename
            _id
            image {
              width
              height
              url(
                width: $detailImageWidth
                height: $detailImageHeight
                format: $detailImageFormat
              )
              description
            }
          }
        }
        is_featured
        _id
        _slug
        project_category {
          service_name
          _slug
        }
        project_realization
        project_client_quote
        project_client_quote_name
        next_project {
          _slug
          project_name
        }
      }
    }
  }
`;
