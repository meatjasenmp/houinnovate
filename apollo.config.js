module.exports = {
  client: {
    includes: ["./pages/api/**/*.ts"],
    tagName: "gql",
    globalTypesFile: "./types/graphql-global-types.ts",
    addTypename: true,
    service: {
      name: "houinnovate-service",
      localSchemaFile: "./graphql-schema.json",
      url: "https://innovate.blackgraystudio.com/graphql",
    },
  },
};
