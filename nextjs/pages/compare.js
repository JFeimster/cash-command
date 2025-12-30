import { useState } from 'react';
import Layout from '../components/Layout';
import ComparisonTable from '../components/ComparisonTable';
import { getAllProviders } from '../lib/providers';
import { Plus, X, Scales } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function Compare({ allProviders }) {
  // Default to first 2 for demo purposes, or empty
  const [selectedIds, setSelectedIds] = useState([]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const selectedProviders = allProviders.filter(p => selectedIds.includes(p.id));

  const toggleProvider = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(prev => prev.filter(pId => pId !== id));
    } else {
      if (selectedIds.length >= 3) {
        alert("You can compare up to 3 providers at a time.");
        return;
      }
      setSelectedIds(prev => [...prev, id]);
      setIsPickerOpen(false);
    }
  };

  const removeProvider = (id) => {
    setSelectedIds(prev => prev.filter(pId => pId !== id));
  };

  return (
    <Layout 
      title="Compare Funding" 
      description="Head-to-head comparison of business loans, merchant cash advances, and lines of credit."
    >
      <div className="min-h-screen bg-midnight-900 relative overflow-hidden">
        
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-whiskey-dim rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-whiskey/10 border border-whiskey/20 text-whiskey text-sm font-bold mb-6"
            >
              <Scales size={20} weight="fill" /> Head-to-Head Battles
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
            >
              The Truth, <span className="text-transparent bg-clip-text bg-gradient-to-r from-whiskey to-yellow-200">Side-by-Side.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Stop guessing. See exactly how rates, terms, and speeds stack up. We strip away the marketing fluff so you can see the raw numbers.
            </motion.p>
          </div>

          {/* Selection Area */}
          <div className="mb-12">
            {selectedIds.length === 0 ? (
              <div className="text-center p-12 border-2 border-dashed border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <p className="text-gray-400 mb-6">Select providers to start comparing.</p>
                <button 
                  onClick={() => setIsPickerOpen(true)}
                  className="bg-whiskey text-midnight-900 px-8 py-3 rounded-lg font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <Plus className="inline mr-2" weight="bold"/> Add Provider
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white font-bold text-xl">Comparing {selectedIds.length} Providers</h3>
                  {selectedIds.length < 3 && (
                    <button 
                      onClick={() => setIsPickerOpen(true)}
                      className="text-whiskey hover:text-white font-bold text-sm flex items-center gap-2"
                    >
                      <Plus weight="bold"/> Add Another
                    </button>
                  )}
                </div>
                <ComparisonTable selectedProviders={selectedProviders} onRemove={removeProvider} />
              </>
            )}
          </div>

          {/* Provider Picker Modal (Simple Overlay) */}
          {isPickerOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-midnight-900/90 backdrop-blur-sm" onClick={() => setIsPickerOpen(false)}></div>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-midnight-800 border border-white/10 rounded-2xl p-6 w-full max-w-md relative z-10 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">Select a Provider</h3>
                  <button onClick={() => setIsPickerOpen(false)} className="text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
                  {allProviders.map(p => {
                    const isSelected = selectedIds.includes(p.id);
                    return (
                      <button 
                        key={p.id}
                        onClick={() => toggleProvider(p.id)}
                        disabled={isSelected}
                        className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all ${
                          isSelected 
                            ? 'border-whiskey/20 bg-whiskey/5 opacity-50 cursor-not-allowed' 
                            : 'border-white/5 bg-white/5 hover:bg-white/10 hover:border-whiskey/50'
                        }`}
                      >
                        <div className="w-10 h-10 bg-midnight-900 rounded-lg flex items-center justify-center text-whiskey border border-white/10">
                          {/* Ideally use dynamic icon here, simple fallback for now */}
                          <span className="font-bold">{p.name[0]}</span>
                        </div>
                        <div>
                          <div className="font-bold text-white">{p.name}</div>
                          <div className="text-xs text-gray-400">{p.type}</div>
                        </div>
                        {isSelected && <span className="ml-auto text-whiskey text-xs font-bold">Added</span>}
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProviders = getAllProviders();
  return {
    props: { allProviders },
  };
}
