import { projects } from '@/data/projects';
import { create } from 'zustand';

export type Technology = {
  id: string;
  name: string;
  color: { bg: string; text: string };
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  category: string;
  link: string;
};

export type FilterState = {
  searchQuery: string;
  selectedTechnologies: string[];
  selectedCategory: string | null;
};

interface ProjectStore {
  // Estado
  projects: Project[];
  filters: FilterState;
  isSidebarCollapsed: boolean;
  
  // Acciones de filtros
  setSearchQuery: (query: string) => void;
  setSelectedTechnologies: (techs: string[]) => void;
  setSelectedCategory: (category: string | null) => void;
  clearFilters: () => void;
  toggleCategory: (category: string) => void;

  // Estado global del Sidebar
  toggleSidebar: () => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: projects,
  filters: {
    searchQuery: '',
    selectedTechnologies: [],
    selectedCategory: null,
  },
  isSidebarCollapsed: false,
  
  setSearchQuery: (query) =>
    set((state) => ({
      filters: {
        ...state.filters,
        searchQuery: query,
        selectedTechnologies: [],
        selectedCategory: null,
      },
    })),
  
  setSelectedTechnologies: (techs) =>
    set((state) => ({
      filters: {
        ...state.filters,
        selectedTechnologies: techs,
        searchQuery: '',
        selectedCategory: null,
      },
    })),
  
  setSelectedCategory: (category) =>
    set((state) => ({
      filters: {
        ...state.filters,
        selectedCategory: category,
        searchQuery: '',
        selectedTechnologies: [],
      },
    })),
  
  clearFilters: () =>
    set(() => ({
      filters: {
        searchQuery: '',
        selectedTechnologies: [],
        selectedCategory: null,
      },
    })),
  
  toggleCategory: (category) =>
    set((state) => ({
      filters: {
        ...state.filters,
        selectedCategory: state.filters.selectedCategory === category ? null : category,
        searchQuery: '',
        selectedTechnologies: [],
      },
    })),
  
  toggleSidebar: () =>
    set((state) => ({
      isSidebarCollapsed: !state.isSidebarCollapsed,
    })),
}));
