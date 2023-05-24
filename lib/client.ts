import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/__generated__/sdk";
const client = new GraphQLClient("[your_store_name]", {
  headers: {
    Authorization: "[your_public_key]",
  },
});
export default getSdk(client);
