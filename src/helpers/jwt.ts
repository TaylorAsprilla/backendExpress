const jwt = require("jsonwebtoken");

const generateJWT = (
  _id: string,
  email: string = "",
  expiresIn = "12h",
  jwtSecret = process.env.JWTSECRET
) => {
  return new Promise((resolve, reject) => {
    const payload = {
      _id,
      email,
    };
    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: expiresIn,
      },
      (error: string, token: string) => {
        if (error) {
          console.log(error);
          reject("No se puede generar el token");
        } else resolve(token);
      }
    );
  });
};

export default generateJWT;
