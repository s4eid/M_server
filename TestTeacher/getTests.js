const getTests_f = async (pool) => {
  try {
    const data = await pool.query("SELECT * FROM test");
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTests_f };
