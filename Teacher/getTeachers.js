const getTeacehrs_f = async (pool) => {
  try {
    const data = await pool.query("SELECT * FROM teacher");
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getTeacehrs_f };
