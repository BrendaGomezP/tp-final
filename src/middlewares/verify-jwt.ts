import * as jwt from "jsonwebtoken";
import AuthService from "../services/auth";

async function checkJWT(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(400).json({ message: "El token es requerido" });

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY) as any;

    await AuthService.getById(data.id);

    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
  }
}

export default checkJWT;