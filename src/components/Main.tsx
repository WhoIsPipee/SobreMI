import React from "react";
import {  FaUserShield } from "react-icons/fa";

const technologies = [
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SQL Workbench", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const projects = [
  {
    title: "-🔥 CalorieFlow 🏋🏻‍♂️-",
    description:
      "CalorieFlow es un controlador de calorías integral que permite registrar tanto las consumidas como las quemadas. Con esta herramienta, puedes visualizar tu déficit calórico final, ya que recopila datos de actividades físicas y alimentación.",
    link: "https://rad-cheesecake-3824af.netlify.app/",
  },
  {
    title: "-🖥️ Calculadora de propinas 💸-",
    description:
      "Esta página te permite calcular tu propina final con porcentajes del 10% al 50%, mostrando al instante el total a pagar. Actualmente es un modelo visual, pero próximamente se integrará una base de datos para guardar registros.",
    link: "https://sweet-sawine-ddc246.netlify.app/",
  },
  {
    title: "-🧑‍💻 Excel VBA + Macros 👨‍👩‍👦‍👦-",
    description:
      "Plantilla con macros y VBA para gestionar residentes en condominios privados: agregar, modificar y eliminar registros de forma eficiente.",
    link: "#",
  },
  {
    icon: <FaUserShield className="text-pink-400 text-3xl" />,
    title: "Proyecto de título para Ingeniería en Informática (WORK IN PROGRESS)",
    description:
      "Como equipo, estamos desarrollando un sistema de control de acceso biométrico para la gestión segura de identidades. Este proyecto servirá como nuestro trabajo final (Capstone) para obtener el título de Ingenieros en Informática.",
    link: "#",
  },
];

const Main: React.FC = () => {
  return (
    <main className="px-6 md:px-16 py-12 space-y-28 text-gray-100 bg-gradient-to-b from-gray-900 to-black">

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="grid md:grid-cols-2 gap-12 items-start">
        {/* Texto */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-pink-400">Sobre mí</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Joven de 23 años apasionado por el diseño y la creatividad responsiva, interactiva y dinámica.
            Esta pasión se refleja en mis diseños de plantillas frontend que desarrollo en mi tiempo libre.
            Si quieres conocer mis trabajos con sus funcionalidades, te invito a explorar más abajo mis
            proyectos finalizados y en progreso.
          </p>

          {/* A qué me dedico */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-pink-200">¿A qué me dedico?</h3>
            <p className="text-gray-400">
              Actualmente trabajo como asistente administrativo en un condominio, donde además implemento
              soluciones tecnológicas para optimizar la gestión diaria. He desarrollado sistemas de control
              de visitas, control de multas y automatizaciones usando herramientas como Excel VBA, React y
              bases de datos SQL.
            </p>
          </div>

          {/* Tecnologías que domino */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-pink-200">
              ¿Tecnologías que domino y actualmente estoy aprendiendo?
            </h3>
            <p className="text-gray-400">
              A lo largo de mi carrera he aprendido un poco de todo, pero actualmente me estoy enfocando
              en profundizar mis conocimientos de React, TypeScript y Tailwind CSS. Puedes ver más
              tecnologías que manejo:
              <br />→ A la derecha (si estás en computadora)
              <br />→ Abajo (si estás en móvil)
            </p>
          </div>
        </div>

        {/* Tecnologías */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-200 mb-6">Tecnologías que uso:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white bg-opacity-5 rounded-2xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-md group"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-10 mb-2 group-hover:animate-pulse transition-transform"
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="space-y-10">
        <h2 className="text-3xl font-bold text-pink-400 text-center">Proyectos Finalizados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-gray-800/60 backdrop-blur-md border border-gray-700 p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{proj.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-white">{proj.title}</h4>
              <p className="text-gray-400 mb-3">{proj.description}</p>
              <a href={proj.link} className="text-pink-300 hover:underline text-sm">
                Ver proyecto →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* LINKEDIN / CV */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-pink-400">Descarga mi CV</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Conoce más sobre mi experiencia profesional, educación y habilidades en el enlace que
          encontrarás debajo de este mensaje.
        </p>
        <a
          href="../public/CV_Felipe_Nicolas_Andrade_Vargas.pdf"
          download
          className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
        >
          Descargar CV (PDF)
        </a>
      </section>

      {/* FOTOS */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-pink-400">Galería</h2>
        <p className="text-gray-400">
          Considero esencial formarnos una idea general sobre las personas que conocemos o conoceremos en el futuro.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {["Me1.jpg", "PC1.jpg", "Me2.jpg", "PC2.jpg"].map((filename, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-800 rounded-xl overflow-hidden hover:scale-105 hover:ring-2 hover:ring-pink-400 transition-all duration-300 cursor-pointer"
            >
              <img
                src={`/${filename}`}
                alt={`Foto ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
