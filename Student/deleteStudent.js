const deleteStudent_f = async (parent, { id }, { pool }) => {
  try {
    const data = await pool.query(
      "DELETE FROM student WHERE id=$1 RETURNING *",
      [id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteStudent_f };
