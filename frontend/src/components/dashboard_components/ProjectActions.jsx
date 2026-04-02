import { Pencil, Trash2, Plus } from "lucide-react";

export default function ProjectActions({ selectedProject, onAdd, onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center mb-6 h-12">
      <div className={`flex gap-2 transition-all duration-300 ${selectedProject ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}`}>
        <button
          className="px-2 md:px-4 py-2 border border-gray-200 text-yellow-600 text-sm font-bold rounded-xl hover:bg-gray-50 flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
          onClick={onEdit}
        >
          <Pencil size={16} />
          Editar
        </button>
        <button
          className="px-2 md:px-4 border border-gray-200 text-red-600 text-sm font-bold rounded-xl hover:bg-gray-50 flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
          onClick={onDelete}
        >
          <Trash2 size={16} />
          Eliminar
        </button>
      </div>
      <button
        className="bg-[#71BC42] text-white px-2 md:px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-[#5fa636] transition-all active:scale-95 shadow-lg shadow-[#71BC42]/20 cursor-pointer"
        onClick={onAdd}
      >
        <Plus size={18} />
        Adicionar
      </button>
    </div>
  );
}