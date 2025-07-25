import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import projectLaTentacion from "@/assets/projects/Captura de pantalla 2025-07-24 112226.png";
import projectBienestarNatural from "@/assets/projects/Captura de pantalla 2025-07-24 112325.png";
import projectTulsi from "@/assets/projects/Captura de pantalla 2025-07-24 112422.png";
import projectImprentaCeleste from "@/assets/projects/Captura de pantalla 2025-07-24 112444.png";
import projectProptools from "@/assets/projects/Captura de pantalla 2025-07-24 112536.png";
import projectFutbolCommunity from "@/assets/projects/Captura de pantalla 2025-07-24 112611.png";
import projectGastroLava from "@/assets/projects/Captura de pantalla 2025-07-24 112643.png";
import projectEstudioPortfolio from "@/assets/projects/Captura de pantalla 2025-07-24 112804.png";
import projectRebecaBruna from "@/assets/projects/Captura de pantalla 2025-07-24 112835.png";
import projectValladolidTurismo from "@/assets/projects/Captura de pantalla 2025-07-24 113000.png";
import projectIadomus from "@/assets/projects/Captura de pantalla 2025-07-25 084331.png";
import projectMagoTono from "@/assets/projects/Captura de pantalla 2025-07-25 084440.png";
import projectChefMariscal from "@/assets/projects/Captura de pantalla 2025-07-25 084720.png";

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "La Tentación",
      description: "Sitio web vibrante para empresa de gofres premium con experiencia visual atractiva.",
      image: projectLaTentacion,
      category: "E-commerce",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 2,
      title: "Solo por hoy",
      description: "Plataforma de bienestar integral con reservas online, terapias naturales y experiencia de usuario serena.",
      image: projectBienestarNatural,
      category: "Bienestar",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 3,
      title: "Tulsi - Indian Restaurant",
      description: "Sitio web elegante para restaurante indio con galería visual de platos y sistema de reservas integrado.",
      image: projectTulsi,
      category: "Restaurante",
      technologies: ["React", "Sanity CMS", "Vercel", "Stripe"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 4,
      title: "Imprenta Gráficas Celeste",
      description: "Portal corporativo para servicios de impresión con calculadora de precios y gestión de pedidos automatizada.",
      image: projectImprentaCeleste,
      category: "Corporativo",
      technologies: ["Vue.js", "Laravel", "MySQL", "PayPal"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 5,
      title: "PropTools",
      description: "Herramientas profesionales para venta de inmuebles con IA integrada y gestión completa de propiedades.",
      image: projectProptools,
      category: "Inmobiliaria",
      technologies: ["React", "Python", "Django", "AI/ML"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 6,
      title: "11 contra once",
      description: "Plataforma de comunidad futbolística con gaming, predicciones y recompensas para aficionados.",
      image: projectFutbolCommunity,
      category: "Gaming",
      technologies: ["React", "Node.js", "WebSocket", "Redis"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 7,
      title: "Gastro Lava",
      description: "Sitio web sofisticado para restaurante gourmet con ambiente elegante y experiencia culinaria premium.",
      image: projectGastroLava,
      category: "Restaurante",
      technologies: ["Next.js", "Contentful", "Vercel", "Analytics"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 8,
      title: "Estudio Creativo",
      description: "Portfolio minimalista para estudio de diseño con showcase de proyectos y experiencia visual limpia.",
      image: projectEstudioPortfolio,
      category: "Portfolio",
      technologies: ["React", "Three.js", "GSAP", "Netlify"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 9,
      title: "Rebeca H. Bruña",
      description: "Portal inmobiliario de lujo especializado en propiedades exclusivas en Valladolid con búsqueda avanzada.",
      image: projectRebecaBruna,
      category: "Inmobiliaria",
      technologies: ["React", "Node.js", "MongoDB", "Maps API"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 10,
      title: "Así es Valladolid",
      description: "Portal turístico oficial con experiencias inmersivas, videos interactivos y guías culturales completas.",
      image: projectValladolidTurismo,
      category: "Turismo",
      technologies: ["Vue.js", "Strapi", "Video API", "PWA"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 11,
      title: "Iadomus",
      description: "Agencia inmobiliaria moderna con sistema avanzado de búsqueda de propiedades y gestión integral.",
      image: projectIadomus,
      category: "Inmobiliaria",
      technologies: ["React", "Node.js", "MongoDB", "Maps API"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 12,
      title: "El Mago Toño",
      description: "Sitio web teatral para mago humorista con galería de espectáculos y sistema de contratación de shows.",
      image: projectMagoTono,
      category: "Entretenimiento",
      technologies: ["React", "TypeScript", "Sanity CMS", "Vercel"],
      demoUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 13,
      title: "Chef Mariscal",
      description: "Portal profesional de asesoramiento gastronómico con servicios de consultoría especializada para restaurantes.",
      image: projectChefMariscal,
      category: "Restaurante",
      technologies: ["Next.js", "Strapi", "PostgreSQL", "AWS"],
      demoUrl: "#",
      caseStudyUrl: "#"
    }
  ];

  const categories = ["all", "E-commerce", "Bienestar", "Restaurante", "Corporativo", "Inmobiliaria", "Gaming", "Portfolio", "Turismo", "Entretenimiento"];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
