const getTests_f = async (pool) => {
  try {
    const data = await pool.query(
      "SELECT * FROM test q INNER JOIN teacher t ON q.creator=t.teacher_id"
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTests_f };
