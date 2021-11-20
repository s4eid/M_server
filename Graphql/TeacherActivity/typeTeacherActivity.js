const { gql } = require("apollo-server-express");

const typeTeacherActivity = gql`
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
    getTeachersActivity: [ActivityType]!
    getTeacherActivity(id: ID!): ActivityType
  }
  type Mutation {
    addTeacherActivity(teacher: ID!): ActivityType
    updateTeacherActivity(teacher: ID!, month: String!): ActivityType
  }
`;

module.exports = { typeTeacherActivity };
