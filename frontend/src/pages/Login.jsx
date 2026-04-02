import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, saveToken } from "../services/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    console.log("Tentando login:", { trimmedUsername, trimmedPassword });

    try {
      const data = await login(trimmedUsername, trimmedPassword);
      saveToken(data.token);
      navigate("/paineladmin");
    } catch (err) {
      console.error("Erro login:", err.response?.data);
      setError(err.response?.data?.message || "Erro no login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-gray-200 shadow-xl rounded-2xl p-8">
        {/* Título */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 uppercase">Área Administrativa</h2>
          <p className="text-gray-500 text-sm mt-1">
            Faça login para acessar
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Username */}
          <div>
            <label className="text-sm text-gray-600">Usuário</label>
            <input
              type="text"
              placeholder="Digite seu usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 transition"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="text-center text-red-500 text-sm px-3 py-2">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#71BC42] text-white py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#5d9b37] active:scale-95 cursor-pointer"
          >
            Entrar
          </button>

          {/* Link de desistência */}
          <div className="text-center mt-2">
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition"
            >
              Voltar para a homepage
            </Link>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 EUMA Engenharia e Construção <br /> Desenvolvido por Elvio Patrick
        </p>
      </div>
    </div>
  );
};

export default Login;