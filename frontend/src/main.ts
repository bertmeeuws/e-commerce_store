import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createHttpLink, HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { DefaultApolloClient } from "@vue/apollo-composable";
import VueApollo from "vue-apollo";
import { Plugin } from "vue-fragment";

const getHeaders = () => {
  const headers: any = {};
  const token = window.localStorage.getItem("apollo-token");
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};
// Create an http link:
/*
const link = new HttpLink({
  uri: "http://localhost:3000",
  fetch,
  headers: getHeaders(),
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true,
  }),
});

const apolloProvider = new VueApollo({
  defaultClient: client,
});



const defaultClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://localhost:3000",
  cache: new InMemoryCache(),
});
*/

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:3000/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render() {
    return h(App);
  },
})
  .use(store)
  .use(router)
  .use(Plugin)
  .mount("#app");
