import { Funnel, ArrowsCounterClockwise } from '@phosphor-icons/react';

const FilterSidebar = ({ filters, onFilterChange, onReset }) => {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="bg-midnight-800 border border-white/5 rounded-xl p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Funnel weight="fill" className="text-whiskey" /> Filters
        </h3>
        <button 
          onClick={onReset}
          className="text-xs text-gray-500 hover:text-whiskey flex items-center gap-1 transition-colors"
        >
          <ArrowsCounterClockwise /> Reset
        </button>
      </div>

      <div className="space-y-6">
        {/* Funding Type */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Funding Type</label>
          <select 
            name="type" 
            value={filters.type}
            onChange={handleChange}
            className="w-full bg-midnight-900 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-whiskey focus:outline-none transition-colors"
          >
            <option value="all">All Types</option>
            <option value="MCA">Merchant Cash Advance</option>
            <option value="TERM">Term Loan</option>
            <option value="RBF">Revenue Based Finance</option>
            <option value="LOC">Line of Credit</option>
            <option value="EQUIP">Equipment Financing</option>
            <option value="INV">Invoice Factoring</option>
          </select>
        </div>

        {/* Speed */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Funding Speed</label>
          <select 
            name="speed"
            value={filters.speed}
            onChange={handleChange}
            className="w-full bg-midnight-900 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-whiskey focus:outline-none transition-colors"
          >
            <option value="all">Any Speed</option>
            <option value="fast">Fast (24-48 Hours)</option>
            <option value="standard">Standard (3-7 Days)</option>
            <option value="slow">Long Term (2+ Weeks)</option>
          </select>
        </div>

        {/* Min Revenue */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Monthly Revenue</label>
          <select 
            name="revenue"
            value={filters.revenue}
            onChange={handleChange}
            className="w-full bg-midnight-900 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-whiskey focus:outline-none transition-colors"
          >
            <option value="0">Any Revenue</option>
            <option value="5000">$5,000 / mo</option>
            <option value="15000">$15,000 / mo</option>
            <option value="50000">$50,000 / mo</option>
            <option value="100000">$100,000+ / mo</option>
          </select>
        </div>

        {/* Credit Score */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Credit Score</label>
          <select 
            name="credit"
            value={filters.credit}
            onChange={handleChange}
            className="w-full bg-midnight-900 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-whiskey focus:outline-none transition-colors"
          >
            <option value="0">Any Credit</option>
            <option value="500">500+ (Poor)</option>
            <option value="600">600+ (Fair)</option>
            <option value="680">680+ (Good)</option>
            <option value="720">720+ (Excellent)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;