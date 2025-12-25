import Link from 'next/link';
import { TwitterLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              Moonshine<span className="text-whiskey">Capital</span>
            </span>
            <p className="text-gray-500 text-xs mt-4">
              Distilled funding for the modern economy.
            </p>
          </div>

          {/* Directory Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/directory?type=RBF" className="hover:text-whiskey transition-colors">Revenue Based</Link></li>
              <li><Link href="/directory?type=TERM" className="hover:text-whiskey transition-colors">SBA Loans</Link></li>
              <li><Link href="/directory?type=EQUIP" className="hover:text-whiskey transition-colors">Equipment</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-whiskey transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-whiskey transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-whiskey transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="text-white font-bold mb-4">Disclaimer</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Moonshine Capital is a directory, not a lender. We may receive compensation from partners listed here. All rates and terms are estimates provided for comparison purposes.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Moonshine Capital. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <TwitterLogo size={24} weight="fill" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <LinkedinLogo size={24} weight="fill" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <InstagramLogo size={24} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;