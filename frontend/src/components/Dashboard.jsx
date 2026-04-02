// Bibliotecas e APIs
import { useState, useEffect } from "react";
import api from "../services/api";

import Header from "./dashboard_components/Header";
import Filters from "./dashboard_components/Filters";
import ProjectActions from "./dashboard_components/ProjectActions";
import ProjectTable from "./dashboard_components/ProjectTable";
import Pagination from "./dashboard_components/Pagination";
import AddModal from "./dashboard_components/AddModal";
import EditModal from "./dashboard_components/EditModal";
import DeleteModal from "./dashboard_components/DeleteModal";
import DetailsModal from "./dashboard_components/DetailsModal";

export default function Dashboard() {

  // Dados Principais - Projetos
  const [projects, setProjects] = useState([]);

  // Filtros - Controla a busca
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");

  // Seleção - Guarda qual projeto foi clicado
  const [selectedProject, setSelectedProject] = useState(null);

  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;


  // Modais
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState(null);

  // Formulário - Objecto de um Projeto Inteiro
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "",
    year: "",
    description: "",
    lat: "",
    lng: "",
    images: [],
    specs: {
      area: "",
      beds: "",
      bath: "",
      parking: ""
    }
  });

  // Imagens existentes
  const [existingImages, setExistingImages] = useState([]);

  // Buscar Dados da API - Executa uma vez ao carregar
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects");
        setProjects(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
  }, []);

  // Criar Projeto
  const handleCreate = async () => {
    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "images" && key !== "specs") {
          data.append(key, value ?? "");
        }
      });

      // Transformar specs e lat/lng em números antes de enviar
      const specsToSend = {
        area: formData.specs.area ? Number(formData.specs.area) : 0,
        beds: formData.specs.beds ? Number(formData.specs.beds) : 0,
        bath: formData.specs.bath ? Number(formData.specs.bath) : 0,
        parking: formData.specs.parking ? Number(formData.specs.parking) : 0
      };

      data.append("specs", JSON.stringify(specsToSend));
      data.append("lat", formData.lat ? Number(formData.lat) : 0);
      data.append("lng", formData.lng ? Number(formData.lng) : 0);

      // Upload de Imagens
      (formData.images || []).forEach(file => {
        data.append("images", file);
      });

      // Enviar Projeto criado
      const res = await api.post("/projects", data);
      // Atualização UI da lista - sem carregar página
      setProjects(prev => [...prev, res.data]);

      setShowAddModal(false);
      resetForm();
    }

    catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  // Editar Projeto
  const handleUpdate = async () => {
    try {
      const data = new FormData();

      // Transformar specs e lat/lng em números antes de enviar
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "images" && key !== "specs") {
          data.append(key, value ?? "");
        }
      });

      const specsToSend = {
        area: formData.specs.area ? Number(formData.specs.area) : 0,
        beds: formData.specs.beds ? Number(formData.specs.beds) : 0,
        bath: formData.specs.bath ? Number(formData.specs.bath) : 0,
        parking: formData.specs.parking ? Number(formData.specs.parking) : 0
      };

      data.append("specs", JSON.stringify(specsToSend));
      data.append("lat", formData.lat ? Number(formData.lat) : 0);
      data.append("lng", formData.lng ? Number(formData.lng) : 0);

      (formData.images || []).forEach(file => {
        data.append("images", file);
      });

      (existingImages || []).forEach(img => {
        data.append("existingImages", img);
      });

      // Enviar Projeto editado
      const res = await api.put(`/projects/${selectedProject}`, data);
      // Atualização UI da lista - sem carregar página
      setProjects(prev =>
        prev.map(p => (p._id === selectedProject ? res.data : p))
      );

      setShowEditModal(false);
      setSelectedProject(null);
      setExistingImages([]);
      resetForm();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  // Eliminar Projeto - Confirmação Simples
  const handleDelete = async () => {
    try {
      await api.delete(`/projects/${selectedProject}`);
      // Atualização UI da lista - sem carregar página
      setProjects(prev => prev.filter(p => p._id !== selectedProject));
      setSelectedProject(null);
      setShowDeleteModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Resetar o formulário
  const resetForm = () => {
    setFormData({
      title: "",
      location: "",
      type: "",
      year: "",
      description: "",
      lat: "",
      lng: "",
      images: [],
      specs: {
        area: "",
        beds: "",
        bath: "",
        parking: ""
      }
    });
  };

  // Adicionar nova imagem
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      images: [...(prev.images || []), ...files]
    }));
  };

  // Eliminar imagem existente
  const handleDeleteExistingImage = (imgName) => {
    setExistingImages(prev => prev.filter(img => img !== imgName));
  };

  // Eliminar nova imagem
  const handleDeleteNewImage = (file) => {
    setFormData(prev => ({
      ...prev,
      images: (prev.images || []).filter(f => f !== file)
    }));
  };

  // No modal de editar, preencher os campos com o projeto selecionado
  useEffect(() => {
    if (selectedProject) {
      const p = projects.find(p => p._id === selectedProject);
      if (p) {
        setFormData({
          title: p.title || "",
          location: p.location || "",
          type: p.type || "",
          year: p.year || "",
          description: p.description || "",
          lat: p.lat ?? "",
          lng: p.lng ?? "",
          images: [],
          specs: {
            area: p.specs?.area ?? "",
            beds: p.specs?.beds ?? "",
            bath: p.specs?.bath ?? "",
            parking: p.specs?.parking ?? ""
          }
        });

        setExistingImages(Array.isArray(p.images) ? p.images : []);
      }
    }
  }, [selectedProject, projects]);

  const handleViewDetails = (project) => {
    setProjectDetails(project);
    setShowDetailsModal(true);
  };

  // Filtros de Busca - Título, tipo e ano
  const filteredProjects = (projects || [])
    .filter((project) => {
      return (
        project.title?.toLowerCase().includes(search.toLowerCase()) &&
        (type ? project.type === type : true) &&
        (year ? project.year === parseInt(year) : true)
      );
    })
    .slice()
    .reverse(); // os últimos adicionados aparecem primeiro

  // Paginação
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage) || 1;
  const indexOfLast = currentPage * projectsPerPage;

  // Projetos da página atual
  const currentProjects = filteredProjects.slice(indexOfLast - projectsPerPage, indexOfLast);

  // Reset da página ao mudar os filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [search, type, year]);

  // Scroll para o topo ao mudar de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#121212]">
      {/* Header */}
      <Header />

      <main className="max-w-7xl mx-auto mt-8 px-6">
        <div className="mb-6 text-center">
          <h2>Gestão de Projetos</h2>
          <h3>Painel de Controlo</h3>
        </div>

        {/* Filtros */}
        <Filters search={search} setSearch={setSearch} type={type} setType={setType} year={year} setYear={setYear} />

        {/* Ações de Projeto */}
        <ProjectActions
          selectedProject={selectedProject}
          onAdd={() => { resetForm(); setShowAddModal(true); }}
          onEdit={() => setShowEditModal(true)}
          onDelete={() => setShowDeleteModal(true)}
        />

        {/* Renderização da Tabela */}
        <ProjectTable projects={currentProjects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} onViewDetails={handleViewDetails} />

        {/* Paginação */}
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />

        {/* Modais Add */}
        <AddModal
          show={showAddModal}
          setShow={setShowAddModal}
          formData={formData}
          setFormData={setFormData}
          handleCreate={handleCreate}
          handleImageChange={handleImageChange}
        />

        {/* Modais Edit */}
        <EditModal
          show={showEditModal}
          setShow={setShowEditModal}
          formData={formData}
          setFormData={setFormData}
          existingImages={existingImages}
          handleDeleteExistingImage={handleDeleteExistingImage}
          handleImageChange={handleImageChange}
          handleDeleteNewImage={handleDeleteNewImage}
          handleUpdate={handleUpdate}
        />

        {/* Modais Delete */}
        <DeleteModal
          show={showDeleteModal}
          setShow={setShowDeleteModal}
          handleDelete={handleDelete}
        />

        <DetailsModal
          show={showDetailsModal}
          setShow={setShowDetailsModal}
          project={projectDetails}
        />

      </main >

      <footer className='footer-rights flex flex-col items-center justify-center text-center border-t border-gray-300 py-2 mt-6 md:mt-1'>
        <p>© 2026 EUMA | Engenharia e Construção, Lda. Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/elviopatrickdev" target="_blank" rel="noreferrer">Elvio Patrick
          <lord-icon src="https://cdn.lordicon.com/gsjfryhc.json" trigger="loop" stroke="bold" delay="1500" colors="primary:#71BC42,secondary:#121331" style={{ width: '14px', height: '14px', marginLeft: '5px' }}></lord-icon>
        </a></p>
      </footer>
    </div >
  );
}