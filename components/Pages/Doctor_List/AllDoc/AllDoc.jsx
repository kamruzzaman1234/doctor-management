"use client";
import { useEffect, useState } from "react";
import { Search, User, Stethoscope, MapPin, Wallet } from "lucide-react"; // icons

export default function AllDoc() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [gender, setGender] = useState("");


  useEffect(() => {
    fetch("/api/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

 
  const filteredDoctors = doctors.filter((doc) => {
    return (
      (search === "" ||
        doc.name.toLowerCase().includes(search.toLowerCase())) &&
      (speciality === "" || doc.speciality === speciality) &&
      (gender === "" || doc.gender === gender)
    );
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

      
        <div className="backdrop-blur bg-white/60 border border-white/30 p-6 shadow-xl rounded-2xl h-fit">
          <h2 className="text-2xl font-semibold mb-5 text-gray-700 flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-blue-600" /> Filters
          </h2>

        
          <div className="mb-5">
            <label className="text-gray-600 text-sm">Search</label>
            <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2 mt-1">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search doctor..."
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none ml-2"
              />
            </div>
          </div>

         
          <div className="mb-5">
            <label className="text-gray-600 text-sm">Speciality</label>
            <select
              onChange={(e) => setSpeciality(e.target.value)}
              className="w-full mt-1 p-3 bg-gray-100 rounded-xl outline-none"
            >
              <option value="">Select speciality</option>
              <option>Cardiologist</option>
              <option>Dentist</option>
              <option>Neurologist</option>
              <option>Physician</option>
            </select>
          </div>

 
          <div className="mb-5">
            <label className="text-gray-600 text-sm">Gender</label>
            <select
              onChange={(e) => setGender(e.target.value)}
              className="w-full mt-1 p-3 bg-gray-100 rounded-xl outline-none"
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <button className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-3 rounded-xl shadow-lg hover:opacity-90 transition">
            Apply Filters
          </button>
        </div>

        
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="backdrop-blur bg-white/70 border border-white/40 rounded-2xl shadow-xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={doc.img}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                    alt=""
                  />
                  <h3 className="text-lg font-semibold mt-3 text-gray-800">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium flex items-center gap-1">
                    <Stethoscope className="w-4 h-4" /> {doc.speciality}
                  </p>
                </div>

        
                <div className="mt-5 text-gray-600 text-sm space-y-2">
                  <p className="flex items-center gap-2">
                    <User className="w-4 h-4 text-purple-600" />
                    <strong>Experience:</strong> {doc.experience} years
                  </p>

                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <strong>Location:</strong> {doc.location}
                  </p>

                  <p className="flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-green-600" />
                    <strong>Fee:</strong> {doc.fee} BDT
                  </p>
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-600 text-white
                 py-2 rounded-xl shadow-md hover:opacity-90 transition">
                  View Profile
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No doctor found...</p>
          )}
        </div>
      </div>
    </div>
  );
}
