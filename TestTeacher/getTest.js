const getTest_f = async (id, pool) => {
  try {
    const data = await pool.query(
      "SELECT * FROM test t INNER JOIN teacher c ON t.creator=c.teacher_id WHERE test_id=$1",
      [id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTest_f };
