import { useState, useCallback, useEffect, useRef } from "react";
import { Sidebar } from '@/components/layout/Sidebar';
import { SearchBar } from '@/components/filters/SearchBar';
import { TechnologyFilter } from '@/components/filters/TechnologyFilter';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { useProjectStore } from '@/store/useProjectStore';
import { toast, Toaster } from "sonner"; // Importación de Sonner
import useIsMobile from "@/hooks/useIsMobile";

const Index = () => {
  const { projects, filters, isSidebarCollapsed } = useProjectStore();
  const isMobile = useIsMobile();

  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[-_\s]+/g, "") // Remove dashes, underscores and spaces
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Remove accents
  };

  const filteredProjects = projects.filter((project) => {
    if (filters.searchQuery) {
      const query = normalizeText(filters.searchQuery);
      return (
        normalizeText(project.title).includes(query) ||
        normalizeText(project.description).includes(query) ||
        project.technologies.some((tech) =>
          normalizeText(tech.name).includes(query)
        )
      );
    }

    if (filters.selectedTechnologies.length > 0) {
      return project.technologies.some((tech) =>
        filters.selectedTechnologies.includes(tech.id)
      );
    }

    if (filters.selectedCategory) {
      if (filters.selectedCategory === "all") {
        return project.category;
      } else {
        return project.category === filters.selectedCategory;
      }
    }

    return true;
  });

  // Avoid showing toast on first render
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // Show toast only if any filter is active
    if (
      filters.searchQuery ||
      filters.selectedCategory !== "all" ||
      filters.selectedTechnologies.length > 0
    ) {
      toast(`${filteredProjects.length} Projects available`);
    }
  }, [filters, filteredProjects.length]);

  return (
    
    <div className="flex min-h-screen bg-gray-50/50">
      {/* Toaster from Sonner */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '0.75rem',
            padding: '0.6rem',
            justifyContent: 'center',
            maxWidth: '200px',
            width: 'auto',
            position: 'absolute',
            right: isMobile ? '2rem' : '0rem',
            marginLeft: '200px'
          }
        }}
      />

      <div className={`${isSidebarCollapsed ? "w-16" : "w-16 md:w-64"}`}>
        <Sidebar />
      </div>

      <main className="flex-1 md:px-6 py-8">
        <div className="container px-1 md:px-8 mx-auto max-w-6xl">
          <SearchBar />
          <TechnologyFilter />
          <ProjectGrid projects={filteredProjects} />
        </div>
      </main>
    </div>
  );
};

export default Index;
