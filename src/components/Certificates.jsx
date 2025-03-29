import { certificates } from "../lib/data";

const Certificates = () => {
    return (
        <section>
            <h2>Certificados</h2>
            <ul>
                {certificates.map((cert, index) => (
                    <li key={index}>
                        <h3>{cert.name}</h3>
                        <p><strong>Emitido por:</strong> {cert.issuer}</p>
                        <p><strong>Fecha:</strong> {cert.date}</p>
                        <p>{cert.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Certificates;
