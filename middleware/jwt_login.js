const { sign } = require("jsonwebtoken");

const jwtGenarate = async (email, name, id, role) => {
  const accessToken = await sign(
    { email, name, id, role },
    process.env.ACCESS_TOKEN
  );
  const refreshToken = await sign(
    { email, name, id, role },
    process.env.REFRESH_TOKEN
  );
  return { accessToken, refreshToken };
};

module.exports = { jwtGenarate };
