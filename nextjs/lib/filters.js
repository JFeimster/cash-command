/**
 * filters.js - Pure logic for filtering provider arrays
 * Decoupled from React state for easier testing and reuse.
 */

export function filterProviders(providers, filters) {
  if (!providers) return [];

  return providers.filter((provider) => {
    // 1. Funding Type (Exact Match)
    if (filters.type && filters.type !== 'all') {
      if (provider.type !== filters.type) return false;
    }

    // 2. Speed (Exact Match)
    if (filters.speed && filters.speed !== 'all') {
      if (provider.speed_val !== filters.speed) return false;
    }

    // 3. Minimum Revenue
    // Logic: User has $X revenue. Show providers where ProviderMin <= UserRevenue
    // If User selects "0" (Any), they qualify for everything.
    if (filters.revenue) {
      const userRevenue = parseInt(filters.revenue, 10);
      if (userRevenue > 0 && provider.min_revenue > userRevenue) {
        return false;
      }
    }

    // 4. Credit Score
    // Logic: User has X Score. Show providers where ProviderMin <= UserScore
    if (filters.credit) {
      const userCredit = parseInt(filters.credit, 10);
      if (userCredit > 0 && provider.min_credit > userCredit) {
        return false;
      }
    }

    // 5. Text Search (Name, Description, Tags)
    if (filters.search) {
      const term = filters.search.toLowerCase().trim();
      const searchableText = `
        ${provider.name} 
        ${provider.description} 
        ${provider.tags.join(' ')} 
        ${provider.type}
      `.toLowerCase();

      if (!searchableText.includes(term)) return false;
    }

    return true;
  });
}

/**
 * Helper to count active filters
 */
export function countActiveFilters(filters) {
  let count = 0;
  if (filters.type && filters.type !== 'all') count++;
  if (filters.speed && filters.speed !== 'all') count++;
  if (filters.revenue && parseInt(filters.revenue) > 0) count++;
  if (filters.credit && parseInt(filters.credit) > 0) count++;
  if (filters.search) count++;
  return count;
}