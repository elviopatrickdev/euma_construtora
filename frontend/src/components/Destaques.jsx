import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import "./Destaques.css";

function Destaques() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await api.get("/projects");
                // Pega os 3 últimos projetos adicionados
                const sorted = res.data
                    .slice() // cria cópia
                    .sort((a, b) => b._id.localeCompare(a._id)) // mais recentes primeiro
                    .slice(0, 3); // apenas os 3 primeiros
                setProjects(sorted);
            } catch (err) {
                console.error("Erro ao buscar projetos:", err);
            }
        };
        fetchProjects();
    }, []);



    return (
        <section id="destaques" className="destaques container relative flex flex-col max-w-7xl mx-auto justify-center text-center pt-10 md:mb-10">
            <h2>Destaques</h2>
            <h3>PROJETOS RECENTES</h3>

            <div className="grid lg:grid-cols-3 gap-6 justify-items-between mt-0 lg:mt-8 mx-auto w-full py-10 px-4 md:p-10 lg:p-0">
                {projects.map((project) => (
                    <a
                        key={project._id}
                        className="project-card flex flex-col overflow-hidden rounded-xl transition-transform duration-500 ease-out shadow-sm"
                        onClick={() => navigate(`/projects/${project._id}`)}
                    >
                        <img
                            src={
                                project.images && project.images.length > 0
                                    ? `http://localhost:5000/uploads/${project.images[0]}`
                                    : "fallback.png"
                            }
                            alt={project.title}
                            className="project-card-img w-full min-h-80 lg:h-80 object-cover rounded-xl"
                        />
                        <div className="project-text py-2 px-4 font-medium flex justify-between items-center">
                            <div className="flex">
                                <lord-icon
                                    src="https://cdn.lordicon.com/hmqxevgf.json"
                                    trigger="loop"
                                    stroke="bold"
                                    delay="1500"
                                    colors="primary:#71BC42,secondary:#121331"
                                    style={{ width: "24px", height: "24px", marginRight: "6px", marginTop: "1px" }}
                                ></lord-icon>
                                {project.title}
                            </div>
                            {project.type && <span>{project.type}</span>}
                        </div>
                    </a>
                ))}
            </div>

            <div className="flex align-center justify-center mt-0 md:mt-14">
                <button className="btn-projects text-sm md:text-lg font-semibold border pl-5 py-2 sm:py-3 rounded-full flex items-center gap-2 transition-transform duration-500 ease-out hover:scale-105 active:scale-95 hover:shadow-xl" onClick={() => navigate("/projects")}>
                    Ver Portfólio
                    <lord-icon
                        src="https://cdn.lordicon.com/jeuxydnh.json"
                        trigger="loop"
                        stroke="bold"
                        delay="1500"
                        colors="primary:#121331,secondary:#71BC42"
                        style={{ width: '24px', height: '24px', marginRight: '18px', marginBottom: '1px' }}
                    ></lord-icon>
                </button>
            </div>
        </section>
    );
}

export default Destaques;