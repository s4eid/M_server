const addTest_f = async (title, creator, quize, pool) => {
  console.log("haappend", title, creator, quize);
  var quizeJson = await JSON.stringify(quize);
  try {
    const data = await pool.query(
      "INSERT INTO test (title,creator,quize,test_id) VALUES ($1,$2,$3,uuid_generate_v4()) RETURNING *",
      [title, creator, quizeJson]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addTest_f };
