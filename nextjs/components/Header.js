import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Drop, List, X } from '@phosphor-icons/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  const navLinks = [
    { name: 'Directory', href: '/directory' },
    { name: 'Compare', href: '/compare' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-midnight-900/95 backdrop-blur-md border-white/10 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Drop size={32} weight="fill" className="text-whiskey group-hover:animate-pulse" />
            <span className="font-serif text-2xl font-bold text-white tracking-tight">
              Moonshine<span className="text-whiskey">Capital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors ${
                  router.pathname === link.href ? 'text-whiskey' : 'text-gray-300 hover:text-whiskey'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/directory" 
              className="bg-whiskey text-midnight-900 px-6 py-2 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              Get Funded
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-midnight-800 border-b border-white/10 p-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="block text-gray-300 hover:text-whiskey font-medium px-2 py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/directory" 
            className="block w-full text-center bg-whiskey text-midnight-900 font-bold py-3 rounded-lg mt-4"
          >
            Get Funded
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;