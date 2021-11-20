const {
  addStudentActivity_f,
} = require("../../StudentActivity/addStudentActivity");
const {
  getStudentsActivity_f,
} = require("../../StudentActivity/getStudentsActivity");
const {
  updateStudentActivity_f,
} = require("../../StudentActivity/updateStudentActivity");
const {
  getStudentActivity_f,
} = require("../../StudentActivity/getStudentActivity");
const resolverStudentActivity = {
  Query: {
    async getStudentsActivity(_, __, { pool }) {
      try {
        const data = await getStudentsActivity_f(pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async getStudentActivity(_, { id }, { pool }) {
      try {
        const data = await getStudentActivity_f(id, pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    async updateStudentActivity(_, { month, student }, { pool }) {
      try {
        const data = await updateStudentActivity_f(student, month, pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async addStudentActivity(_, { student }, { pool }) {
      try {
        const data = await addStudentActivity_f(student, pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
module.exports = { resolverStudentActivity };
