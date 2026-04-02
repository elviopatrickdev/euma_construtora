import { Search } from "lucide-react";

export default function Filters({
  search,
  setSearch,
  type,
  setType,
  year,
  setYear
}) {
  return (
    <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm mb-6 flex flex-col lg:flex-row gap-2">
      
      {/* Busca */}
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Buscar por nome do projeto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-gray-50/50 rounded-xl outline-none border border-transparent transition-all"
        />
      </div>

      {/* Select + Ano */}
      <div className="flex flex-col sm:flex-row gap-2">
        
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-4 py-3 bg-gray-50/50 border border-transparent rounded-xl outline-none w-full sm:w-50"
        >
          <option value="">Todas as categorias</option>
          <option value="Residencial">Residencial</option>
          <option value="Comercial">Comercial</option>
          <option value="Hotelaria">Hotelaria</option>
        </select>

        <input
          type="number"
          placeholder="Ano"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="px-4 py-3 bg-gray-50/50 border border-transparent rounded-xl outline-none w-full hover:bg-gray-100 transition-colors"
        />
      </div>
    </div>
  );
}