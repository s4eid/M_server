const getTeachersActivity_f = async (pool) => {
  try {
    const data = await pool.query("SELECT * FROM teacher_activity");
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getTeachersActivity_f };
