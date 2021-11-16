const bcrypt = require("bcrypt");
const { ApolloError } = require("apollo-server");
const addTeacher_f = async (first_name, last_name, email, password, pool) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await pool.query(
      "INSERT INTO teacher (first_name,last_name,email,password,teacher_id) VALUES ($1,$2,$3,$4,uuid_generate_v4()) RETURNING *",
      [first_name, last_name, email, hashedPassword]
    );
    return data.rows[0];
  } catch (error) {
    throw new ApolloError(error);
  }
};

module.exports = { addTeacher_f };
