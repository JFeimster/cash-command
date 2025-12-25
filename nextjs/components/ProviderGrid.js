import ProviderCard from './ProviderCard';
import { FunnelX } from '@phosphor-icons/react';

const ProviderGrid = ({ providers, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-midnight-800 rounded-xl h-96 border border-white/5"></div>
        ))}
      </div>
    );
  }

  if (!providers || providers.length === 0) {
    return (
      <div className="col-span-full py-20 text-center bg-midnight-800/50 rounded-xl border border-dashed border-white/10">
        <div className="inline-flex p-4 rounded-full bg-midnight-900 mb-4">
          <FunnelX size={40} className="text-gray-600" />
        </div>
        <h3 className="text-xl font-serif text-white mb-2">No matches found</h3>
        <p className="text-gray-400">Try adjusting your filters to see more funding options.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {providers.map((provider) => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
};

export default ProviderGrid;