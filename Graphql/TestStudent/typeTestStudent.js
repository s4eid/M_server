const { gql } = require("apollo-server-express");

const typeTest = gql`
  type Test {
    id: ID!
    title: String!
    quize: String!
    title: String!
    createdat: String!
    creator: String!
  }
  type Query {
    tests: [Test]!
    test(id: ID!): Test
  }
`;

module.exports = { typeTest };
