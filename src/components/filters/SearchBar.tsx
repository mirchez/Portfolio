
import { Input } from '@/components/ui/input';
import { useProjectStore } from '@/store/useProjectStore';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
  const { filters, setSearchQuery, clearFilters } = useProjectStore();

  return (
    <div className="flex flex-col gap-2 md:flex-row justify-center mb-0 md:mb-6">
      <Input
        type="text"
        placeholder="Find projects by title or category..."
        value={filters.searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-md bg-white/50 backdrop-blur-sm border-gray-200"
      />
      <button
        className="items-center gap-2 px-4 py-2 border border-gray-200 text-gray-800 rounded-lg hover:bg-gray-100 transition"
        onClick={clearFilters}
        >
        
        Clear filters
      </button>
      

    </div>
  );
};
