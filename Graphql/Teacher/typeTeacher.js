const { gql } = require("apollo-server-express");
const typeTeacher = gql`
  type Teacher {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdat: String!
    picture: String
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
    addTeacher(name: String!, email: String!, password: String!): Teacher!
    deleteTeacher(id: ID!): Teacher
    loginTeacher(email: String!, password: String!): LogedInTeacher!
  }
`;

module.exports = { typeTeacher };
