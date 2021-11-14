const getStudents_f = async (parent, args, { pool, req }) => {
  try {
    const data = await pool.query("SELECT * FROM student");
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getStudents_f };
