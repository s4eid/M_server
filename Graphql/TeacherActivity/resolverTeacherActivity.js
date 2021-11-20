const {
  getTeachersActivity_f,
} = require("../../TeacherActivity/getTeachersActivity");
const {
  addTeacherActivity_f,
} = require("../../TeacherActivity/addTeacherActivity");
const {
  updateTeacherActivity_f,
} = require("../../TeacherActivity/updateTeacherActivity");
const {
  getTeacherActivity_f,
} = require("../../TeacherActivity/getTeacherActivity");

const resolverTeacherActivity = {
  Query: {
    async getTeachersActivity(_, __, { pool }) {
      try {
        const data = await getTeachersActivity_f(pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async getTeacherActivity(_, { id }, { pool }) {
      try {
        const data = await getTeacherActivity_f(id, pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    async addTeacherActivity(_, { teacher }, { pool }) {
      try {
        const data = await addTeacherActivity_f(teacher, pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateTeacherActivity(_, { teacher, month }, { pool }) {
      try {
        const data = await updateTeacherActivity_f(teacher, month, pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { resolverTeacherActivity };
