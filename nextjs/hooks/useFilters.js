import { useState, useMemo, useCallback } from 'react';
import { filterProviders, countActiveFilters } from '../lib/filters';
import { useRouter } from 'next/router';

/**
 * useFilters
 * Manages the state of the filter sidebar and computes the resulting list.
 */

const INITIAL_FILTERS = {
  type: 'all',
  speed: 'all',
  revenue: 0,
  credit: 0,
  search: ''
};

export function useFilters(allProviders) {
  const router = useRouter();
  
  // Initialize state (optionally from URL query params)
  const [filters, setFilters] = useState(() => {
    // Basic hydration from URL could happen here
    return INITIAL_FILTERS;
  });

  // Derived State: The filtered list
  const filteredProviders = useMemo(() => {
    return filterProviders(allProviders, filters);
  }, [allProviders, filters]);

  // Derived State: Count
  const activeCount = useMemo(() => {
    return countActiveFilters(filters);
  }, [filters]);

  // Handler: Update a single filter
  const updateFilter = useCallback((name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Optional: Shallow routing to update URL without reload
    // router.push({ pathname: router.pathname, query: { ...filters, [name]: value } }, undefined, { shallow: true });
  }, []);

  // Handler: Reset all
  const resetFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS);
  }, []);

  return {
    filters,
    filteredProviders,
    activeCount,
    updateFilter,
    resetFilters
  };
}