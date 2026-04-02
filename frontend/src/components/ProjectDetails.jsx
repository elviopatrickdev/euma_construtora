import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import MapComponent from "./MapComponent";
import api from "../services/api";
import fallback from "../assets/fallback.png";

const BASE_URL = "http://localhost:5000/uploads/";

export default function ProjectDetails() {
  const { id } = useParams();

  // Estados
  const [project, setProject] = useState(null);
  const [mainPhoto, setMainPhoto] = useState(null);

  // Buscar projeto no backend
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchProject = async () => {
      try {
        const res = await api.get(`/projects/${id}`);
        setProject(res.data);
        setMainPhoto(
          res.data.images?.length > 0
            ? `${BASE_URL}${res.data.images[0]}`
            : fallback
        );
      } catch (err) {
        console.error("Erro ao buscar projeto:", err);
      }
    };
    fetchProject();
  }, [id]);

  if (!project) return <p>Carregando projeto...</p>;

  // Navegação do carrossel
  const nextPhoto = () => {
    const currentIndex = project.images.findIndex(
      img => `${BASE_URL}${img}` === mainPhoto
    );

    const nextIndex = (currentIndex + 1) % project.images.length;

    setMainPhoto(`${BASE_URL}${project.images[nextIndex]}`);
  };

  const prevPhoto = () => {
    const currentIndex = project.images.findIndex(
      img => `${BASE_URL}${img}` === mainPhoto
    );

    const prevIndex = (currentIndex - 1 + project.images.length) % project.images.length;

    setMainPhoto(`${BASE_URL}${project.images[prevIndex]}`);
  };

  return (
    <div className="max-w-7xl mx-auto h-full mt-28 font-sans text-gray-800 overflow-hidden flex flex-col">
      {/* Title */}
      <div className="flex flex-col items-center">
        <h2 className="text-center text-2xl sm:text-3xl font-bold">{project.type}</h2>
        <h3 className="text-center text-lg sm:text-xl text-gray-600 mb-2">{project.title}</h3>
      </div>

      {/* Layout Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full overflow-hidden md:p-4 lg:p-1">

        {/* --- COLUNA ESQUERDA: Photos & Description --- */}
        <div className="flex flex-col h-full overflow-hidden shadow-sm rounded-2xl p-6">
          <div className="w-full h-full mb-4 group">
            <div className="relative">
              <img
                src={mainPhoto}
                className="w-full h-80 object-cover rounded-2xl shadow-sm animate-in fade-in duration-700 border border-gray-100"
                alt={project.title}
              />

              <button onClick={prevPhoto} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white hover:bg-white/40 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer focus:outline-none focus:ring-0">
                <FontAwesomeIcon icon={faChevronLeft} style={{ width: '21px' }} />
              </button>

              <button onClick={nextPhoto} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white hover:bg-white/40 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer focus:outline-none focus:ring-0">
                <FontAwesomeIcon icon={faChevronRight} style={{ width: '21px' }} />
              </button>

              {/* Thumbnails */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                {project.images.map((imgName, index) => (
                  <button
                    key={index}
                    onClick={() => setMainPhoto(`${BASE_URL}${imgName}`)}
                    className={`w-12 h-12 bg-white/40 backdrop-blur-sm rounded-lg border overflow-hidden shadow-sm transition-all hover:scale-110 ${mainPhoto === `${BASE_URL}${imgName}` ? 'border-[#71bc42] border-2' : 'border-white/50'}`}
                  >
                    <img
                      src={`${BASE_URL}${imgName}`}
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-slate mt-5 mx-4">
              <p className="text-gray-600 leading-relaxed text-justify text-sm">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* --- COLUNA DIREITA: Mapa e informações --- */}
        <div className="flex flex-col h-full gap-6 shadow-sm rounded-2xl p-6">
          <div className="flex flex-col text-center md:text-start">
            <p className="text-lg font-semibold mb-6 md:mb-2">Características do imóvel</p>

            <p className="flex items-center justify-center md:justify-start text-gray-600 text-sm mb-4">
              <lord-icon src="https://cdn.lordicon.com/msyeyaka.json" trigger="loop" stroke="bold" delay="1500"
                colors="primary:#71bc42,secondary:#121331" style={{ width: '24px', height: '24px', marginRight: '5px', marginLeft: '3px', transform: 'rotate(180deg)' }}>
              </lord-icon>
              {project.year}
            </p>

            <p className="flex items-center justify-center md:justify-start text-gray-600 text-sm mb-4">
              <lord-icon src="https://cdn.lordicon.com/onmwuuox.json" trigger="loop" stroke="bold" delay="1500"
                colors="primary:#71bc42,secondary:#121331" style={{ width: '30px', height: '30px', marginRight: '5px' }}>
              </lord-icon>
              {project.location}
            </p>

            {/* Specs */}
            <div className="flex flex-col md:flex-row justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <lord-icon src="https://cdn.lordicon.com/jestaxpl.json" trigger="loop" delay="1500" colors="primary:#71bc42,secondary:#121331" style={{ width: '30px', height: '30px' }}></lord-icon>
                {project.specs?.area || 0} m²
              </div>
              <div className="flex items-center justify-center gap-2">
                <lord-icon src="https://cdn.lordicon.com/skpqewwt.json" trigger="loop" colors="primary:#71bc42,secondary:#121331" style={{ width: '30px', height: '30px' }}></lord-icon>
                {project.specs?.beds || 0} Cômodos
              </div>
              <div className="flex items-center justify-center gap-2">
                <lord-icon src="https://cdn.lordicon.com/cyyzfpos.json" trigger="loop" colors="primary:#71bc42,secondary:#121331" style={{ width: '30px', height: '30px' }}></lord-icon>
                {project.specs?.bath || 0} WC
              </div>
              <div className="flex items-center justify-center gap-2">
                <lord-icon src="https://cdn.lordicon.com/byupthur.json" trigger="loop" colors="primary:#71bc42,secondary:#121331" style={{ width: '30px', height: '30px' }}></lord-icon>
                {project.specs?.parking || 0} Vagas
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="flex-1 h-100 bg-slate-100 rounded-2xl overflow-hidden shadow-inner border border-gray-100 relative">
            <MapComponent lat={project.lat} lng={project.lng} address={project.title} height="250px" />
          </div>
        </div>

      </div>
    </div>
  );
}