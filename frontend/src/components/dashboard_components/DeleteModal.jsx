
export default function DeleteModal({ show, setShow, handleDelete }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-full max-w-sm text-center">
        <h2 className="text-lg font-bold mb-4">Tem certeza?</h2>
        <p className="text-gray-500 mb-6">
          Este projeto será eliminado permanentemente.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShow(false)}
            className="cursor-pointer hover:underline"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-[#8b0000]"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}