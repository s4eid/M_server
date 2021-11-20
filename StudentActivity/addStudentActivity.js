const addStudentActivity_f = async (student, pool) => {
  try {
    const data = await pool.query(
      "INSERT INTO student_activity(student_id,student_activity_id) VALUES($1,uuid_generate_v4()) RETURNING *",
      [student]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addStudentActivity_f };
