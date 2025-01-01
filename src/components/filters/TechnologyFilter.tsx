import { TECHNOLOGIES } from '@/constants/technologies';
import { useProjectStore } from '@/store/useProjectStore';

export const TechnologyFilter = () => {
  const { filters, setSelectedTechnologies } = useProjectStore();

  const toggleTechnology = (techId: string) => {
    const current = filters.selectedTechnologies;
    const updated = current.includes(techId)
      ? current.filter(id => id !== techId)
      : [...current, techId];
    setSelectedTechnologies(updated);
  };

  return (
    <div className="md:space-y-4 mb-4 md:mb-8">
      <div className="flex flex-wrap justify-center md:flex-wrap gap-2 mt-12">
        {TECHNOLOGIES.map((tech) => (
          <button
            key={tech.id}
            onClick={() => toggleTechnology(tech.id)}
            style={{ backgroundColor: tech.color.bg, border: `1px solid ${tech.color.border}`, color: tech.color.text }}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              filters.selectedTechnologies.includes(tech.id)
                ? 'ring-1 ring-gray-500'
                : ''
            }`}
          >
            {tech.name}
          </button>
        ))}
      </div>
        
     

    </div>
  );
};
