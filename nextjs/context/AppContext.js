import { createContext, useContext, useState, useEffect } from 'react';

/**
 * AppContext
 * Manages global UI state (Toasts, Modals, Theme) and user session placeholders.
 */

const AppContext = createContext();

export function AppProvider({ children }) {
  // Global State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null); // { message, type: 'success'|'error' }

  // Actions
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    // Auto dismiss
    setTimeout(() => setToast(null), 3000);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <AppContext.Provider
      value={{
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
        toast,
        showToast,
      }}
    >
      {children}
      
      {/* Global Toast Notification Component */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-[100] animate-fade-up">
          <div className={`px-6 py-3 rounded-lg shadow-2xl border flex items-center gap-3 ${
            toast.type === 'error' 
              ? 'bg-red-900/90 border-red-500 text-white' 
              : 'bg-midnight-800/90 border-whiskey text-white'
          }`}>
            <span className={`w-2 h-2 rounded-full ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}></span>
            <span className="font-medium text-sm">{toast.message}</span>
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
}

// Custom Hook
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}