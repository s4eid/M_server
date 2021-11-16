const addTest_f = async (title, creator, quize, pool) => {
  var quizeJson = await JSON.stringify(quize);
  try {
    const data = await pool.query(
      "INSERT INTO test (title,creator,quize) VALUES ($1,$2,$3) RETURNING *",
      [title, creator, quizeJson]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addTest_f };
