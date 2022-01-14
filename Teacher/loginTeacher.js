const bcrypt = require("bcrypt");
const { ApolloError, AuthenticationError } = require("apollo-server");
const { jwtGenarate } = require("../middleware/jwt_login");
const jwt = require("jsonwebtoken");

const loginTeacher_f = async (email, password, pool, res) => {
  console.log(`email is herer ${email}`);
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
  try {
    await jwt.verify(user.refresh_token, process.env.REFRESH_TOKEN);
    const access = await sign(
      {
        email: user.email,
        name: user.name,
        id: user.teacher_id,
        role: user.role,
      },
      process.env.ACCESS_TOKEN,
      { expiresIn: "1m" }
    );
    res.cookie("access_token", access, {
      maxAge: 1000 * 60 * 60,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "",
    });
    res.cookie("refresh_token", user.refresh_token, {
      maxAge: 1000 * 60 * 60 * 24,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "",
    });
    return { accessToken: access, refreshToken: user.refresh_token };
  } catch (error) {
    const { accessToken, refreshToken } = await jwtGenarate(
      user.email,
      user.name,
      user.teacher_id,
      user.role
    );

    await pool.query(
      "UPDATE teacher SET refresh_token=$1 WHERE teacher_id=$2",
      [refreshToken, user.teacher_id]
    );
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

      // sameSite: "none",
      // domain: "localhost",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "",
      // secure: process.env.NODE_ENV ? true : false,
    });
    res.cookie("refresh_token", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24,
      // domain: "localhost",
      // domain: ".math-p.vercel.app",
      // process.env.NODE_ENV === "production" ? "math-p.vercel.app" : "localhost",
      secure: process.env.NODE_ENV === "production",
      // sameSite: "none",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "",
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
  }
};

module.exports = { loginTeacher_f };
