import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      
      <div className="flex flex-col min-h-screen bg-midnight-900 text-gray-200 font-sans selection:bg-whiskey selection:text-midnight-900">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-20">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;