const updateTeacherActivity_f = async (teacher, month, pool) => {
  try {
    const data = await pool.query(
      `UPDATE teacher_activity SET ${month}=teacher_activity.${month}+1 WHERE teacher_id=$1 RETURNING *`,
      [teacher]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateTeacherActivity_f };
