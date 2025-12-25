import { useState, useEffect } from 'react';
import { getAllProviders } from '../lib/providers';

/**
 * useProviders
 * Handles data fetching state. currently loads from local JSON, 
 * but structured to easily switch to an API endpoint later.
 */

export function useProviders() {
  const [providers, setProviders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        
        // Simulating network delay for realistic UI testing
        // In production with local JSON, this is instant.
        // await new Promise(resolve => setTimeout(resolve, 500));

        const data = getAllProviders();
        setProviders(data);
        setError(null);
      } catch (err) {
        console.error("Failed to load providers:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return { providers, isLoading, error };
}