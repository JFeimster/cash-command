import Layout from '../components/Layout';
import { CheckCircle, Lightning } from '@phosphor-icons/react';

export default function About() {
  return (
    <Layout 
      title="About Us"
      description="We built Moonshine Capital because finding business funding shouldn't feel like a back-alley deal."
    >
      <div className="max-w-4xl mx-auto px-4 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Distilling the Complex <br />World of <span className="text-whiskey">Capital</span>
          </h1>
          <p className="text-xl text-gray-400">
            We built Moonshine Capital because finding business funding shouldn't feel like a back-alley deal.
          </p>
        </div>

        {/* Content Block */}
        <div className="prose prose-invert prose-lg mx-auto">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Traditional banks are slow. Predatory lenders are fast but dangerous. Moonshine Capital exists in the middle: 
            we curate the "top shelf" of alternative financing partners who offer speed without the shark tactics.
            We believe that every founder deserves access to clear, transparent capital to fuel their vision.
          </p>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <CheckCircle size={32} className="text-whiskey mb-4" weight="duotone" />
              <h4 className="text-white font-bold text-lg mb-2">Vetted Partners</h4>
              <p className="text-sm text-gray-400">
                We only list lenders with transparent terms and verified track records. If they hide fees, they aren't on our list.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <Lightning size={32} className="text-whiskey mb-4" weight="duotone" />
              <h4 className="text-white font-bold text-lg mb-2">Speed First</h4>
              <p className="text-sm text-gray-400">
                Our directory prioritizes providers who can fund in days, not months. Capital velocity matters.
              </p>
            </div>
          </div>

          {/* Compliance / Disclosure */}
          <div className="bg-midnight-800 border-l-4 border-whiskey p-6 rounded-r-lg mt-12">
            <h3 className="text-white font-bold text-lg mb-2">Affiliate Disclosure</h3>
            <p className="text-sm text-gray-400 italic">
              Moonshine Capital is an independent publisher and comparison service, not a lender. 
              We may receive compensation from the companies we list on our site. This compensation may impact how and where 
              products appear on this site (including, for example, the order in which they appear). 
              We do not include the entire universe of available financial or credit offers.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}