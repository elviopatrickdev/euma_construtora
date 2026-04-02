import dotenv from "dotenv";
import connectDB from './config/db.js';
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/auth.js";

// Resolve __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega .env explicitamente a partir da pasta src
dotenv.config({ path: path.join(__dirname, '.env.example') });

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rotas
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

// Conexão com MongoDB
connectDB();

// Porta
const PORT = process.env.example.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});