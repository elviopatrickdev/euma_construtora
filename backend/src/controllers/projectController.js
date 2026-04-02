import Project from "../models/Project.js";

// GET ALL
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar projetos" });
  }
};

// GET BY ID
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params; // pega o ObjectId da URL

    // Validação básica do ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    res.json(project); // envia o projeto para o frontend
  } catch (error) {
    console.error("Erro ao buscar projeto:", error.message);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

// CREATE
export const createProject = async (req, res) => {
  try {
    const { title, location, type, year, description, lat, lng } = req.body;

    if (!title || !location || !type || !year || !description || !lat || !lng) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const imagePaths = req.files ? req.files.map(file => file.filename) : [];

    // Parse do specs
    const specs = req.body.specs ? JSON.parse(req.body.specs) : {};

    // Transformar valores em number
    const newProject = new Project({
      title,
      location,
      type,
      year: parseInt(year) || 0,
      description,
      lat: req.body.lat ? parseFloat(req.body.lat) : 0,
      lng: req.body.lng ? parseFloat(req.body.lng) : 0,
      specs: {
        area: specs.area ? parseFloat(specs.area) : 0,
        beds: specs.beds ? parseInt(specs.beds) : 0,
        bath: specs.bath ? parseInt(specs.bath) : 0,
        parking: specs.parking ? parseInt(specs.parking) : 0
      },
      images: imagePaths
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);

  } catch (error) {
    console.error("Erro ao criar projeto:", error.message);
    res.status(500).json({ message: "Erro interno ao criar projeto" });
  }
};

// UPDATE
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    const newImages = req.files?.map(file => file.filename) || [];

    let remainingImages = [];
    if (req.body.existingImages) {
      remainingImages = Array.isArray(req.body.existingImages)
        ? req.body.existingImages
        : [req.body.existingImages];
    }

    const specs = req.body.specs ? JSON.parse(req.body.specs) : {};

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        location: req.body.location,
        type: req.body.type,
        year: parseInt(req.body.year) || 0,
        description: req.body.description,
        lat: req.body.lat ? parseFloat(req.body.lat) : 0,
        lng: req.body.lng ? parseFloat(req.body.lng) : 0,
        specs: {
          area: specs.area ? parseFloat(specs.area) : 0,
          beds: specs.beds ? parseInt(specs.beds) : 0,
          bath: specs.bath ? parseInt(specs.bath) : 0,
          parking: specs.parking ? parseInt(specs.parking) : 0
        },
        images: [...remainingImages, ...newImages]
      },
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Erro ao atualizar projeto" });
  }
};

// 🔹 DELETE
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Projeto deletado" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar projeto" });
  }
};