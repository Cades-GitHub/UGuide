// const { gql } = require('apollo-server-express');

const typeDefs = `
  scalar DateTime

  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Guide {
    _id: ID!
    title: String!
    description: String!
    videoUrl: String!
    imageUrl: String!
    author: User
    createdAt: DateTime
  }

  input GuideInput {
    title: String!
    description: String!
    videoUrl: String!
  }

  input SignUpInput {
    username: String!
    email: String!
    password: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }

  type Mutation {
    createGuide(input: GuideInput!): Guide!
    updateGuide(id: ID!, input: GuideInput!): Guide!
    deleteGuide(id: ID!): ID!
    signUp(input: SignUpInput!): User!
    signIn(input: SignInInput!): String!
  }

  type Query {
    guides: [Guide!]!
    guide(id: ID!): Guide!
    me: User!
  }

  enum Role {
    ADMIN
    USER
  }

  directive @auth(requires: Role = USER) on OBJECT | FIELD_DEFINITION
`;

module.exports = typeDefs;
