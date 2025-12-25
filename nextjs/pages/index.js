import Link from 'next/link';
import Layout from '../components/Layout';
import { Storefront, ShoppingCart, Handshake, Rocket, ArrowRight, CheckCircle } from '@phosphor-icons/react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden text-center px-4">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-whiskey-dim rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wide text-gray-400 uppercase">Updated Daily</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight animate-fade-up">
            Compare funding options that <span className="text-whiskey">fit your business.</span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-up delay-100">
            Browse vetted providers. Filter by speed, requirements, and use case. A simple directory for founders who need capital and clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-200">
            <Link 
              href="/directory" 
              className="bg-whiskey text-midnight-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
            >
              Find My Best Options <ArrowRight weight="bold" />
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              How it Works
            </Link>
          </div>
        </div>
      </header>

      {/* Ticker Section */}
      <div className="border-y border-white/5 bg-midnight-800/50 backdrop-blur-sm overflow-hidden py-4">
        <div className="flex gap-8 whitespace-nowrap animate-ticker">
           {[...Array(2)].map((_, i) => (
             <div key={i} className="flex gap-12">
               <span className="text-gray-500 font-bold uppercase tracking-wider text-sm">Revenue Based Financing</span>
               <span className="text-gray-500 font-bold uppercase tracking-wider text-sm">Instant Gig Funding</span>
               <span className="text-gray-500 font-bold uppercase tracking-wider text-sm">SBA 7(a) Loans</span>
               <span className="text-gray-500 font-bold uppercase tracking-wider text-sm">Equipment Leasing</span>
               <span className="text-gray-500 font-bold uppercase tracking-wider text-sm">Invoice Factoring</span>
               <span className="text-gray-500 font-bold uppercase tracking-wider text-sm">Business Lines of Credit</span>
             </div>
           ))}
        </div>
      </div>

      {/* Audience Section */}
      <section className="py-24 bg-midnight-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Built for time-poor operators.</h2>
            <p className="text-gray-400 mt-2 text-lg">If banks said no, or cash flow is tight, start here.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Storefront} 
              title="SMBs" 
              desc="Owners with inconsistent cash flow needing stability." 
            />
            <FeatureCard 
              icon={ShoppingCart} 
              title="Ecom & Agencies" 
              desc="Working capital for ads & inventory scaling." 
            />
            <FeatureCard 
              icon={Handshake} 
              title="Acquisition" 
              desc="Operators managing business buyouts & growth." 
            />
            <FeatureCard 
              icon={Rocket} 
              title="Founders" 
              desc="Optimizing finance ops tooling and capital stacks." 
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-16">3 steps to shortlist.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-whiskey/20 to-transparent -z-10"></div>
             
             <StepCard number="1" title="Filter" desc="Identify your funding goal (Growth, Payroll, Inventory)." />
             <StepCard number="2" title="Compare" desc="Sort providers by revenue reqs, credit score, and speed." />
             <StepCard number="3" title="Apply" desc="Go directly to the provider that fits your profile best." />
          </div>

          <div className="mt-16">
            <Link href="/directory" className="bg-whiskey text-midnight-900 px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors inline-block">
              Start the Shortlist
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-midnight-800 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Start with the shortlist.</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 mb-10 text-sm">
            <span className="flex items-center gap-1"><CheckCircle weight="fill" className="text-whiskey" /> Fast Filters</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1"><CheckCircle weight="fill" className="text-whiskey" /> Clear Requirements</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1"><CheckCircle weight="fill" className="text-whiskey" /> Direct Apply Paths</span>
          </div>
          <Link href="/directory" className="bg-whiskey text-midnight-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all shadow-lg inline-block">
            Find My Best Options
          </Link>
        </div>
      </section>
    </Layout>
  );
}

// Sub-components for cleaner code
const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-8 bg-midnight-900 rounded-xl border border-white/5 hover:border-whiskey/50 transition-colors group">
    <Icon size={48} className="text-whiskey mb-6 group-hover:scale-110 transition-transform" weight="duotone" />
    <h3 className="font-bold text-white text-xl mb-3">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const StepCard = ({ number, title, desc }) => (
  <div className="bg-midnight-800 p-8 rounded-2xl border border-white/5 relative">
    <div className="w-16 h-16 bg-midnight-900 border-2 border-whiskey text-whiskey rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
      {number}
    </div>
    <h3 className="font-bold text-white text-xl mb-3">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
  </div>
);