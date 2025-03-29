// src/components/Certificates.jsx import React from "react";

const certificates = [ { name: "Certificado en Data Engineering", image: "https://via.placeholder.com/150", description: "Curso completo sobre Ingeniería de Datos.", link: "https://example.com/certificado-data-engineering" }, { name: "Certificado en Python", image: "https://via.placeholder.com/150", description: "Curso avanzado de programación en Python.", link: "https://example.com/certificado-python" } ];

const Certificates = () => { return ( <section id="certificates" className="py-10 bg-gray-100"> <div className="container mx-auto px-5"> <h2 className="text-3xl font-bold text-center mb-6">Certificados</h2> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {certificates.map((cert, index) => ( <div key={index} className="bg-white p-4 rounded-lg shadow-md"> <h3 className="text-xl font-semibold">{cert.name}</h3> <img src={cert.image} alt={cert.name} className="w-full h-40 object-cover mt-2" /> <p className="mt-2 text-gray-600">{cert.description}</p> <a
href={cert.link}
target="_blank"
rel="noopener noreferrer"
className="text-blue-500 mt-2 block hover:underline"
> Ver certificado </a> </div> ))} </div> </div> </section> ); };

export default Certificates;