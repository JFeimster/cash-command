import { X, Check, Minus } from '@phosphor-icons/react';

const ComparisonTable = ({ selectedProviders, onRemove }) => {
  if (!selectedProviders || selectedProviders.length === 0) {
    return null;
  }

  // Define rows to render
  const rows = [
    { label: 'Type', key: 'type' },
    { label: 'Speed', key: 'speed_display' },
    { label: 'Min Revenue', key: 'min_revenue', format: val => `$${val.toLocaleString()}` },
    { label: 'Min Credit', key: 'min_credit' },
    { label: 'Max Amount', key: 'max_amount', format: val => `$${val.toLocaleString()}` },
    { label: 'Term Length', key: 'term_length' },
    { label: 'Weekly Pay?', key: 'features.weekly_payments', type: 'boolean' },
    { label: 'Early Discount?', key: 'features.early_payoff_discount', type: 'boolean' },
  ];

  // Helper to safely access nested properties
  const getValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 shadow-2xl">
      <div className="min-w-[800px] bg-midnight-800">
        
        {/* Header Row */}
        <div className="flex border-b border-white/5 bg-white/5">
          <div className="w-48 p-4 shrink-0 font-bold text-gray-400 bg-white/5">Provider</div>
          {selectedProviders.map((p, idx) => (
            <div key={p.id} className="flex-1 p-4 text-center border-l border-white/5 relative group">
              <button 
                onClick={() => onRemove(p.id)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                title="Remove"
              >
                <X size={16} weight="bold" />
              </button>
              <div className="font-bold text-white text-lg mb-1">{p.name}</div>
              <span className="text-xs font-bold text-whiskey border border-whiskey/20 bg-whiskey/10 px-2 py-0.5 rounded uppercase">
                {p.type}
              </span>
            </div>
          ))}
          {/* Fill empty slots visually if less than 3 */}
          {[...Array(3 - selectedProviders.length)].map((_, i) => (
            <div key={`empty-${i}`} className="flex-1 p-4 border-l border-white/5 bg-midnight-900/50"></div>
          ))}
        </div>

        {/* Data Rows */}
        {rows.map((row) => (
          <div key={row.key} className="flex border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
            <div className="w-48 p-4 shrink-0 text-sm font-bold text-gray-500 bg-midnight-900/30 flex items-center">
              {row.label}
            </div>
            {selectedProviders.map((p) => {
              const rawVal = getValue(p, row.key);
              let displayVal = rawVal;

              if (row.type === 'boolean') {
                displayVal = rawVal ? (
                  <Check size={20} className="text-green-500 mx-auto" weight="bold" />
                ) : (
                  <X size={20} className="text-red-500 mx-auto" weight="bold" />
                );
              } else if (row.format) {
                displayVal = row.format(rawVal);
              } else if (!rawVal) {
                 displayVal = <Minus className="text-gray-600 mx-auto" />;
              }

              return (
                <div key={`${p.id}-${row.key}`} className="flex-1 p-4 text-center text-sm text-gray-200 border-l border-white/5 flex items-center justify-center">
                  {displayVal}
                </div>
              );
            })}
             {[...Array(3 - selectedProviders.length)].map((_, i) => (
                <div key={`empty-cell-${i}`} className="flex-1 border-l border-white/5 bg-midnight-900/50"></div>
            ))}
          </div>
        ))}

        {/* Action Row */}
        <div className="flex bg-midnight-900/50">
          <div className="w-48 p-4 shrink-0"></div>
          {selectedProviders.map((p) => (
            <div key={`action-${p.id}`} className="flex-1 p-4 text-center border-l border-white/5">
              <a 
                href={p.apply_link} 
                target="_blank" 
                className="inline-block w-full bg-whiskey text-midnight-900 font-bold py-2 rounded hover:bg-white transition-colors text-sm"
              >
                Apply
              </a>
            </div>
          ))}
          {[...Array(3 - selectedProviders.length)].map((_, i) => (
            <div key={`empty-action-${i}`} className="flex-1 border-l border-white/5"></div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ComparisonTable;