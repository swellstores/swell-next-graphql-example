import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/__generated__/sdk";
const client = new GraphQLClient("https://[your_store_name].swell.store/graphql", {
  headers: {
    Authorization: "[your_public_key]",
  },
});
export default getSdk(client);
