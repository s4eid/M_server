const { gql } = require("apollo-server-express");

const typeTestResult = gql`
  type QuizeResultType {
    q: String!
    a: String!
    b: String!
    c: String!
    d: String!
    answerKey: String!
  }
  input Quize {
    q: String!
    a: String!
    b: String!
    c: String!
    d: String!
    answerKey: String!
  }
  input addTestResultInput {
    result: Int!
    quize_result: [Quize!]!
    student_id: ID!
    test_id: ID!
  }
  type TestResultAdded {
    test_result_id: ID!
    test_result_createdat: String!
    quize_result: [QuizeResultType]!
    result: Int!
    test_id: ID!
    student_id: ID!
  }
  type TestResult {
    test_result_id: ID!
    test_result_createdat: String!
    quize_result: [QuizeResultType!]!
    result: Int!
    test_id: ID!
    student_id: ID!
    title: String!
    quize: [QuizeResultType!]!
    test_createdat: String!
    creator: String!
    first_name: String!
    last_name: String!
    email: String!
    student_createdat: String!
    picture: String
  }
  type Query {
    getTestResults: [TestResult!]!
    getTestResult(id: ID!): TestResult!
    getTestResultStudent(student_id: ID!): [TestResult!]!
  }
  type Mutation {
    addTestResult(addTestResultInput: addTestResultInput!): TestResultAdded
  }
`;

module.exports = { typeTestResult };
