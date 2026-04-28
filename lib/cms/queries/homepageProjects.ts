import { gql } from "@apollo/client";

export const HOMEPAGE_PROJECTS_QUERY = gql`
  query Query(
    $coverImageWidth: Int
    $coverImageHeight: Int
    $coverImageFormat: String
    $coverImageCropPreset: String
  ) {
    HomepageProjects(locale: "cs-CZ") {
      homepageprojects {
        project_name
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
        _id
        _slug
        project_category {
          service_name
          _slug
        }
        project_realization
      }
    }
  }
`;
