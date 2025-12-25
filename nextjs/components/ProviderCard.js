import Link from 'next/link';
import Image from 'next/image';
import { 
  Lightning, Bank, ChartLineUp, CreditCard, Truck, FileText, 
  Clock, CurrencyDollar, IdentificationCard, ArrowUpRight, Info 
} from '@phosphor-icons/react';

// Helper to map string IDs to Phosphor Icons
const IconMap = {
  'ph-lightning': Lightning,
  'ph-bank': Bank,
  'ph-chart-line-up': ChartLineUp,
  'ph-credit-card': CreditCard,
  'ph-truck': Truck,
  'ph-file-text': FileText,
};

const ProviderCard = ({ provider }) => {
  // Fallback to Lightning if icon not found
  const IconComponent = IconMap[provider.logo_icon] || Lightning;

  return (
    <div className="bg-midnight-800 border border-white/5 rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-whiskey/40 hover:shadow-2xl group relative overflow-hidden">
      
      {/* Top Row: Logo & Badge */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-14 h-14 bg-midnight-900 rounded-lg border border-white/10 flex items-center justify-center text-whiskey shadow-inner group-hover:scale-105 transition-transform duration-300">
          {provider.logo_src ? (
             <Image 
               src={provider.logo_src} 
               alt={provider.name} 
               width={32} 
               height={32} 
               className="object-contain" 
             />
          ) : (
            <IconComponent size={32} weight="fill" />
          )}
        </div>
        <span className="bg-whiskey/10 text-whiskey border border-whiskey/20 text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
          {provider.type}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-whiskey transition-colors">
          {provider.name}
        </h3>
        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-3">
          {provider.best_for}
        </p>
        <p className="text-sm text-gray-400 mb-6 line-clamp-2">
          {provider.description}
        </p>

        {/* Specs Grid */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm border-b border-white/5 pb-2">
            <span className="text-gray-500 flex items-center gap-2">
              <Clock size={16} /> Speed
            </span>
            <span className="text-white font-medium">{provider.speed_display}</span>
          </div>
          <div className="flex justify-between text-sm border-b border-white/5 pb-2">
            <span className="text-gray-500 flex items-center gap-2">
              <CurrencyDollar size={16} /> Min Rev
            </span>
            <span className="text-white font-medium">${provider.min_revenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 flex items-center gap-2">
              <IdentificationCard size={16} /> Credit
            </span>
            <span className="text-white font-medium">{provider.min_credit}+</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-auto relative z-10">
        <a 
          href={provider.apply_link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-whiskey text-midnight-900 font-bold py-3 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-white transition-colors"
        >
          Apply Now <ArrowUpRight size={16} weight="bold" />
        </a>
        <Link 
          href={`/provider/${provider.slug}`}
          className="px-4 py-3 rounded-lg border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
          aria-label="View Details"
        >
          <Info size={20} weight="bold" />
        </Link>
      </div>
      
      {/* Background Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-radial from-whiskey/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProviderCard;