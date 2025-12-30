import Link from 'next/link';
import Layout from '../components/Layout';
import { Storefront, ShoppingCart, Handshake, Rocket, ArrowRight, CheckCircle, Funnel, Scales, PaperPlaneRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-32 overflow-hidden text-center px-4">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-whiskey-dim rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-900/30 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wide text-gray-300 uppercase">Live Rates Updated Daily</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-xl"
          >
            Compare funding options that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-whiskey via-yellow-200 to-whiskey bg-300% animate-gradient">
              fit your business.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Browse vetted providers. Filter by speed, requirements, and use case. 
            A simple directory for founders who need capital and clarity.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link 
              href="/directory" 
              className="bg-whiskey text-midnight-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3"
            >
              Find My Best Options <ArrowRight weight="bold" />
            </Link>
            <Link 
              href="/about" 
              className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all"
            >
              How it Works
            </Link>
          </motion.div>
        </div>
      </header>

      {/* --- TICKER --- */}
      <div className="border-y border-white/5 bg-black/40 backdrop-blur-md overflow-hidden py-4 relative z-20">
        <div className="flex gap-8 whitespace-nowrap animate-ticker">
           {[...Array(4)].map((_, i) => (
             <div key={i} className="flex gap-12 items-center text-gray-500 font-bold uppercase tracking-widest text-xs">
               <span>Revenue Based Financing</span>
               <span className="w-1 h-1 bg-whiskey rounded-full"></span>
               <span>Instant Gig Funding</span>
               <span className="w-1 h-1 bg-whiskey rounded-full"></span>
               <span>SBA 7(a) Loans</span>
               <span className="w-1 h-1 bg-whiskey rounded-full"></span>
               <span>Equipment Leasing</span>
               <span className="w-1 h-1 bg-whiskey rounded-full"></span>
             </div>
           ))}
        </div>
      </div>

      {/* --- AUDIENCE SECTION ("Time Poor Operators") --- */}
      <section className="py-24 relative bg-midnight-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Built for time-poor operators.</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">If banks said no, or cash flow is tight, start here.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Storefront} 
              title="SMBs" 
              desc="Owners with inconsistent cash flow needing stability." 
              delay={0}
            />
            <FeatureCard 
              icon={ShoppingCart} 
              title="Ecom & Agencies" 
              desc="Working capital for ads & inventory scaling." 
              delay={0.1}
            />
            <FeatureCard 
              icon={Handshake} 
              title="Acquisition" 
              desc="Operators managing business buyouts & growth." 
              delay={0.2}
            />
            <FeatureCard 
              icon={Rocket} 
              title="Founders" 
              desc="Optimizing finance ops tooling and capital stacks." 
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (3 Steps) --- */}
      <section className="py-32 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-800/50 to-midnight-900 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">3 steps to shortlist.</h2>
            <p className="text-gray-400 text-lg">Stop filling out 10 different applications. Do it the smart way.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-whiskey/20 to-transparent -z-10"></div>
             
             <StepCard 
                icon={Funnel}
                step="01" 
                title="Filter the Noise" 
                desc="Input your revenue and credit score to instantly disqualify the time-wasters. Only see who will actually fund you." 
             />
             <StepCard 
                icon={Scales}
                step="02" 
                title="Compare Side-by-Side" 
                desc="We strip away the marketing fluff so you can see the raw numbers: cost of capital, speed, and term length." 
             />
             <StepCard 
                icon={PaperPlaneRight}
                step="03" 
                title="Apply Direct" 
                desc="One click takes you to the underwriter. No middleman brokers taking a cut. Fast track your approval." 
             />
          </div>

          <div className="mt-20 text-center">
            <Link href="/directory" className="bg-whiskey text-midnight-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] inline-flex items-center gap-2">
              Start the Shortlist <ArrowRight weight="bold"/>
            </Link>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-midnight-800 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-whiskey-dim rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Ready to fuel your growth?</h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-12 font-medium">
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><CheckCircle weight="fill" className="text-whiskey" /> Fast Filters</span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><CheckCircle weight="fill" className="text-whiskey" /> Clear Requirements</span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><CheckCircle weight="fill" className="text-whiskey" /> Direct Apply Paths</span>
          </div>
          <Link href="/directory" className="bg-whiskey text-midnight-900 px-12 py-5 rounded-xl font-bold text-xl hover:bg-white transition-all shadow-xl transform hover:-translate-y-1 inline-block">
            Find My Best Options
          </Link>
        </div>
      </section>
    </Layout>
  );
}

// --- MOTION COMPONENTS ---

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-whiskey/50 hover:bg-white/10 transition-all group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-whiskey/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-whiskey/20 transition-all"></div>
    <div className="w-16 h-16 bg-midnight-900 rounded-xl flex items-center justify-center text-whiskey mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
      <Icon size={32} weight="duotone" />
    </div>
    <h3 className="font-bold text-white text-xl mb-3">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
  </motion.div>
);

const StepCard = ({ icon: Icon, step, title, desc }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className="bg-midnight-800 p-8 rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={120} weight="fill" className="text-whiskey" />
    </div>

    <div className="relative z-10">
      <div className="w-14 h-14 bg-midnight-900 border border-whiskey text-whiskey rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:bg-whiskey group-hover:text-midnight-900 transition-colors">
        {step}
      </div>
      <h3 className="font-bold text-white text-2xl mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);
