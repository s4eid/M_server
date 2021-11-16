const { gql } = require("apollo-server-express");

const typeTestStudent = gql`
  directive @authStudent on FIELD_DEFINITION
  type Quiz {
    q: String!
    a: String!
    b: String!
    c: String!
    d: String!
    answerKey: String!
  }
  type Test {
    test_id: ID!
    title: String!
    quize: [Quiz!]!
    test_createdat: String!
    creator: String!
    teacher_id: ID!
    first_name: String!
    last_name: String!
    email: String!
    picture: String
    role: String!
  }
  type Query {
    testsStudent: [Test]!
    testStudent(id: ID!): Test
  }
`;

module.exports = { typeTestStudent };
