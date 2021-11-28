const { getTests_f } = require("../../TestTeacher/getTests");
const { getTest_f } = require("../../TestTeacher/getTest");
const { addTest_f } = require("../../TestTeacher/addTest");
const { deleteTest_f } = require("../../TestTeacher/deleteTest");
const { editTest_f } = require("../../TestTeacher/editTest");
const { getTeacherTests_f } = require("../../TestTeacher/getTeacherTests");
const {
  getTestsResultsTeacher_f,
} = require("../../TestTeacher/getTestResultTeacher");

const resolverTest = {
  Query: {
    async tests(_, __, { pool, res }) {
      const data = await getTests_f(pool);
      return data;
    },
    async test(_, { id }, { pool, res }) {
      const data = await getTest_f(id, pool);
      return data;
    },
    async getTeacherTests(_, { teacher_id }, { pool }) {
      const data = await getTeacherTests_f(teacher_id, pool);
      return data;
    },
    async getTestsResultsTeacher(_, { id }, { pool }) {
      const data = await getTestsResultsTeacher_f(id, pool);
      return data;
    },
  },

  Mutation: {
    async addTest(_, { title, creator, quize }, { pool }) {
      const data = await addTest_f(title, creator, quize, pool);
      return data;
    },
    async deleteTest(_, { id }, { pool }) {
      const data = await deleteTest_f(id, pool);
      return data;
    },
    async editTest(_, { editTestInput }, { pool }) {
      const data = await editTest_f(editTestInput, pool);
      return data;
    },
  },
};

module.exports = { resolverTest };
