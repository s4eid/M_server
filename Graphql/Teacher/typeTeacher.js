const { gql } = require("apollo-server-express");
const typeTeacher = gql`
  type Teacher {
    teacher_id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    teacher_createdat: String!
    picture: String
    role: String!
    refresh_token: String
  }
  type LogedInTeacher {
    accessToken: String!
    refreshToken: String!
  }
  type Query {
    teachers: [Teacher]!
    teacher(id: ID!): Teacher
  }
  type Mutation {
    addTeacher(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
    ): Teacher!
    deleteTeacher(id: ID!): Teacher
    loginTeacher(email: String!, password: String!): LogedInTeacher!
  }
`;

module.exports = { typeTeacher };
