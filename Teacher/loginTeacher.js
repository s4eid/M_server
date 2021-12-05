const bcrypt = require("bcrypt");
const { ApolloError, AuthenticationError } = require("apollo-server");
const { jwtGenarate } = require("../middleware/jwt_login");

const loginTeacher_f = async (email, password, pool, res) => {
  const exist = await pool.query("SELECT * FROM teacher WHERE email=$1", [
    email,
  ]);
  const user = exist.rows[0];
  if (exist.rowCount == 0) {
    throw new AuthenticationError("User Is Not Exist!");
  }
  const confrimPassword = await bcrypt.compare(password, user.password);
  if (confrimPassword == false) {
    throw new AuthenticationError("Email Or Password Is Wrong!");
  }
  const { accessToken, refreshToken } = await jwtGenarate(
    user.email,
    user.name,
    user.teacher_id,
    user.role
  );
  await pool.query("UPDATE teacher SET refresh_token=$1 WHERE teacher_id=$2", [
    refreshToken,
    user.teacher_id,
  ]);
  res.cookie("access_token", accessToken, {
    maxAge: 1000 * 60 * 60,
    secure: true,
    sameSite: "none",
    // domain: process.env.NODE_ENV ? "math-p.vercel.app" : "localhost:4000",
    domain: "math-p.vercel.app",
    // secure: process.env.NODE_ENV ? true : false,
  });
  res.cookie("refresh_token", refreshToken, {
    maxAge: 1000 * 60 * 60 * 24,
    // domain: process.env.NODE_ENV ? "math-p.vercel.app" : "localhost:4000",
    domain: "math-p.vercel.app",

    secure: true,
    sameSite: "none",

    // secure: process.env.NODE_ENV ? true : false,
  });
  console.log("its working", accessToken);
  return { accessToken, refreshToken };
};

module.exports = { loginTeacher_f };
