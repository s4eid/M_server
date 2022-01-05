const jwt = require("jsonwebtoken");
const { setCookie } = require("./setCookie");
const jwtCheck = async (token, pool, res) => {
  const accessToken = token.access_token;
  const refreshToken = token.refresh_token;
  if (accessToken) {
    const user = await jwt.verify(accessToken, process.env.ACCESS_TOKEN);
    return user;
  } else {
    try {
      if (refreshToken) {
        const isValid = await jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN
        );
        const email = isValid.email;
        const id = isValid.id;
        // const name = isValid.name;
        const role = isValid.role;
        const data = await pool.query(
          `SELECT refresh_token FROM ${role} WHERE ${role}_id=$1`,
          [id]
        );
        const refreshTokenDb = data.rows[0].refresh_token;
        if (refreshToken == refreshTokenDb) {
          const newAccessToken = await jwt.sign(
            {
              // name,
              email,
              id,
              role,
            },
            process.env.ACCESS_TOKEN,
            { expiresIn: "1h" }
          );
          await setCookie(newAccessToken, res);
          return isValid;
        } else {
          return null;
        }
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
module.exports = { jwtCheck };
