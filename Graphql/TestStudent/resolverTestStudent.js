const { getTests_f } = require("../../TestTeacher/getTests");

const resolverTest = {
  Query: {
    async tests(parent, args, { pool }) {
      const data = await getTests_f(parent, args, { pool });
      return data;
    },
  },
};

module.exports = { resolverTest };
