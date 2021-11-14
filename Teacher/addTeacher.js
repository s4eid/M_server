const bcrypt = require("bcrypt");
const { ApolloError } = require("apollo-server");
const addTeacher_f = async (parent, { name, email, password }, { pool }) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await pool.query(
      "INSERT INTO teacher (name,email,password) VALUES ($1,$2,$3) RETURNING *",
      [name, email, hashedPassword]
    );
    return data.rows[0];
  } catch (error) {
    throw new ApolloError(error);
  }
};

module.exports = { addTeacher_f };
