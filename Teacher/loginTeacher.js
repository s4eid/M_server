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
    // sameSite: "none",
    // domain: ".math-p.vercel.app",
    // process.env.NODE_ENV === "production" ? "math-p.vercel.app" : "localhost",
    // sameSite: "Stric",
    // path: "/",
    secure: process.env.NODE_ENV === "production",
    // secure: false,
    // httpOnly: true,
    // domain: "localhost",
    // secure: process.env.NODE_ENV ? true : false,
    sameSite: "none",
  });
  res.cookie("refresh_token", refreshToken, {
    maxAge: 1000 * 60 * 60 * 24,
    // domain: "localhost",
    // domain: ".math-p.vercel.app",
    // process.env.NODE_ENV === "production" ? "math-p.vercel.app" : "localhost",
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    // path: "/",
    // secure: process.env.NODE_ENV ? true : false,
    // httpOnly: true,
    // domain: "math-p.vercel.app",
    // secure: process.env.NODE_ENV === "production",

    // secure: true,
    // sameSite: "lax",

    // secure: process.env.NODE_ENV ? true : false,
  });

  return { accessToken, refreshToken };
};

module.exports = { loginTeacher_f };
