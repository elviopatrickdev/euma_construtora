import { MoreHorizontal } from "lucide-react";
import fallback from "../../assets/fallback.png";

export default function ProjectRow({ project, selectedProject, setSelectedProject, onViewDetails }) {
  const currentImg = (project.images && project.images.length > 0)
    ? `http://localhost:5000/uploads/${project.images[0]}`
    : fallback;

  return (
    <tr
      key={project._id}
      className={`group transition-all cursor-pointer block md:table-row ${selectedProject === project._id ? "bg-[#71BC42]/5" : "hover:bg-gray-50/80"}`}
      onClick={() => setSelectedProject(selectedProject === project._id ? null : project._id)}
    >

      {/* Checkbox */}
      <td className="p-5 text-center flex justify-between md:table-cell" data-label="">
        <div className={`w-5 h-5 rounded-md border-2 transition-all ${selectedProject === project._id ? "bg-[#71BC42] border-[#71BC42]" : "border-gray-200"}`}>
          {selectedProject === project._id && (
            <div className="w-full h-full flex items-center justify-center text-white text-[10px]">✓</div>
          )}
        </div>
      </td>

      {/* Projeto */}
      <td className="p-5 flex justify-between md:table-cell items-center" data-label="Projeto">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm flex-shrink-2">
            <img
              src={currentImg}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = fallback; }}
            />
          </div>
          <div>
            <p className="font-bold text-[#121212] text-sx sm:text-base leading-tight max-w-30 sm:w-full">{project.title}</p>
            <p className="text-xs text-gray-400 font-medium mt-1 truncate max-w-50">{project.location}</p>
          </div>
        </div>
      </td>

      {/* Tipo */}
      <td className="p-5 text-center flex justify-between md:table-cell items-center" data-label="Categoria">
        <span className="px-3 py-1 bg-gray-100 text-[#2D2D2D] rounded-lg text-[10px] font-black uppercase tracking-tight border border-gray-200">
          {project.type}
        </span>
      </td>

      {/* Ano */}
      <td className="p-5 text-center font-bold text-[#121212] flex justify-between md:table-cell" data-label="Finalizado">
        {project.year}
      </td>

      {/* Botão detalhes */}
      <td className="p-5 text-center flex justify-between md:table-cell items-center border-b border-gray-300 sm:border-neutral-50" data-label="Detalhes">
        <button className="p-2 text-gray-300 hover:text-[#121212] transition-all cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Impedir o clique no card
            onViewDetails(project);
          }}>
          <MoreHorizontal size={20} />
        </button>
      </td>
    </tr>
  );
}