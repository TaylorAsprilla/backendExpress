const jwt = require("jsonwebtoken");

const generateJWT = (
  _id: string,
  email: string = "",
  expiresIN = "12h",
  jwtSecret = "iouifsf45645"
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
        expiresIN: expiresIN,
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
