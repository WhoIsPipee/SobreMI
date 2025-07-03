import React from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Info personal */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-pink-400">¡Hablemos!</h3>
          <p className="text-gray-400">
            Si tienes alguna idea, propuesta o simplemente quieres contactarme,
            estoy disponible por cualquiera de estos medios:
          </p>
        </div>

        {/* Redes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chelipeandrade@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-pink-400 transition group"
          >
            <FaEnvelope className="text-3xl mb-1 group-hover:scale-110 transition" />
            <span className="text-sm">Correo</span>
          </a>

          <a
            href="https://w.app/5useo4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-green-400 transition group"
          >
            <FaWhatsapp className="text-3xl mb-1 group-hover:scale-110 transition" />
            <span className="text-sm">WhatsApp</span>
          </a>

          <a
            href="https://www.linkedin.com/in/felipe-andrade-vargas-6b5624252/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-blue-400 transition group"
          >
            <FaLinkedin className="text-3xl mb-1 group-hover:scale-110 transition" />
            <span className="text-sm">LinkedIn</span>
          </a>

          <a
            href="https://github.com/WhoIsPipee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-white transition group"
          >
            <FaGithub className="text-3xl mb-1 group-hover:scale-110 transition" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>

      {/* Línea y créditos */}
      <div
        id="contacto"
        className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} Felipe Nicolás Andrade Vargas — Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
