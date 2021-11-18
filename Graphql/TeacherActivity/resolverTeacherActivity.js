const {
  getTeacherActivity_f,
} = require("../../TeacherActivity/getTeacherActivity");
const resolverTeacherActivity = {
  Query: {
    async getTeacherActivity(_, __, { pool }) {
      try {
        const data = await getTeacherActivity_f(pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { resolverTeacherActivity };
