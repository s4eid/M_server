const getTest_f = async (id, pool) => {
  try {
    const data = await pool.query("SELECT * FROM test WHERE creator=$1", [id]);
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTest_f };
