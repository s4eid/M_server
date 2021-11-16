const bcrypt = require("bcrypt");
const { ApolloError } = require("apollo-server");
const addStudent_f = async (first_name, last_name, email, password, pool) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await pool.query(
      "INSERT INTO student (first_name,last_name,email,password,student_id) VALUES ($1,$2,$3,$4,uuid_generate_v4()) RETURNING *",
      [first_name, last_name, email, hashedPassword]
    );
    return data.rows[0];
  } catch (error) {
    throw new ApolloError(error.detail);
  }
};

module.exports = { addStudent_f };
