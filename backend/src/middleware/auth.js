import "dotenv/config";

export const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  if (token === process.env.ADMIN_TOKEN) return next();
  return res.status(401).json({ message: "Não autorizado" });
};