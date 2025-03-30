import React from "react";
import { certificates } from "@/lib/data"; // Asegúrate de tener los datos correctos en este archivo.
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const certificateItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <motion.h2
          className="text-2xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          📜 Certificates
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-muted/10 p-4 rounded-lg shadow-lg flex flex-col items-center"
              variants={certificateItemVariants}
            >
              {/* Enlace con imagen cuadrada y efecto hover */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", width: "100%", overflow: "hidden" }}
              >
                <motion.img
                  src={cert.imageUrl}
                  alt={`Certificado de ${cert.title}`}
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1", // Hace que la imagen sea cuadrada
                    objectFit: "cover", // Ajusta el contenido sin distorsión
                    borderRadius: "8px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  whileHover={{
                    scale: 1.1, // Zoom al pasar el mouse
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Sombra para resaltar
                  }}
                />
              </a>

              {/* Nombre del Certificado */}
              <h3 className="text-lg font-medium mb-2 text-center">
                {cert.title}
              </h3>

              {/* Descripción del Certificado */}
              <p className="text-sm text-center">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
