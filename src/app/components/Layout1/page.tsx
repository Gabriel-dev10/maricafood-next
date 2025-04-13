import NavbarRestaurante from "../NavbarRestaurante";

export default function Layout1() {
  const produtos = new Array(10).fill(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarRestaurante/>
      <div className="bg-gray-400 p-6 flex flex-col items-center relative">
        <div className="absolute left-4 top-4 w-16 h-16 bg-white rounded-full"></div>
        <div className="w-16 h-16 bg-white rounded-full mb-2"></div>
        <div className="w-1/2 h-4 bg-white mb-1"></div>
        <div className="w-1/3 h-3 bg-white"></div>
      </div>

    
      <div className="flex justify-end p-4">
        <div className="w-1/2 h-8 bg-gray-300 rounded-full"></div>
      </div>


      <div className="flex items-center gap-2 overflow-x-auto px-4 pb-4">
        <div className="w-24 h-8 bg-gray-400 rounded-full"></div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-24 h-8 bg-gray-300 rounded-full"></div>
        ))}
      </div>

      <div className="px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {produtos.map((_, index) => (
          <div key={index} className="bg-white rounded-lg p-2 shadow">
            <div className="w-full h-32 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-200 my-2 w-3/4"></div>
            <div className="h-4 bg-gray-200 w-1/2 mb-2"></div>
            <div className="flex justify-between items-center">
              <div className="h-4 w-12 bg-gray-200"></div>
              <button className="px-2 py-1 bg-gray-200 rounded">Adicionar</button>
            </div>
          </div>
        ))}
      </div>

     
      <div className="hidden lg:block fixed right-0 top-0 w-20 h-full bg-white border-l border-gray-300 p-2 space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="w-full h-16 bg-gray-300 rounded"></div>
        ))}
      </div>
    </div>
  );
}
