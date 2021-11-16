const { addTeacher_f } = require("../../Teacher/addTeacher");
const { getTeacher_f } = require("../../Teacher/getTeacher");
const { getTeacehrs_f } = require("../../Teacher/getTeachers");
const { deleteTeacher_f } = require("../../Teacher/deleteTeacher");
const { loginTeacher_f } = require("../../Teacher/loginTeacher");

const resolverTeacher = {
  Query: {
    async teachers(_, __, { pool }) {
      const data = await getTeacehrs_f(pool);
      return data;
    },
    async teacher(_, { id }, { pool }) {
      const data = getTeacher_f(id, pool);
      return data;
    },
  },
  Mutation: {
    async addTeacher(_, { first_name, last_name, email, password }, { pool }) {
      const data = await addTeacher_f(
        first_name,
        last_name,
        email,
        password,
        pool
      );
      return data;
    },
    async deleteTeacher(_, { id }, { pool }) {
      const data = await deleteTeacher_f(id, pool);
      return data;
    },
    async loginTeacher(_, { email, password }, { pool, res }) {
      const data = loginTeacher_f(email, password, pool, res);
      return data;
    },
  },
};

module.exports = { resolverTeacher };
