const { gql } = require("apollo-server-express");

const typeTest = gql`
  type Quiz {
    q: String!
    a: String!
    b: String!
    c: String!
    d: String
  }
  type Test {
    id: ID!
    title: String!
    quize: [Quiz]
    createdat: String!
    creator: String!
  }
  type Query {
    tests: [Test]!
    test(id: ID!): Test
  }
`;

module.exports = { typeTest };
