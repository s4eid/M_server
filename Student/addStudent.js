const bcrypt = require("bcrypt");
const { ApolloError } = require("apollo-server");
const addStudent_f = async (parent, { name, email, password }, { pool }) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await pool.query(
      "INSERT INTO student (name,email,password) VALUES ($1,$2,$3) RETURNING *",
      [name, email, hashedPassword]
    );
    return data.rows[0];
  } catch (error) {
    throw new ApolloError(error.detail);
  }
};

module.exports = { addStudent_f };
