const {
  getStudentActivity_f,
} = require("../../StudentActivity/getStudentActivity");

const resolverStudentActivity = {
  Query: {
    async getStudentActivity(_, __, { pool }) {
      try {
        const data = await getStudentActivity_f(pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
module.exports = { resolverStudentActivity };
