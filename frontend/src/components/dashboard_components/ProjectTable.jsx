import ProjectRow from "./ProjectRow";

export default function ProjectTable({ projects, selectedProject, setSelectedProject, onViewDetails }) {
  if (!projects.length) return <div className="py-20 text-center text-gray-400 font-medium">Nenhum projeto encontrado.</div>;

  return (
    <div className="bg-white rounded-2xl border border-gray-50 shadow-sm overflow-hidden mb-8">
      <table className="w-full text-left block md:table">
        <thead className="bg-gray-50/80 border-b border-gray-100 hidden md:table-header-group">
          <tr className="md:table-row block">
            <th className="p-5 w-14"></th>
            <th className="p-5 font-bold text-[#2D2D2D] text-xs uppercase tracking-widest">Projeto</th>
            <th className="p-5 font-bold text-[#2D2D2D] text-xs uppercase tracking-widest text-center">Categoria</th>
            <th className="p-5 font-bold text-[#2D2D2D] text-xs uppercase tracking-widest text-center">Finalizado</th>
            <th className="p-5 font-bold text-[#2D2D2D] text-xs uppercase tracking-widest text-center">Detalhes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 block md:table-row-group">
          {projects.map(p => (
            <ProjectRow
              key={p._id}
              project={p}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              onViewDetails={onViewDetails}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}