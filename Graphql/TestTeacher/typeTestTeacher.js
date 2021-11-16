const { gql } = require("apollo-server-express");

const typeTest = gql`
  directive @authTeacher on FIELD_DEFINITION
  type Quiz {
    q: String!
    a: String!
    b: String!
    c: String!
    d: String!
    answerKey: String!
  }
  input testAdd {
    q: String!
    a: String!
    b: String!
    c: String!
    d: String!
    answerKey: String!
  }
  input editTestInput {
    id: ID!
    title: String!
    quize: [testAdd!]!
  }
  type Test {
    id: ID!
    title: String!
    quize: [Quiz!]!
    createdat: String!
    creator: String!
  }
  type Query {
    tests: [Test]! @authTeacher
    test(id: ID!): Test @authTeacher
  }
  type Mutation {
    addTest(title: String!, creator: String!, quize: [testAdd]!): Test
      @authTeacher
    deleteTest(id: ID!): Test @authTeacher
    editTest(editTestInput: editTestInput!): Test
  }
`;

module.exports = { typeTest };
