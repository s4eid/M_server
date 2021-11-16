const getStudents_f = async (pool) => {
  try {
    const data = await pool.query("SELECT * FROM student");
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getStudents_f };
