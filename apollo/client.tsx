import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let client: ApolloClient | null = null;

function getClient() {
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
      }),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "no-cache",
          errorPolicy: "ignore",
        },
        query: {
          fetchPolicy: "no-cache",
          errorPolicy: "all",
        },
      },
    });
  }

  return client;
}

export const revalidate = {
  context: {
    fetchOptions: {
      next: { revalidate: 5 },
    },
  },
};

export default getClient;
