const jwt = require("jsonwebtoken");
const jwtCheck = async (token, pool, res) => {
  const accessToken = token.access_token;
  const refreshToken = token.refresh_token;
  if (accessToken) {
    const user = await jwt.verify(accessToken, process.env.ACCESS_TOKEN);
    return user;
  } else {
    try {
      const isValid = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
      const email = isValid.email;
      const id = isValid.id;
      const name = isValid.name;
      const role = isValid.role;
      const data = await pool.query(
        `SELECT refresh_token FROM ${role} WHERE id=$1`,
        [id]
      );
      const refreshTokenDb = data.rows[0].refresh_token;
      if (refreshToken == refreshTokenDb) {
        const newAccessToken = await jwt.sign(
          {
            email,
            name,
            id,
            role,
          },
          process.env.ACCESS_TOKEN
        );
        res.cookie("access_token", newAccessToken, {
          maxAge: 1000 * 60 * 60,
          secure: true,
          sameSite: "none",
        });
        return isValid;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
};
module.exports = { jwtCheck };
