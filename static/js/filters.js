/**
 * Moonshine Capital - Search Utility
 * Listens for input on #search-input and dispatches events to filters.js
 */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        // Debounce function to prevent lag on rapid typing
        let timeout = null;

        searchInput.addEventListener('input', (e) => {
            const term = e.target.value;

            clearTimeout(timeout);
            
            timeout = setTimeout(() => {
                // Dispatch custom event that filters.js is listening for
                const event = new CustomEvent('moonshine-search', { 
                    detail: { term: term } 
                });
                window.dispatchEvent(event);
            }, 300); // 300ms delay
        });
    }
});