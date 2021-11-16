const { getTests_f } = require("../../TestStudent/getTestsStudent");
const { getTest_f } = require("../../TestStudent/getTest");

const resolverTestStudent = {
  Query: {
    async testsStudent(_, __, { pool }) {
      const data = await getTests_f(pool);
      return data;
    },
    async testStudent(_, { id }, { pool }) {
      const data = await getTest_f(id, pool);
      return data;
    },
  },
};

module.exports = { resolverTestStudent };
