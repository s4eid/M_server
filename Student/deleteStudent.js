const deleteStudent_f = async (id, pool) => {
  try {
    const data = await pool.query(
      "DELETE FROM student WHERE student_id=$1 RETURNING *",
      [id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteStudent_f };
