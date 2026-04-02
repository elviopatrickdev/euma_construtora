import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";
import fallback from "../assets/fallback.png";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project._id}`);
    window.scrollTo(0, 0);
  };

  // Pega a primeira imagem ou fallback
  const imageSrc =
    project.images && project.images.length > 0
      ? `http://localhost:5000/uploads/${project.images[0]}`
      : fallback;

  return (
    <div
      className="project-card flex flex-col overflow-hidden rounded-xl transition-transform duration-500 ease-out shadow-sm cursor-pointer"
      onClick={handleClick} // Clique no card inteiro
    >
      <img
        src={imageSrc}
        alt={project.title}
        className="project-card-img w-full h-60 object-cover rounded-xl"
      />
      <div className="p-4 font-medium flex justify-between items-end">
        <div>
          <h6 className="project-text font-bold text-lg text-gray-800">{project.title}</h6>
          <p className="text-gray-500 text-sm mt-1">{project.location}</p>
          <p className="text-gray-500 text-sm mt-1">{project.type}</p>
          <p className="text-gray-500 text-sm mt-1">{project.year}</p>
        </div>
        <div>
          <button
            className="btn-details self-end px-6 py-3 rounded-full cursor-pointer flex items-center gap-2 transition-all duration-300 ease-out
                       hover:bg-[#5fa636] hover:shadow-xl
                       active:scale-95"
            onClick={(e) => { e.stopPropagation(); handleClick(); }} // previne clique duplo
          >
            <span>Detalhes</span>
            <lord-icon
              src="https://cdn.lordicon.com/lcvlsnre.json"
              trigger="loop"
              stroke="bold"
              delay="1500"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: "20px", height: "20px" }}
            ></lord-icon>
          </button>
        </div>
      </div>
    </div>
  );
}