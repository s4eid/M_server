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
    getTeacherActivity: ActivityType
  }
`;

module.exports = { typeTeacherActivity };
