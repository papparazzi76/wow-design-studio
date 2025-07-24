import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectApp from "@/assets/project-app.jpg";

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Tienda Fashion Premium",
      description: "E-commerce de lujo con experiencia de compra inmersiva, carrito inteligente y sistema de recomendaciones personalizado.",
      image: projectEcommerce,
      category: "E-commerce",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 2,
      title: "Corporate Solutions",
      description: "Sitio corporativo moderno con dashboard de analytics, CRM integrado y portal de clientes automatizado.",
      image: projectCorporate,
      category: "Corporativo",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 3,
      title: "Portfolio Creativo",
      description: "Portfolio interactivo para artista digital con galería dinámica, efectos 3D y experiencia inmersiva única.",
      image: projectPortfolio,
      category: "Portfolio",
      technologies: ["React", "Three.js", "GSAP", "Vercel"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 4,
      title: "FinTech Mobile App",
      description: "Aplicación financiera con UI/UX premium, seguridad bancaria y experiencia de usuario excepcional.",
      image: projectApp,
      category: "App Móvil",
      technologies: ["React Native", "Node.js", "JWT", "Redis"],
      demoUrl: "#",
      caseStudyUrl: "#"
    }
  ];

  const categories = ["all", "E-commerce", "Corporativo", "Portfolio", "App Móvil"];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-background-secondary/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Nuestros</span>{" "}
            <span className="text-foreground">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada proyecto es una historia de éxito. Descubre cómo transformamos 
            ideas en experiencias digitales extraordinarias.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "hero" : "glass"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="capitalize"
            >
              {category === "all" ? "Todos" : category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button variant="accent" size="xl" className="group">
            Ver Todos los Proyectos
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;