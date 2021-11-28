const getTestsResultsTeacher_f = async (id, pool) => {
  try {
    const data = await pool.query(
      "SELECT result,first_name,last_name,test_result_id FROM test_result INNER JOIN student ON test_result.student_id=student.student_id WHERE test_id=$1",
      [id]
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTestsResultsTeacher_f };
