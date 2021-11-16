const { addStudent_f } = require("../../Student/addStudent");
const { deleteStudent_f } = require("../../Student/deleteStudent");
const { getStudent_f } = require("../../Student/getStudent");
const { getStudents_f } = require("../../Student/getStudents");
const { loginStudent_f } = require("../../Student/loginStudent");

const resolverStudent = {
  Query: {
    async students(_, __, { pool }) {
      const data = await getStudents_f(pool);
      return data;
    },
    async student(_, { id }, { pool }) {
      const data = getStudent_f(id, pool);
      return data;
    },
  },
  Mutation: {
    async addStudent(_, { name, email, password }, { pool }) {
      const data = await addStudent_f(name, email, password, pool);
      return data;
    },
    async deleteStudent(_, { id }, { pool }) {
      const data = await deleteStudent_f(id, pool);
      return data;
    },
    async loginStudent(_, { email, password }, { pool, res }) {
      const data = loginStudent_f(email, password, pool, res);
      return data;
    },
  },
};

module.exports = { resolverStudent };
