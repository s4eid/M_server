const { addStudent_f } = require("../../Student/addStudent");
const { deleteStudent_f } = require("../../Student/deleteStudent");
const { getStudent_f } = require("../../Student/getStudent");
const { getStudents_f } = require("../../Student/getStudents");
const { loginStudent_f } = require("../../Student/loginStudent");

const resolverStudent = {
  Query: {
    async students(parent, args, { pool, req }) {
      const data = await getStudents_f(parent, args, { pool });
      return data;
    },
    async student(parent, { id }, { pool }) {
      const data = getStudent_f(parent, { id }, { pool });
      return data;
    },
  },
  Mutation: {
    async addStudent(parent, { name, email, password }, { pool }) {
      const data = await addStudent_f(
        parent,
        { name, email, password },
        { pool }
      );
      return data;
    },
    async deleteStudent(parent, { id }, { pool }) {
      const data = await deleteStudent_f(parent, { id }, { pool });
      return data;
    },
    async loginStudent(parent, { email, password }, { pool, res, req }) {
      const data = loginStudent_f(
        parent,
        { email, password },
        { pool, req, res }
      );
      return data;
    },
  },
};

module.exports = { resolverStudent };
