import { useState } from 'react';
import Layout from '../../components/Layout';
import FilterSidebar from '../../components/FilterSidebar';
import ProviderGrid from '../../components/ProviderGrid';
import { getAllProviders } from '../../lib/providers';
import { useFilters } from '../../hooks/useFilters';
import { MagnifyingGlass, SlidersHorizontal } from '@phosphor-icons/react';

export default function Directory({ initialProviders }) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Initialize Filter Hook with data passed from getStaticProps
  const { 
    filters, 
    filteredProviders, 
    activeCount, 
    updateFilter, 
    resetFilters 
  } = useFilters(initialProviders);

  return (
    <Layout 
      title="Funding Directory" 
      description="Compare the best alternative business funding options. Filter by revenue, credit score, and funding speed."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
              Provider Directory
            </h1>
            <p className="text-gray-400">
              Showing {filteredProviders.length} vetted partners.
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center justify-center gap-2 bg-midnight-800 border border-white/10 text-white px-4 py-3 rounded-lg"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <SlidersHorizontal size={20} className={activeCount > 0 ? 'text-whiskey' : ''} />
            Filters {activeCount > 0 && <span className="bg-whiskey text-midnight-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">{activeCount}</span>}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar (Desktop) */}
          <aside className={`lg:w-1/4 w-full ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <FilterSidebar 
              filters={filters} 
              onFilterChange={updateFilter} 
              onReset={resetFilters} 
            />
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4 w-full">
            
            {/* Search Bar */}
            <div className="mb-6 relative">
              <input 
                type="text" 
                placeholder="Search by name, funding type, or keyword..." 
                className="w-full bg-midnight-800 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-whiskey focus:outline-none transition-colors shadow-inner"
                value={filters.search}
                onChange={(e) => updateFilter('search', e.target.value)}
              />
              <MagnifyingGlass 
                size={20} 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
              />
            </div>

            {/* Results Grid */}
            <ProviderGrid 
              providers={filteredProviders} 
              isLoading={false} 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// SSG: Fetch data at build time
export async function getStaticProps() {
  const initialProviders = getAllProviders();
  return {
    props: {
      initialProviders,
    },
  };
}