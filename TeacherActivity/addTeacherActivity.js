const addTeacherActivity_f = async (teacher, pool) => {
  try {
    const data = await pool.query(
      "INSERT INTO teacher_activity(teacher_id,teacher_activity_id) VALUES($1,uuid_generate_v4()) RETURNING *",
      [teacher]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addTeacherActivity_f };
