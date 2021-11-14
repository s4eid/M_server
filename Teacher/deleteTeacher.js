const deleteTeacher_f = async (parent, { id }, { pool }) => {
  try {
    const data = await pool.query(
      "DELETE FROM teacher WHERE id=$1 RETURNING *",
      [id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteTeacher_f };
