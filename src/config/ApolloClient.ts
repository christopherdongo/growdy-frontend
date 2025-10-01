import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const Client = new ApolloClient({
    link: new HttpLink({
    uri: import.meta.env.VITE_API_URL_BACKEND,
  }),
  cache: new InMemoryCache(),
});
