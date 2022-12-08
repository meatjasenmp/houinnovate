module.exports = {
  client: {
    includes: ["./api/**/*.ts"],
    tagName: "gql",
    globalTypesFile: "./types/graphql-global-types.ts",
    addTypename: true,
    service: {
      name: "houinnovate-service",
      localSchemaFile: "./graphql-schema.json",
      url: process.env.NEXT_PUBLIC_API_PRODUCTION_URL,
    },
  },
};
