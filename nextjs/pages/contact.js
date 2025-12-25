import { useState } from 'react';
import Layout from '../components/Layout';
import { EnvelopeSimple, MapPin, PaperPlaneRight } from '@phosphor-icons/react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
    }, 1500);
  };

  return (
    <Layout 
      title="Contact Us" 
      description="Get in touch with the Moonshine Capital team."
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Let's Talk.</h1>
            <p className="text-gray-400 mb-8 text-lg">
              Have a question about a provider? Are you a lender looking to get listed? Drop us a line and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-whiskey">
                  <EnvelopeSimple size={24} weight="fill" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold">Email</div>
                  <div className="text-white font-medium">partners@distilledfunding.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-whiskey">
                  <MapPin size={24} weight="fill" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold">HQ</div>
                  <div className="text-white font-medium">Kingstowne, Virginia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-midnight-800 p-8 rounded-2xl border border-white/10 shadow-2xl">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <PaperPlaneRight size={40} weight="fill" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll be in touch shortly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-whiskey hover:text-white text-sm font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">First Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-midnight-900 border border-white/10 rounded-lg p-3 text-white focus:border-whiskey focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Last Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-midnight-900 border border-white/10 rounded-lg p-3 text-white focus:border-whiskey focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-midnight-900 border border-white/10 rounded-lg p-3 text-white focus:border-whiskey focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    required
                    className="w-full bg-midnight-900 border border-white/10 rounded-lg p-3 text-white focus:border-whiskey focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'loading'}
                  className="w-full bg-whiskey text-midnight-900 font-bold py-4 rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}