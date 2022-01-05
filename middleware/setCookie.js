const setCookie = async (token, res) => {
  try {
    res.cookie("access_token", token, {
      maxAge: 1000 * 60 * 60,
      // domain: "https://math-p.vercel.app",
      // domain: process.env.NODE_ENV ? "math-p.vercel.app" : "localhost:4000",
      // domain: "math-p.vercel.app",
      secure: process.env.NODE_ENV === "production",
      // secure: true,
      // sameSite: "none",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "",

      // secure: process.env.NODE_ENV ? true : false,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { setCookie };
