import type { CodegenConfig } from "@graphql-codegen/cli";

// https://github.com/Shopify/hydrogen-ui/blob/f1cb723b81cf013da316eb7fa115822779ad0cbc/apps/nextjs/codegen.ts
const config: CodegenConfig = {
  overwrite: true,
  schema: "./node_modules/@shopify/hydrogen-react/storefront.schema.json",
  documents: "pages/**/*.tsx",
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
