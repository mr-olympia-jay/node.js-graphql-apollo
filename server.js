const express = require('express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const path = require('path');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { ApolloServer } = require('apollo-server-express');

const loadedTypes = loadFilesSync('**/*', {
  extensions: ['graphql'],
});

const loadedResolvers = loadFilesSync(
  path.join(__dirname, '**/*.resolvers.js')
);

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: loadedTypes,
    resolvers: loadedResolvers,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app, path: '/graphql' });

  const port = 4000;
  app.listen(port, () => {
    console.log(
      `Running a GraphQL API server at http://localhost:${port}/graphql`
    );
  });
}

startApolloServer();
