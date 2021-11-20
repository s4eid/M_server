const { getTestResults_f } = require("../../TestResult/getTestResults");
const { addTestResult_f } = require("../../TestResult/addTestResult");
const { getTestResult_f } = require("../../TestResult/getTestResult");
const {
  getTestResultStudent_f,
} = require("../../TestResult/getTestResultStudent");

const resolverTestResult = {
  Query: {
    async getTestResults(_, __, { pool }) {
      try {
        const data = await getTestResults_f(pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async getTestResult(_, { id }, { pool }) {
      try {
        const data = await getTestResult_f(id, pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async getTestResultStudent(_, { student_id }, { pool }) {
      try {
        const data = await getTestResultStudent_f(student_id, pool);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    async addTestResult(_, { addTestResultInput }, { pool }) {
      const quize_result = addTestResultInput.quize_result;
      const student_id = addTestResultInput.student_id;
      const test_id = addTestResultInput.test_id;
      try {
        const data = await addTestResult_f(
          quize_result,
          student_id,
          test_id,
          pool
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { resolverTestResult };
