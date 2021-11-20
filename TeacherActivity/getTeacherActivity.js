const getTeacherActivity_f = async (id, pool) => {
  try {
    const data = await pool.query(
      "SELECT * FROM teacher_activity WHERE teacher_id=$1",
      [id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTeacherActivity_f };
