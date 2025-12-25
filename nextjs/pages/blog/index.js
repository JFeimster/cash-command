import Layout from '../../components/Layout';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from '@phosphor-icons/react';

// Mock Data for Phase 5 (Replace with CMS later)
const POSTS = [
  {
    slug: 'revenue-based-financing-explained',
    title: 'Revenue Based Financing: Is it Right for Your SaaS?',
    excerpt: 'Unlock capital without giving up equity. Learn how RBF works and why it is becoming the go-to for tech founders.',
    date: 'Oct 24, 2024',
    author: 'Moonshine Team',
    category: 'Guides'
  },
  {
    slug: 'mca-vs-term-loan',
    title: 'Merchant Cash Advance vs. Term Loans',
    excerpt: 'Don\'t get caught in a debt trap. Understand the true cost of capital before you sign the dotted line.',
    date: 'Oct 12, 2024',
    author: 'Financial Editor',
    category: 'Comparison'
  },
  {
    slug: 'equipment-financing-tax-benefits',
    title: 'Section 179: How Equipment Financing Saves Taxes',
    excerpt: 'Did you know you can write off 100% of your equipment purchase this year? Here is how to leverage Section 179.',
    date: 'Sep 28, 2024',
    author: 'Tax Expert',
    category: 'Tips'
  }
];

export default function Blog() {
  return (
    <Layout 
      title="Financial Insights & Guides" 
      description="Expert advice on business funding, cash flow management, and growth capital."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Distilled <span className="text-whiskey">Insights</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Navigating the capital stack shouldn't be a mystery. Read our guides on how to fund your growth sustainably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <article key={post.slug} className="bg-midnight-800 rounded-xl border border-white/5 overflow-hidden group hover:border-whiskey/40 transition-all hover:-translate-y-1">
              {/* Placeholder Image */}
              <div className="h-48 bg-midnight-900 relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-midnight-800 to-transparent opacity-60"></div>
                 <div className="absolute bottom-4 left-4">
                    <span className="bg-whiskey text-midnight-900 text-xs font-bold px-2 py-1 rounded">
                      {post.category}
                    </span>
                 </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar /> {post.date}</span>
                  <span className="flex items-center gap-1"><User /> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-whiskey transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link href={`/blog/${post.slug}`} className="text-whiskey font-bold text-sm flex items-center gap-2 hover:underline">
                  Read Article <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </Layout>
  );
}