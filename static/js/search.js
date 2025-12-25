/**
 * Moonshine Capital - Directory Filtering Engine
 * Fetches provider data and renders the grid based on active filters.
 */

// State Management
let allProviders = [];
let currentFilters = {
    type: 'all',
    speed: 'all',
    revenue: 0,
    credit: 0,
    search: '' // Hook for search.js
};

// DOM Elements
const grid = document.getElementById('provider-grid');
const filterInputs = {
    type: document.getElementById('filter-type'),
    speed: document.getElementById('filter-speed'),
    revenue: document.getElementById('filter-rev'),
    credit: document.getElementById('filter-credit')
};
const resetBtn = document.getElementById('reset-filters');

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    if (!grid) return; // Only run on directory page

    try {
        // 1. Fetch Data (from the static/data folder populated by build script)
        const response = await fetch('data/providers.json');
        if (!response.ok) throw new Error('Failed to load data');
        
        allProviders = await response.json();
        
        // 2. Initial Render
        renderGrid();
        
        // 3. Attach Listeners
        Object.keys(filterInputs).forEach(key => {
            if(filterInputs[key]) {
                filterInputs[key].addEventListener('change', (e) => {
                    updateFilter(key, e.target.value);
                });
            }
        });

        if(resetBtn) {
            resetBtn.addEventListener('click', resetAllFilters);
        }

        // Listen for Search Events (from search.js)
        window.addEventListener('moonshine-search', (e) => {
            currentFilters.search = e.detail.term;
            renderGrid();
        });

    } catch (err) {
        console.error(err);
        grid.innerHTML = `
            <div class="col-span-full text-center py-20">
                <p class="text-red-400">Unable to load providers. Please try refreshing.</p>
            </div>`;
    }
});

// Update State
function updateFilter(key, value) {
    currentFilters[key] = value;
    renderGrid();
}

// Core Rendering Logic
function renderGrid() {
    grid.innerHTML = '';

    // Filter Logic
    const filtered = allProviders.filter(provider => {
        // Type Filter
        const matchType = currentFilters.type === 'all' || provider.type === currentFilters.type;
        
        // Speed Filter
        const matchSpeed = currentFilters.speed === 'all' || provider.speed_val === currentFilters.speed;
        
        // Revenue (User must have AT LEAST this amount, so Provider Min <= User Input)
        // If User selects "0" (Any), everything passes.
        // If User selects "$5000", they qualify for providers requiring <= 5000.
        // Logic: Show providers where user meets requirements.
        const userRev = parseInt(currentFilters.revenue);
        const matchRev = userRev === 0 || provider.min_revenue <= userRev;

        // Credit (User Score >= Provider Min)
        const userCredit = parseInt(currentFilters.credit);
        const matchCredit = userCredit === 0 || provider.min_credit <= userCredit;

        // Text Search (Name or Tags)
        const searchTerm = currentFilters.search.toLowerCase();
        const matchSearch = !searchTerm || 
            provider.name.toLowerCase().includes(searchTerm) || 
            provider.tags.some(tag => tag.toLowerCase().includes(searchTerm));

        return matchType && matchSpeed && matchRev && matchCredit && matchSearch;
    });

    // Empty State
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-20 bg-midnight-light rounded-xl border border-dashed border-white/10">
                <i class="ph-duotone ph-funnel-x text-4xl text-gray-600 mb-4"></i>
                <h3 class="text-xl font-serif text-white mb-2">No matches found</h3>
                <p class="text-gray-400 mb-6">Try adjusting your filters to see more results.</p>
                <button onclick="document.getElementById('reset-filters').click()" class="btn btn-outline text-sm">Clear Filters</button>
            </div>
        `;
        return;
    }

    // Generate Cards
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'provider-card card-base p-6 flex flex-col group';
        
        card.innerHTML = `
            <div class="flex justify-between items-start mb-6">
                <div class="w-14 h-14 bg-midnight rounded-lg border border-white/10 flex items-center justify-center text-whiskey text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <i class="ph-fill ${p.logo_icon}"></i>
                </div>
                <span class="badge badge-gold">${p.type}</span>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-1 group-hover:text-whiskey transition-colors">${p.name}</h3>
            <p class="text-xs text-gray-500 uppercase font-bold tracking-wider mb-3">${p.best_for}</p>
            <p class="text-sm text-gray-400 mb-6 line-clamp-2 flex-grow">${p.description}</p>
            
            <div class="space-y-3 mb-6">
                <div class="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span class="text-gray-500">Speed</span>
                    <span class="text-white font-medium"><i class="ph-fill ph-clock text-whiskey mr-1"></i> ${p.speed_display}</span>
                </div>
                <div class="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span class="text-gray-500">Min Revenue</span>
                    <span class="text-white font-medium">$${p.min_revenue.toLocaleString()}</span>
                </div>
                <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Min Credit</span>
                    <span class="text-white font-medium">${p.min_credit}</span>
                </div>
            </div>
            
            <div class="flex gap-3 mt-auto">
                <a href="${p.apply_link}" target="_blank" class="btn btn-primary w-full text-sm">Apply Now</a>
                <a href="provider-detail.html?id=${p.id}" class="btn btn-outline px-3 text-gray-400 hover:text-white"><i class="ph-bold ph-info"></i></a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Reset Logic
function resetAllFilters() {
    // Reset DOM
    Object.values(filterInputs).forEach(input => {
        if(input) input.value = (input.id.includes('rev') || input.id.includes('credit')) ? '0' : 'all';
    });
    
    // Reset State
    currentFilters = {
        type: 'all',
        speed: 'all',
        revenue: 0,
        credit: 0,
        search: ''
    };
    
    renderGrid();
}