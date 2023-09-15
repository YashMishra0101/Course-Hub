import { filterData } from "../data";


function Filters({setSelectedFilter,selectedFilter}) {
      
  return (
    <div className="flex flex-wrap  space-x-4 gap-y-4 mx-auto py-4 justify-center bg-sky-950 bg-opacity-80 overflow-hidden">
      {filterData.map((data) => (
        <button key={data.title} onClick={() => setSelectedFilter(data.title)}
          className={`
          text-lg px-2 py-1 rounded-md font-medium hover:bg-white hover:border-black hover:text-gray-700 border-2 transition-all duration-300"
          ${selectedFilter===data.title? 'bg-white border-black text-gray-700':' text-white bg-black'}
          `}>
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filters;
