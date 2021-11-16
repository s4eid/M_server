const editTest_f = async (editTestInput, pool) => {
  const title = editTestInput.title;
  const quize = JSON.stringify(editTestInput.quize);
  const id = editTestInput.id;
  try {
    const data = await pool.query(
      "UPDATE test SET title=$1, quize=$2 WHERE test_id=$3 RETURNING *",
      [title, quize, id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { editTest_f };
