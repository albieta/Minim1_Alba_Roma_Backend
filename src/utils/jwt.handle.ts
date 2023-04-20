import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

const generateToken = (email: string, role: string) => {
  const jwt = sign({ email, role }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  try {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
  } catch(err) {
    return null;
  }
};

export { generateToken, verifyToken };