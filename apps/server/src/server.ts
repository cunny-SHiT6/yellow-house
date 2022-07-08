import 'dotenv/config'
import 'reflect-metadata'
// import { ApolloServer } from 'apollo-server-express'
// import { buildSchema } from 'type-graphql'

import app from './app'


(async () => {
  // const apolloServer = new ApolloServer({
  //   schema: await buildSchema({
  //     resolvers: [
  //     ],
  //     globalMiddlewares: [
  //     ],
  //   }),
  //   context: ({ req, res }) => ({ req, res }),
  //   cache: 'bounded',
  //   csrfPrevention: true,
  //   introspection: true,
  // })

  // await apolloServer.start()

  // apolloServer.applyMiddleware({ app })

  app.listen(parseInt(process.env.PORT!) || 4000, process.env.HOST! || '0.0.0.0', () => {
    console.info(`Auth server started on ${process.env.HOST || '0.0.0.0'}:${process.env.PORT || 4000}`)
  })
})()