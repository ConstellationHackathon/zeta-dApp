import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLinkAvax = createHttpLink({
  uri: "https://api.studio.thegraph.com/query/60251/zetav2/v0.0.2", // reemplaza por tu endpoint de GraphQL
});
const httpLinkSepolia = createHttpLink({
  uri: "https://api.studio.thegraph.com/query/60251/zeta-sepolia/v0.0.2", // reemplaza por tu endpoint de GraphQL
});

const linkRouter = (operation: any) => {
  const operationName = operation.operationName;
  // Suponiendo que las operaciones para el endpoint 1 comienzan con "Public"
  return operationName.startsWith("Avax");
};
const splitLink = split(
  linkRouter, // Función que decide qué link usar
  httpLinkAvax, // Usa httpLink1 si linkRouter devuelve true
  httpLinkSepolia // Usa httpLink2 en caso contrario
);
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient: ApolloClient<NormalizedCacheObject> =
  new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

export default apolloClient;
