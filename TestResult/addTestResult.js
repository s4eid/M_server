const addTestResult_f = async (
  quize_result,
  result,
  student_id,
  test_id,
  pool
) => {
  const quize = await JSON.stringify(quize_result);
  try {
    const data = await pool.query(
      "INSERT INTO test_result(quize_result,result,student_id,test_id,test_result_id) VALUES ($1,$2,$3,$4,uuid_generate_v4()) RETURNING *",
      [quize, result, student_id, test_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addTestResult_f };
