import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getAllProviders, getProviderBySlug } from '../../lib/providers';
import { 
  CheckCircle, XCircle, ArrowUpRight, ShieldCheck, 
  Clock, ChartBar, CreditCard, CurrencyDollar, CalendarBlank 
} from '@phosphor-icons/react';

export default function ProviderDetail({ provider }) {
  if (!provider) return null;

  return (
    <Layout 
      title={`${provider.name} Review & Details`} 
      description={`Apply for ${provider.name} funding. ${provider.description}`}
    >
      {/* Provider Header */}
      <div className="bg-midnight-800 border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Logo Box */}
            <div className="w-24 h-24 bg-midnight-900 rounded-xl border border-white/10 flex items-center justify-center shadow-2xl shrink-0 p-4">
              {provider.logo_src ? (
                 <Image src={provider.logo_src} alt={provider.name} width={64} height={64} className="object-contain" />
              ) : (
                 <span className="text-3xl font-bold text-whiskey">{provider.name[0]}</span>
              )}
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">{provider.name}</h1>
                <span className="bg-whiskey/10 text-whiskey border border-whiskey/20 text-xs font-bold px-3 py-1 rounded uppercase">
                  {provider.type}
                </span>
              </div>
              
              <p className="text-xl text-gray-400 mb-6 max-w-3xl leading-relaxed">
                {provider.description}
              </p>
              
              {/* Quick Specs */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-white bg-midnight-900/50 px-3 py-1.5 rounded-lg border border-white/5">
                  <Clock size={18} className="text-whiskey" weight="fill" />
                  <span>{provider.speed_display} Funding</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-midnight-900/50 px-3 py-1.5 rounded-lg border border-white/5">
                  <ChartBar size={18} className="text-whiskey" weight="fill" />
                  <span>${provider.min_revenue.toLocaleString()}/mo Rev</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-midnight-900/50 px-3 py-1.5 rounded-lg border border-white/5">
                  <CreditCard size={18} className="text-whiskey" weight="fill" />
                  <span>{provider.min_credit}+ Credit</span>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="shrink-0 w-full md:w-auto flex flex-col gap-3">
              <a 
                href={provider.apply_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full md:w-auto text-center px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                Visit Website <ArrowUpRight weight="bold" />
              </a>
              <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                <ShieldCheck weight="fill" className="text-green-500" /> Secure Application
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-900/10 border border-green-500/20 p-6 rounded-xl">
              <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2 text-lg">
                <CheckCircle size={24} weight="fill" /> The Good
              </h3>
              <ul className="space-y-3">
                {provider.pros?.map((pro, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl">
              <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2 text-lg">
                <XCircle size={24} weight="fill" /> The Trade-offs
              </h3>
              <ul className="space-y-3">
                {provider.cons?.map((con, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deep Dive Features */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Loan Details & Terms</h2>
            <div className="bg-midnight-800 border border-white/5 rounded-xl overflow-hidden divide-y divide-white/5">
              <FeatureRow label="Maximum Amount" value={`$${provider.max_amount.toLocaleString()}`} icon={CurrencyDollar} />
              <FeatureRow label="Term Length" value={provider.term_length} icon={CalendarBlank} />
              <FeatureRow label="Funding Speed" value={provider.speed_display} icon={Clock} />
              <FeatureRow label="Auto-Pay Required?" value={provider.features?.autopay ? 'Yes' : 'No'} />
              <FeatureRow label="Early Payoff Discount?" value={provider.features?.early_payoff_discount ? 'Yes' : 'No'} />
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Sidebar */}
        <aside className="space-y-6">
          <div className="bg-midnight-800 border border-white/5 p-6 rounded-xl sticky top-24">
            <h3 className="text-white font-bold mb-4 text-lg">Requirements</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-gray-400">Min Credit Score</span>
                <span className="text-white font-bold">{provider.min_credit}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-gray-400">Min Monthly Revenue</span>
                <span className="text-white font-bold">${provider.min_revenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-gray-400">Time in Business</span>
                <span className="text-white font-bold">6 Months</span>
              </div>
            </div>

            <div className="mt-8">
               <h3 className="text-white font-bold mb-2">Best For</h3>
               <p className="text-sm text-gray-400 leading-relaxed bg-midnight-900 p-3 rounded-lg border border-white/5">
                 {provider.best_for}
               </p>
            </div>
          </div>
        </aside>

      </div>
    </Layout>
  );
}

const FeatureRow = ({ label, value, icon: Icon }) => (
  <div className="p-4 flex justify-between items-center hover:bg-white/5 transition-colors">
    <div className="flex items-center gap-3 text-gray-400">
      {Icon && <Icon size={20} />}
      <span>{label}</span>
    </div>
    <span className="text-white font-medium text-right">{value}</span>
  </div>
);

// SSG Paths
export async function getStaticPaths() {
  const providers = getAllProviders();
  const paths = providers.map((provider) => ({
    params: { slug: provider.slug },
  }));

  return { paths, fallback: false };
}

// SSG Props
export async function getStaticProps({ params }) {
  const provider = getProviderBySlug(params.slug);
  return {
    props: {
      provider,
    },
  };
}