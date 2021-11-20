const updateStudentActivity_f = async (student, month, pool) => {
  try {
    const data = await pool.query(
      `UPDATE student_activity SET ${month}=student_activity.${month}+1 WHERE student_id=$1 RETURNING *`,
      [student]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateStudentActivity_f };
