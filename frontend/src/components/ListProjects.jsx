import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import api from "../services/api";
import Filters from "./dashboard_components/Filters";
import "./ListProjects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Erro ao buscar projetos:", err);
      }
    };
    fetchProjects();
  }, []);

const filteredProjects = projects
  .filter((project) => {
    return (
      project.title.toLowerCase().includes(search.toLowerCase()) &&
      (type ? project.type === type : true) &&
      (year ? project.year === parseInt(year) : true)
    );
  })
  .slice() 
  .sort((a, b) => b._id.localeCompare(a._id)); 

  // Paginação
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Resetar página ao filtrar
  useEffect(() => {
    setCurrentPage(1);
  }, [search, type, year]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="flex flex-col w-full max-w-7xl min-h-screen bg-white mx-auto mt-24 px-4 sm:px-6 lg:px-0">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mt-4">Portfólio</h2>
      <h3 className="text-center text-lg sm:text-xl text-gray-600 mb-4">Lista de Projetos</h3>

      {/* Filtros */}
      <Filters
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        year={year}
        setYear={setYear}
      />

      {/* Lista */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {currentProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center mt-10 mb-8">
        <div className="flex items-center gap-2 p-2 rounded-2xl shadow-sm">

          {/* Anterior */}
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium rounded-full transition-all
                 hover:bg-white hover:shadow
                 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ←
          </button>

          {/* Números */}
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            const isActive = currentPage === page;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all
            ${isActive
                    ? "bg-[#71BC42] text-white shadow-md cursor-pointer"
                    : "text-gray-600 hover:bg-white hover:shadow"
                  }`}
              >
                {page}
              </button>
            );
          })}

          {/* Próximo */}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium rounded-full transition-all
                 hover:bg-white hover:shadow
                 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}