
export default function EditModal({
  show,
  setShow,
  formData,
  setFormData,
  existingImages,
  handleDeleteExistingImage,
  handleImageChange,
  handleDeleteNewImage,
  handleUpdate
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-full max-w-lg max-h-screen overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Editar Projeto</h2>

        {/* Título */}
        <div className="mb-0">
          <label className="block text-gray-700 text-sm font-medium mb-1">Título</label>
          <input
            placeholder="Título"
            className="w-full p-1.5 border rounded"
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        {/* Localização */}
        <div className="mb-0">
          <label className="block text-gray-700 text-sm font-medium mb-1">Localização</label>
          <input
            placeholder="Localização"
            className="w-full p-1.5 border rounded"
            value={formData.location}
            onChange={e => setFormData({ ...formData, location: e.target.value })}
          />
        </div>

        {/* Categoria e Ano */}
        <div className="flex gap-2 mb-0">
          <div className="w-1/3">
            <label className="block text-gray-700 text-sm font-medium mb-1">Categoria</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.type}
              onChange={e => setFormData({ ...formData, type: e.target.value })}
            >
              <option value="">Tipo</option>
              <option value="Residencial">Residencial</option>
              <option value="Comercial">Comercial</option>
              <option value="Hotelaria">Hotelaria</option>
            </select>
          </div>
          <div className="w-1/6">
            <label className="block text-gray-700 text-sm font-medium mb-1">Ano</label>
            <input
              type="number"
              placeholder="Ano"
              className="w-full p-1.5 border rounded"
              value={formData.year}
              onChange={e => setFormData({ ...formData, year: e.target.value })}
            />
          </div>
      

        {/* Latitude e Longitude */}
       
          <div className="w-1/4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Latitude</label>
            <input
              type="number"
              placeholder="Latitude"
              className="w-full p-1.5 border rounded"
              value={formData.lat}
              onChange={e => setFormData({ ...formData, lat: e.target.value })}
            />
          </div>
          <div className="w-1/4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Longitude</label>
            <input
              type="number"
              placeholder="Longitude"
              className="w-full p-1.5 border rounded"
              value={formData.lng}
              onChange={e => setFormData({ ...formData, lng: e.target.value })}
            />
          </div>
        </div>

        {/* Specs */}
        <div className="flex gap-2 mb-0">
          <div className="w-1/4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Área (m²)</label>
            <input
              type="number"
              placeholder="Área"
              className="w-full p-1.5 border rounded"
              value={formData.specs.area}
              onChange={e => setFormData({ ...formData, specs: { ...formData.specs, area: e.target.value } })}
            />
          </div>
          <div className="w-1/4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Cômodos</label>
            <input
              type="number"
              placeholder="Cômodos"
              className="w-full p-1.5 border rounded"
              value={formData.specs.beds}
              onChange={e => setFormData({ ...formData, specs: { ...formData.specs, beds: e.target.value } })}
            />
          </div>
          <div className="w-1/4">
            <label className="block text-gray-700 text-sm font-medium mb-1">WC</label>
            <input
              type="number"
              placeholder="Banheiros"
              className="w-full p-1.5 border rounded"
              value={formData.specs.bath}
              onChange={e => setFormData({ ...formData, specs: { ...formData.specs, bath: e.target.value } })}
            />
          </div>
          <div className="w-1/4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Vagas</label>
            <input
              type="number"
              placeholder="Garagem"
              className="w-full p-1.5 border rounded"
              value={formData.specs.parking}
              onChange={e => setFormData({ ...formData, specs: { ...formData.specs, parking: e.target.value } })}
            />
          </div>
        </div>

        {/* Descrição */}
        <div className="mb-0">
          <label className="block text-gray-700 text-sm font-medium mb-1">Descrição</label>
          <textarea
            placeholder="Descrição"
            className="w-full p-1.5 border rounded"
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        {/* Upload de imagens */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Imagens</label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full p-1.5 border rounded cursor-pointer"
            onChange={handleImageChange}
          />
        </div>

        {/* Preview das imagens */}
        <div className="flex flex-wrap gap-2 mb-4">
          {existingImages.map(img => (
            <div key={img} className="relative w-16 h-16 border rounded overflow-hidden">
              <img
                src={`http://localhost:5000/uploads/${img}`}
                alt={img}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => handleDeleteExistingImage(img)}
                className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center cursor-pointer"
              >
                x
              </button>
            </div>
          ))}
          {formData.images.map(file => (
            <div key={file.name} className="relative w-16 h-16 border rounded overflow-hidden">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => handleDeleteNewImage(file)}
                className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
              >
                X
              </button>
            </div>
          ))}
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4">
          <button onClick={() => setShow(false)} className="hover:underline cursor-pointer">Cancelar</button>
          <button onClick={handleUpdate} className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-[#8b6903] cursor-pointer">Atualizar</button>
        </div>
      </div>
    </div>
  );
}