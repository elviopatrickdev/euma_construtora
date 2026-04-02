import logo from "../../assets/logo.png";  // se precisar
import owner from "../../assets/owner.png";  // se precisar

export default function Header() {
  return (
    <header className="border-b border-gray-100 px-8 py-4 flex justify-between items-center bg-white sticky top-0 z-20 shadow-sm">
      <a href="/"><img src={logo} alt="Logo" className="h-12 object-contain" /></a>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-bold text-[#121212]">Djamilton Lima</p>
          <p className="text-xs text-gray-500 font-medium">Administrador</p>
        </div>
        <img src={owner} alt="User" className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover" />
      </div>
    </header>
  );
}