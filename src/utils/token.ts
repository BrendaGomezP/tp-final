import * as jwt from "jsonwebtoken";

function createToken(data: string | Object) {
  const token = jwt.sign(data, process.env.SECRET_KEY, {
    expiresIn: "3d",
  });

  return token;
}

export { createToken };