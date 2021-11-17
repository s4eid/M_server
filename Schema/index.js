const { makeExecutableSchema } = require("@graphql-tools/schema");
const {
  authStudentDirective,
} = require("../Directives/auth_student_Directive");
const {
  authTeacherDirective,
} = require("../Directives/auth_teacher_Directive");
const { resolverTeacher } = require("../Graphql/Teacher/resolverTeacher");
const { typeTeacher } = require("../Graphql/Teacher/typeTeacher");
const { resolverStudent } = require("../Graphql/Student/resolverStudent");
const { typeStudent } = require("../Graphql/Student/typeStudent");
const { resolverTest } = require("../Graphql/TestTeacher/resolverTestTeacher");
const { typeTest } = require("../Graphql/TestTeacher/typeTestTeacher");
const {
  resolverTestStudent,
} = require("../Graphql/TestStudent/resolverTestStudent");
const { typeTestStudent } = require("../Graphql/TestStudent/typeTestStudent");
const {
  resolverTestResult,
} = require("../Graphql/TestResult/resolverTestResult");
const { typeTestResult } = require("../Graphql/TestResult/typeTestResult");

let schema = makeExecutableSchema({
  typeDefs: [
    typeTeacher,
    typeStudent,
    typeTest,
    typeTestStudent,
    typeTestResult,
  ],
  resolvers: [
    resolverTeacher,
    resolverStudent,
    resolverTest,
    resolverTestStudent,
    resolverTestResult,
  ],
});

schema = authStudentDirective(schema, "authStudent");
schema = authTeacherDirective(schema, "authTeacher");

module.exports = { schema };
