const deleteTest_f = async (id, pool) => {
  try {
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
