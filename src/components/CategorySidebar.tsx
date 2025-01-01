import { Menu } from 'lucide-react';
import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategorySidebarProps {
  onCategoryChange: (category: string | null) => void;
}

const categories: Category[] = [
  { id: 'all', name: 'Todos los Proyectos', icon: '🎯' },
  { id: 'ecommerce', name: 'E-commerce', icon: '🛍' },
  { id: 'productivity', name: 'Productividad', icon: '⚡' },
  { id: 'finance', name: 'Finanzas', icon: '💰' },
  { id: 'jobs', name: 'Búsqueda de Empleo', icon: '💼' },
];

export const CategorySidebar = ({ onCategoryChange }: CategorySidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('all');

  const handleCategoryClick = (categoryId: string) => {
    const newCategory = categoryId === selectedCategory ? null : categoryId;

    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  };

  return (
    <div
      className={`relative flex h-screen flex-col border-r border-gray-100 bg-white/50 backdrop-blur-sm transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-4 rounded-full bg-white p-1 shadow-sm hover:shadow-md transition-shadow"
      >
        <Menu className="h-4 w-4 text-gray-600" />
      </button>

      <div className="p-4">
        <h2 className={`text-sm font-medium text-gray-900 ${isCollapsed ? 'hidden' : 'block'}`}>
         Categories
        </h2>
      </div>

      <nav className="flex-1 space-y-1 p-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`category-item w-full ${
              selectedCategory === category.id
                ? 'bg-gray-50 font-medium text-gray-900'
                : ''
            }`}
          >
            <span>{category.icon}</span>
            <span className={isCollapsed ? 'hidden' : 'block'}>
              {category.name}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};