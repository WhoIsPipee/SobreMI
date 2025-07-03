import React from "react";

const Header: React.FC = () => {
  return (
    <header
      className="relative bg-cover bg-center min-h-[100vh] text-white flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1244&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Fondo oscuro con transparencia y blur */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      {/* Menú de navegación */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex gap-6 text-sm md:text-lg font-medium">
        <a
          href="#sobre-mi"
          className="group transition-all duration-300 hover:text-pink-300"
        >
          Me
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-300" />
        </a>

        <a
          href="#proyectos"
          className="group transition-all duration-300 hover:text-pink-300"
        >
          Proyectos
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-300" />
        </a>

        <a
          href="#contacto"
          className="group transition-all duration-300 hover:text-pink-300"
        >
          Contacto
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-300" />
        </a>
      </nav>

      {/* Contenido central */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Felipe Nicolás Andrade Vargas
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-pink-200">
          "Cada día se vuelve más fácil, pero tienes que hacerlo todos los días. Esa es la parte difícil."
        </p>
      </div>
    </header>
  );
};

export default Header;
