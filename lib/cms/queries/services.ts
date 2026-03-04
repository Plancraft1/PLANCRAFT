import { gql } from "@apollo/client";

export const SERVICES_QUERY = gql`
  query Services($locale: String!, $limit: Int) {
    Services(locale: $locale, limit: $limit) {
      total
      items {
        _id
        _slug
        service_name
      }
    }
  }
`;
