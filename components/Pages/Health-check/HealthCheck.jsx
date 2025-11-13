"use client";

import { useState } from "react";

export default function HealthCheck() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodPressure: "",
    heartRate: "",
    sugar: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { height, weight, bloodPressure, heartRate, sugar } = formData;

  
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const bmi = w / (h * h);

    let bmiStatus = "";
    if (bmi < 18.5) bmiStatus = "Underweight";
    else if (bmi < 24.9) bmiStatus = "Normal";
    else if (bmi < 29.9) bmiStatus = "Overweight";
    else bmiStatus = "Obese";

   
    const summary = {
      bmi: bmi.toFixed(1),
      bmiStatus,
      bpStatus:
        parseInt(bloodPressure) > 140
          ? "High Blood Pressure"
          : parseInt(bloodPressure) < 90
          ? "Low Blood Pressure"
          : "Normal",
      heartStatus:
        parseInt(heartRate) > 100
          ? "High Heart Rate"
          : parseInt(heartRate) < 60
          ? "Low Heart Rate"
          : "Normal",
      sugarStatus:
        parseInt(sugar) > 140
          ? "High Sugar Level"
          : parseInt(sugar) < 70
          ? "Low Sugar Level"
          : "Normal",
    };

    setResult(summary);
  };

  return (
      <div className="py-[80px]">
          <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl">
        <h1 className="text-3xl uppercase font-bold text-center text-green-400 mb-6">
          🩺 Health Check System
        </h1>

        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={formData.height}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="number"
              name="bloodPressure"
              placeholder="Blood Pressure (mmHg)"
              value={formData.bloodPressure}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="number"
              name="heartRate"
              placeholder="Heart Rate (bpm)"
              value={formData.heartRate}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="number"
              name="sugar"
              placeholder="Sugar Level (mg/dL)"
              value={formData.sugar}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold rounded-lg py-2 hover:bg-green-700 transition"
          >
            Check Health
          </button>
        </form>

        
        {result && (
          <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-200">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              🧠 Health Summary
            </h2>
            <ul className="space-y-1 text-gray-700">
              <li><strong>BMI:</strong> {result.bmi} ({result.bmiStatus})</li>
              <li><strong>Blood Pressure:</strong> {result.bpStatus}</li>
              <li><strong>Heart Rate:</strong> {result.heartStatus}</li>
              <li><strong>Sugar Level:</strong> {result.sugarStatus}</li>
            </ul>
          </div>
        )}

        {result && (
          <div className="mt-4 text-gray-600 text-sm">
            <p>
               This is a basic self-check result. For accurate diagnosis, please
              consult a medical professional.
            </p>
          </div>
        )}
      </div>
    </section>
      </div>
  );
}
