const setCookie = async (token, res) => {
  try {
    res.cookie("access_token", token, {
      maxAge: 1000 * 60 * 60,
      // secure: process.env.NODE_ENV ? true : false,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { setCookie };
