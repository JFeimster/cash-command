import providersData from '../../shared/data/providers.json';

/**
 * provider.js - Data Access Object for Moonshine Capital
 * Handles fetching, sorting, and finding providers from the shared JSON source.
 */

// 1. Get All Providers (Simulates a database call)
export function getAllProviders() {
  return providersData;
}

// 2. Get Provider by Slug (For dynamic pages)
export function getProviderBySlug(slug) {
  return providersData.find((p) => p.slug === slug);
}

// 3. Get Related Providers (Simple logic: same type)
export function getRelatedProviders(currentSlug, type, limit = 3) {
  return providersData
    .filter((p) => p.type === type && p.slug !== currentSlug)
    .slice(0, limit);
}

// 4. Get Unique Categories (For generating dynamic routes/sitemaps)
export function getUniqueCategories() {
  const types = providersData.map((p) => p.type);
  return [...new Set(types)];
}

// 5. Sort Providers
export function sortProviders(providers, sortKey = 'recommended') {
  const sorted = [...providers];
  
  switch (sortKey) {
    case 'revenue_asc':
      return sorted.sort((a, b) => a.min_revenue - b.min_revenue);
    case 'credit_asc':
      return sorted.sort((a, b) => a.min_credit - b.min_credit);
    case 'fastest':
      // Mapping speed string values to weight
      const speedWeight = { fast: 1, standard: 2, slow: 3 };
      return sorted.sort((a, b) => speedWeight[a.speed_val] - speedWeight[b.speed_val]);
    default:
      return sorted; // Default order in JSON
  }
}