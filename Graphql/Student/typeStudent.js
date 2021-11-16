const { gql } = require("apollo-server-express");
const typeStudent = gql`
  directive @authStudent on FIELD_DEFINITION
  type Student {
    student_id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    student_createdat: String!
    picture: String
    refresh_token: String
  }
  type LogedInStudent {
    accessToken: String!
    refreshToken: String!
  }
  type Query {
    students: [Student]!
    student(id: ID!): Student
  }
  type Mutation {
    addStudent(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
    ): Student!
    deleteStudent(id: ID!): Student
    loginStudent(email: String!, password: String!): LogedInStudent!
  }
`;

module.exports = { typeStudent };
