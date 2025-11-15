"use client";

const DocBanner = ()=>{
    return(
        <div className="py-[80px]">
            <div className="max-w-7xl w-full mx-auto px-[20px] lg:px-0">
                <div className="w-full bg-white shadow-md rounded-xl p-5 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Find Your Doctor</h2>

      <div className="flex flex-col md:flex-row items-center gap-4">

        
        <div className="flex items-center w-full md:w-1/2 bg-gray-100 px-4 py-3 rounded-xl shadow-sm">
          <input
            type="text"
            placeholder="Search doctor by name..."
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>

   
        <select className="w-full md:w-1/4 bg-gray-100 px-4 py-3 rounded-xl shadow-sm outline-none text-gray-700">
          <option value="">Speciality</option>
          <option value="cardiology">Cardiology</option>
          <option value="neurology">Neurology</option>
          <option value="dentist">Dentist</option>
          <option value="physician">General Physician</option>
        </select>

    
        <select className="w-full md:w-1/4 bg-gray-100 px-4 py-3 rounded-xl shadow-sm outline-none text-gray-700">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="bg-green-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-all">
          Search
        </button>
      </div>
    </div>
            </div>
        </div>
    )
}

export default DocBanner;