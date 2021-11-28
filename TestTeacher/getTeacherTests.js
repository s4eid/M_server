const getTeacherTests_f = async (teacher_id, pool) => {
  try {
    const data = await pool.query("SELECT * FROM test WHERE creator=$1", [
      teacher_id,
    ]);
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTeacherTests_f };
