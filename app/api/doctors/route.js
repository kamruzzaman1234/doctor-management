export async function GET() {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      speciality: "Cardiologist",
      gender: "Male",
      experience: 8,
      fee: 800,
      location: "Dhanmondi",
      img: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Dr. Sarah Khan",
      speciality: "Dentist",
      gender: "Female",
      experience: 5,
      fee: 500,
      location: "Uttara",
      img: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Dr. Imran Ali",
      speciality: "Neurologist",
      gender: "Male",
      experience: 10,
      fee: 1000,
      location: "Banani",
      img: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Dr. Riya Akter",
      speciality: "Physician",
      gender: "Female",
      experience: 3,
      fee: 400,
      location: "Mirpur",
      img: "https://via.placeholder.com/150"
    }
  ];

  return Response.json(doctors);
}
