const bcrypt = require("bcrypt");
const { ApolloError } = require("apollo-server");
const { jwtGenarate } = require("../middleware/jwt_login");

const loginStudent_f = async (
  parent,
  { email, password },
  { pool, req, res }
) => {
  const exist = await pool.query("SELECT * FROM student WHERE email=$1", [
    email,
  ]);
  const user = exist.rows[0];
  if (exist.rowCount == 0) {
    throw new ApolloError("User Is Not Exist!");
  }
  const confrimPassword = await bcrypt.compare(password, user.password);
  if (confrimPassword == false) {
    throw new ApolloError("Email Or Password Is Wrong!");
  }
  const { accessToken, refreshToken } = await jwtGenarate(
    user.email,
    user.name,
    user.id,
    user.role
  );
  await pool.query("UPDATE student SET refresh_token=$1 WHERE id=$2", [
    refreshToken,
    user.id,
  ]);
  res.cookie("access_token", accessToken, {
    maxAge: 1000 * 60 * 60,
    secure: true,
    sameSite: "none",
  });
  res.cookie("refresh_token", refreshToken, {
    maxAge: 1000 * 60 * 60 * 24,
    secure: true,
    sameSite: "none",
  });
  return { accessToken, refreshToken };
};

module.exports = { loginStudent_f };
