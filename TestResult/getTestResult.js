const getTestResult_f = async (id, pool) => {
  try {
    const data = await pool.query(
      "SELECT * FROM test_result t INNER JOIN student s ON t.student_id=s.student_id INNER JOIN test te ON t.test_id=te.test_id WHERE test_result_id=$1",
      [id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTestResult_f };
