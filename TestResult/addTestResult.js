const addTestResult_f = async (quize_result, student_id, test_id, pool) => {
  const quize = await JSON.stringify(quize_result);
  const length = quize_result.length;
  const count = 100 / length;
  var number = 0;
  try {
    const exist = await pool.query(
      "SELECT * FROM test_result WHERE(test_id=$1 AND student_id=$2)",
      [test_id, student_id]
    );
    if (exist.rowCount > 0) {
      return null;
    }
    for (let i = 0; i < quize_result.length; i++) {
      const answer = quize_result[i].answer;
      const answerKey = quize_result[i].answerKey;
      if (answer === answerKey) {
        number = +count;
      }
    }
    const data = await pool.query(
      "INSERT INTO test_result(quize_result,result,student_id,test_id,test_result_id) VALUES ($1,$2,$3,$4,uuid_generate_v4()) RETURNING *",
      [quize, number, student_id, test_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addTestResult_f };
