import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
      style={{ marginTop: "-300px" }} // Ajusta el valor según tus necesidades
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Proyectos
      </h1>

      {/* Contenedor de proyectos superiores */}
      <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
      style={{ marginTop: "-10px" }} // Ajusta el valor según tus necesidades
    ></div>
      <div className="h-full w-full flex flex-col md:flex-row gap-20 px-20" style={{ marginBottom: "20px" }}>
        <ProjectCard
          src="/PORTAFOLIO.jpg"
          title="Portafolio"
          description="Proyecto 6: Portafolio personal donde expongo mis proyectos, habilidades y experiencia en desarrollo web y tecnologías relacionadas."
          url="https://github.com/fgarciarey/WokeateEcommerceCliente"
        />
        <ProjectCard
          src="/WOKEATECOMMERCE.jpg"
          title="Wokeate Ecommerce"
          description="Proyecto 5: Proyecto de Restaurante adaptado con funcionalidad de creación de usuario, solicitar reserva y compra en linea."
          url="https://github.com/fgarciarey/WokeateEcommerceCliente"
        />
        <ProjectCard
          src="/WOKEATE.jpg"
          title="Wokeate Restaurante"
          description="Proyecto 4: Proyecto de Aplición de Restaurante, en donde otorga el menú, formulario de contacto y reserva en linea integrado."
          url="https://github.com/fgarciarey/WokApp"
        />
      </div>

      {/* Contenedor de proyectos inferiores */}
      <div className="h-full w-full flex flex-col md:flex-row gap-20 px-20" style={{ marginTop: "20px" }}>
        <ProjectCard
          src="/DASHBOARD.jpg"
          title="Dashboard"
          description="Proyecto 3: Dashboard de clima en el que podrás ingresar una ciudad en el buscador y aparecerá su clima en tiempo real."
          url="https://github.com/fgarciarey/DashboardProyecto3"
        />
        <ProjectCard
          src="/CRUD.jpg"
          title="Crud Data Base"
          description="Proyecto 2: Sección de aplicacion para crear productos, tareas o usuarios."
          url="https://github.com/fgarciarey/CrudProyecto2"
        />
        <ProjectCard
          src="/LANDING.jpg"
          title="Landing Page"
          description="Proyecto 1: Landing Page innovadora para empresa líder en mercado digital."
          url="https://github.com/fgarciarey/Landing"
        />
      </div>
    </div>
  );
};

export default Projects;
