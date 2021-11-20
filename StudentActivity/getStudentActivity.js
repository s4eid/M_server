const getStudentActivity_f = async (id, pool) => {
  try {
    const data = await pool.query(
      "SELECT * FROM student_activity WHERE student_id=$1",
      [id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getStudentActivity_f };
