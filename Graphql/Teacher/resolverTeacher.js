const { addTeacher_f } = require("../../Teacher/addTeacher");
const { getTeacher_f } = require("../../Teacher/getTeacher");
const { getTeacehrs_f } = require("../../Teacher/getTeachers");
const { deleteTeacher_f } = require("../../Teacher/deleteTeacher");
const { loginTeacher_f } = require("../../Teacher/loginTeacher");

const resolverTeacher = {
  Query: {
    async teachers(parent, args, { pool }) {
      const data = await getTeacehrs_f(parent, args, { pool });
      return data;
    },
    async teacher(parent, { id }, { pool }) {
      const data = getTeacher_f(parent, { id }, { pool });
      return data;
    },
  },
  Mutation: {
    async addTeacher(parent, { name, email, password }, { pool }) {
      const data = await addTeacher_f(
        parent,
        { name, email, password },
        { pool }
      );
      return data;
    },
    async deleteTeacher(parent, { id }, { pool }) {
      const data = await deleteTeacher_f(parent, { id }, { pool });
      return data;
    },
    async loginTeacher(parent, { email, password }, { pool, res, req }) {
      const data = loginTeacher_f(
        parent,
        { email, password },
        { pool, req, res }
      );
      return data;
    },
  },
};

module.exports = { resolverTeacher };
