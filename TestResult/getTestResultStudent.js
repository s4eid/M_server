const getTestResultStudent_f = async (student_id, pool) => {
  try {
    const data = await pool.query(
      "SELECT * FROM test_result t INNER JOIN student s ON t.student_id=s.student_id INNER JOIN test te ON t.test_id=te.test_id WHERE t.student_id=$1",
      [student_id]
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getTestResultStudent_f };
