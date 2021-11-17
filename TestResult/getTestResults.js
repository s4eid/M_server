const getTestResults_f = async (pool) => {
  try {
    const data = await pool.query(
      "SELECT * FROM test_result t INNER JOIN student s ON t.student_id=s.student_id INNER JOIN test te ON t.test_id=te.test_id"
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTestResults_f };
