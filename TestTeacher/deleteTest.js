const deleteTest_f = async (id, pool) => {
  try {
    await pool.query("DELETE FROM test_result WHERE test_id=$1");
    const data = await pool.query(
      "DELETE FROM test WHERE test_id=$1 RETURNING *",
      [id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteTest_f };
