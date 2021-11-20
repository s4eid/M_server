const { gql } = require("apollo-server-express");

const typeStudentActivity = gql`
  type ActivityType {
    teacher_activity_id: ID!
    ocak: Int
    subat: Int
    mart: Int
    nisan: Int
    mayis: Int
    haziran: Int
    temmuz: Int
    agustos: Int
    eylul: Int
    ekim: Int
    kasim: Int
    aralik: Int
  }
  type Query {
    getStudentsActivity: [ActivityType]!
    getStudentActivity(id: ID!): ActivityType
  }
  type Mutation {
    addStudentActivity(student: ID!): ActivityType
    updateStudentActivity(month: String!, student: String!): ActivityType
  }
`;
module.exports = { typeStudentActivity };
