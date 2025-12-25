import { useState, useEffect } from 'react';

/**
 * useBookmarks
 * Manages a list of provider IDs saved to localStorage.
 * Handles server-side hydration (Next.js) by waiting for mount.
 */

const STORAGE_KEY = 'moonshine_bookmarks';

export function useBookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [isReady, setIsReady] = useState(false); // To prevent hydration mismatch

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setBookmarkedIds(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Failed to load bookmarks', e);
    }
    setIsReady(true);
  }, []);

  // Save to LocalStorage whenever state changes
  useEffect(() => {
    if (isReady) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarkedIds));
    }
  }, [bookmarkedIds, isReady]);

  // Actions
  const toggleBookmark = (id) => {
    setBookmarkedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const isBookmarked = (id) => bookmarkedIds.includes(id);

  const clearBookmarks = () => setBookmarkedIds([]);

  return {
    bookmarkedIds,
    isBookmarked,
    toggleBookmark,
    clearBookmarks,
    bookmarkCount: bookmarkedIds.length,
    isReady
  };
}