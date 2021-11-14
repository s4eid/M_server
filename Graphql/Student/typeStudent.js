const { gql } = require("apollo-server-express");
const typeStudent = gql`
  directive @authStudent on FIELD_DEFINITION
  type Student {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdat: String!
    picture: String
    refresh_token: String
  }
  type LogedInStudent {
    accessToken: String!
    refreshToken: String!
  }
  type Query {
    students: [Student]! @authStudent
    student(id: ID!): Student
  }
  type Mutation {
    addStudent(name: String!, email: String!, password: String!): Student!
    deleteStudent(id: ID!): Student
    loginStudent(email: String!, password: String!): LogedInStudent!
  }
`;

module.exports = { typeStudent };
