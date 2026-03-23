import { ReactNode, useEffect, memo } from 'react';
import { useLocation } from 'react-router';
import { Header } from './Header';
import { SocialSidebar } from './SocialSidebar';
import image_69a78009bcf5defe568d019540af7b45a93d3ce3 from 'figma:asset/69a78009bcf5defe568d019540af7b45a93d3ce3.png';

interface LayoutProps {
  children: ReactNode;
}

// Memoized Footer component
const Footer = memo(() => (
  <footer className="bg-black text-[#E8DCC4] py-12 border-t border-[#D4AF37]/20" itemScope itemType="https://schema.org/WPFooter">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-full overflow-hidden">
              <img 
                src={image_69a78009bcf5defe568d019540af7b45a93d3ce3}
                alt="Julia Więckowska - osocze bogatopłytkowe PRP PRF Białystok logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[#D4AF37] font-[Cinzel]" itemProp="name">Julia Więckowska</span>
          </div>
          <p className="text-sm text-[#E8DCC4]/70" itemProp="description">
            Profesjonalne zabiegi z fibryną i osoczem Białystok
          </p>
          <p className="text-xs text-[#E8DCC4]/50 mt-2">
            Osocze bogatopłytkowe PRP | Fibryna PRF | Mezoterapia | Full Face Natural® | 
          </p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm text-[#E8DCC4]/70 mb-1">
            © 2026 Wszystkie prawa zastrzeżone
          </p>
          <p className="text-xs text-[#E8DCC4]/50">
            Białystok, Województwo Podlaskie
          </p>
        </div>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    // Set language attribute
    document.documentElement.lang = 'pl';
    
    // Force immediate scroll to top on route change
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Add performance hints for external resources
    const preconnects = [
      'https://static.cloudflareinsights.com',
      'https://booksy.com'
    ];
    
    preconnects.forEach(url => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Header />
      <main className="pt-20" role="main">
        {children}
      </main>
      <SocialSidebar />
      <Footer />
    </div>
  );
}