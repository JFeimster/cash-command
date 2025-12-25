import { getAllProviders } from '../../lib/providers';

/**
 * API Route: /api/search
 * Provides a searchable endpoint for providers.
 * Useful for external widgets or when client-side data becomes too large.
 */

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { q } = req.query;

  try {
    const allProviders = getAllProviders();

    // If no query, return empty or top results
    if (!q) {
      return res.status(200).json({ results: [] });
    }

    const term = q.toLowerCase();

    // Perform Search
    const results = allProviders.filter((p) => {
      const searchable = `
        ${p.name} 
        ${p.description} 
        ${p.type} 
        ${p.tags.join(' ')}
      `.toLowerCase();
      
      return searchable.includes(term);
    });

    // Cache Control (Vercel/Edge): Cache for 1 hour, stale for 24 hours
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

    return res.status(200).json({ 
      count: results.length,
      results: results.map(p => ({
        // Return only necessary fields for search results to save bandwidth
        id: p.id,
        name: p.name,
        slug: p.slug,
        type: p.type,
        logo_icon: p.logo_icon,
        description: p.description
      }))
    });

  } catch (error) {
    console.error('Search API Error:', error);
    return res.status(500).json({ message: 'Search failed' });
  }
}