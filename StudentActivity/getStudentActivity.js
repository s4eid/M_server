const getStudentActivity_f = async (pool) => {
  try {
    const data = await pool.query("SELECT * FROM student_activity");
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getStudentActivity_f };
