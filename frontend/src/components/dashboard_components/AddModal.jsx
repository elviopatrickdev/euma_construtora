
export default function AddModal({
  show,
  setShow,
  formData,
  setFormData,
  handleCreate,
  handleImageChange
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-full max-w-lg max-h-screen overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Adicionar Projeto</h2>

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
          <div className="w-1/2">
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

          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-medium mb-1">Ano</label>
            <input
              type="number"
              placeholder="Ano"
              className="w-full p-1.5 border rounded"
              value={formData.year}
              onChange={e => setFormData({ ...formData, year: e.target.value })}
            />
          </div>
        </div>

        {/* Latitude e Longitude */}
        <div className="flex gap-2 mb-0">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-medium mb-1">Latitude</label>
            <input
              type="number"
              placeholder="Latitude"
              className="w-full p-1.5 border rounded"
              value={formData.lat}
              onChange={e => setFormData({ ...formData, lat: e.target.value })}
            />
          </div>
          <div className="w-1/2">
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

        {/* Imagens */}
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

        {/* Botões */}
        <div className="flex justify-end gap-4">
          <button onClick={() => setShow(false)} className="hover:underline cursor-pointer">Cancelar</button>
          <button onClick={handleCreate} className="bg-[#71BC42] text-white px-4 py-2 rounded hover:bg-[#4F9B2F] cursor-pointer">Salvar</button>
        </div>
      </div>
    </div>
  );
}