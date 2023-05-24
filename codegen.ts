import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    ["[your_store_name]"]: {
      headers: {
        Authorization: "[your_public_key]",
      },
    },
  },
  documents: ["src/**/*.gql"],
  generates: {
    "./src/__generated__/sdk.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: true,
        preResolveTypes: false,
      },
    },
  },
};

export default config;
