const { gql } = require("apollo-server-express");

const typeTest = gql`
  directive @authTeacher on FIELD_DEFINITION
  type Quiz {
    q: String!
    a: String!
    b: String!
    c: String!
    d: String!
    image: String
    answerKey: String!
  }
  input testAdd {
    q: String!
    a: String!
    b: String!
    c: String!
    d: String!
    image: String
    answerKey: String!
  }
  input editTestInput {
    id: ID!
    title: String!
    quize: [testAdd!]!
  }
  type TestResults {
    test_result_id: ID!
    first_name: String!
    last_name: String!
    result: Int!
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
    password: String!
    picture: String
    role: String!
    refresh_token: String
  }
  type DeletedTest {
    test_id: ID!
  }
  type TeacherTests {
    test_id: ID!
    title: String!
    quize: [Quiz!]!
    test_createdat: String!
    creator: String!
  }
  type Query {
    tests: [Test]! @authTeacher
    test(id: ID!): Test
    getTeacherTests(teacher_id: ID!): [TeacherTests]! @authTeacher
    testTeacher(teacher_id: ID!): Test @authTeacher
    getTestsResultsTeacher(id: ID!): [TestResults] @authTeacher
  }
  type Mutation {
    addTest(title: String!, creator: ID!, quize: [testAdd]!): Test
    deleteTest(id: ID!): DeletedTest
    editTest(editTestInput: editTestInput!): Test
  }
`;

module.exports = { typeTest };
