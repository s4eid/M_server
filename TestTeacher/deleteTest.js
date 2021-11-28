const deleteTest_f = async (id, pool) => {
  try {
    await pool.query("DELETE FROM test_result WHERE test_id=$1", [id]);
    const data = await pool.query(
      "DELETE FROM test WHERE test_id=$1 RETURNING test_id",
      [id]
    );
    console.log(data);
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteTest_f };
