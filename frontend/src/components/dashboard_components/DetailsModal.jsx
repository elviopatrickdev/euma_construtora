import fallback from "../../assets/fallback.png";

export default function DetailsModal({ show, setShow, project }) {
    if (!show || !project) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl w-full max-w-2xl max-h-screen overflow-y-auto">

                <h2 className="text-xl font-bold mb-4">Detalhes do Projeto</h2>

                {/* Imagens */}
                <div className="flex gap-2 overflow-x-auto mb-4">
                    {(project.images?.length ? project.images : [fallback]).map((img, i) => (
                        <img
                            key={i}
                            src={img === fallback ? img : `http://localhost:5000/uploads/${img}`}
                            alt="project"
                            className="w-18 h-12 object-cover rounded-lg border"
                            onError={(e) => (e.target.src = fallback)}
                        />
                    ))}
                </div>

                {/* Info principal */}
                <div className="space-y-2 mb-4">
                    <p><strong>Título:</strong> {project.title}</p>
                    <p><strong>Localização:</strong> {project.location}</p>
                    <p><strong>Categoria:</strong> {project.type}</p>
                    <p><strong>Ano:</strong> {project.year}</p>
                </div>

                {/* Descrição */}
                <div className="mb-4">
                    <p className="font-bold mb-1">Descrição:</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description || "Sem descrição"}
                    </p>
                </div>

                {/* Coordenadas */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <p><strong>Lat:</strong> {project.lat}</p>
                    <p><strong>Lng:</strong> {project.lng}</p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <p><strong>Área:</strong> {project.specs?.area} m²</p>
                    <p><strong>Cômodos:</strong> {project.specs?.beds}</p>
                    <p><strong>Banheiros:</strong> {project.specs?.bath}</p>
                    <p><strong>Vagas:</strong> {project.specs?.parking}</p>
                </div>

                {/* Botão fechar */}
                <div className="flex justify-end">
                    <button
                        onClick={() => setShow(false)}
                        className="px-4 py-2 rounded bg-gray-200 cursor-pointer hover:bg-gray-300"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}