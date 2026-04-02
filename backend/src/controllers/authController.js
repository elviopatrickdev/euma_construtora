import "dotenv/config"; // carrega o .env antes de tudo

export const login = (req, res) => {
  const { username, password } = req.body;

  // adminUser criado aqui garante que process.env já tem os valores
  const adminUser = {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
  };

  console.log("Login recebido:", { username, password });
  console.log("Login esperado:", adminUser);

  if (username === adminUser.username && password === adminUser.password) {
    return res.json({ success: true, token: process.env.ADMIN_TOKEN });
  }

  return res.status(401).json({ success: false, message: "Credenciais inválidas" });
};