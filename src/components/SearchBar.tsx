import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative w-full max-w-md mx-auto mb-8"
    >
      <div className="relative flex items-center">
        <input 
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-4 py-3 pl-12 rounded-xl 
                    bg-white/20 backdrop-blur-md text-white 
                    placeholder-white/70 outline-none transition-all
                    duration-300 border border-white/10
                    focus:border-white/30 focus:bg-white/30"
          disabled={isLoading}
        />
        <Search className="absolute left-4 w-5 h-5 text-white/70" />
        
        <button 
          type="submit"
          disabled={isLoading}
          className="absolute right-2 px-4 py-1.5 bg-white/20 
                    hover:bg-white/30 text-white rounded-lg 
                    transition-colors duration-300 backdrop-blur-md"
        >
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;