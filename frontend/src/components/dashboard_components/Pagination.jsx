
export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="flex justify-center items-center mt-10 mb-8">
      <div className="flex items-center gap-2 p-2 rounded-2xl shadow-sm">
        <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1} className="px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-white hover:shadow disabled:opacity-40 disabled:cursor-not-allowed">←</button>
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          const isActive = currentPage === page;
          return (
            <button key={page} onClick={() => setCurrentPage(page)} className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${isActive ? "bg-[#71BC42] text-white shadow-md cursor-pointer" : "text-gray-600 hover:bg-white hover:shadow"}`}>
              {page}
            </button>
          );
        })}
        <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages} className="px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-white hover:shadow disabled:opacity-40 disabled:cursor-not-allowed">→</button>
      </div>
    </div>
  );
}