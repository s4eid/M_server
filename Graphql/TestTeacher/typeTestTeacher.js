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
    test_id: ID!
    title: String!
    quize: [Quiz!]!
    createdat: String!
    creator: String!
    teacher_id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    picture: String
    role: String!
    refresh_token: String
  }
  type Query {
    tests: [Test]!
    test(id: ID!): Test
    getTeacherTests(teacher_id: ID!): Test
    testTeacher(teacher_id: ID!): Test
  }
  type Mutation {
    addTest(title: String!, creator: String!, quize: [testAdd]!): Test
    deleteTest(id: ID!): Test
    editTest(editTestInput: editTestInput!): Test
  }
`;

module.exports = { typeTest };
