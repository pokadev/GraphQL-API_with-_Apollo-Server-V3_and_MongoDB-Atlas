const { ApolloServer } = require ('apollo-server');
const mongoose = require ('mongoose')

const MONGODB = "mongodb://localhost:27017/recipes"

const typeDefs = require ('./graphql/typeDefs')
const resolvers = require ('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

mongoose.connect(MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB")
  return server.listen({port: 4000})
  }).then((res) => {
    console.log(`🚀  Server ready at ${res.url}`)
})