import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import image_25909a0558481bbf84b9fdcc4c4b411887b1789a from 'figma:asset/25909a0558481bbf84b9fdcc4c4b411887b1789a.png';
import image_c78c567efd605d58cc8d9c4973aa56d075f0257e from 'figma:asset/c78c567efd605d58cc8d9c4973aa56d075f0257e.png';
import image_c78c567efd605d58cc8d9c4973aa56d075f0257e from 'figma:asset/c78c567efd605d58cc8d9c4973aa56d075f0257e.png';
import image_5b014bb7c403e4e857b1442e5e6a976db68c1cb4 from 'figma:asset/5b014bb7c403e4e857b1442e5e6a976db68c1cb4.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D4AF37]/10 shadow-sm" role="banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-full overflow-hidden">
              <img 
                src={image_25909a0558481bbf84b9fdcc4c4b411887b1789a}
                alt="Julia Więckowska - Osocze bogatopłytkowe PRP PRF Białystok logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-black" style={{ fontFamily: 'var(--font-cinzel)' }}>Julia Więckowska</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Główna nawigacja">
            <a href="#zabiegi" className="text-[#666666] hover:text-[#D4AF37] transition-colors">
              Zabiegi
            </a>
            <a href="#korzyści" className="text-[#666666] hover:text-[#D4AF37] transition-colors">
              Korzyści
            </a>
            <a href="#o-mnie" className="text-[#666666] hover:text-[#D4AF37] transition-colors">
              O mnie
            </a>
            <a href="#cennik" className="text-[#666666] hover:text-[#D4AF37] transition-colors">
              Cennik
            </a>
            <a href="#kontakt" className="text-[#666666] hover:text-[#D4AF37] transition-colors">
              Kontakt
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="tel:+48723574156" 
              className="hidden sm:block text-[#666666] hover:text-[#D4AF37] transition-colors"
            >
              +48 723 574 156
            </a>
            <a 
              href="https://booksy.com/pl-pl/284841_july-julia-wieckowska-beauty-salon-bialystok_medycyna-estetyczna_5869_bialystok/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all text-sm md:text-base text-center"
            >
              Umów wizytę
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-[#666666] hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#D4AF37]/10">
            <nav className="flex flex-col">
              <a 
                href="#zabiegi" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center"
                onClick={closeMenu}
              >
                Zabiegi
              </a>
              <div className="h-px bg-[#D4AF37]/20 mx-4"></div>
              <a 
                href="#korzyści" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center"
                onClick={closeMenu}
              >
                Korzyści
              </a>
              <div className="h-px bg-[#D4AF37]/20 mx-4"></div>
              <a 
                href="#o-mnie" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center"
                onClick={closeMenu}
              >
                O mnie
              </a>
              <div className="h-px bg-[#D4AF37]/20 mx-4"></div>
              <a 
                href="#cennik" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center"
                onClick={closeMenu}
              >
                Cennik
              </a>
              <div className="h-px bg-[#D4AF37]/20 mx-4"></div>
              <a 
                href="#kontakt" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center"
                onClick={closeMenu}
              >
                Kontakt
              </a>
              <div className="h-px bg-[#D4AF37]/20 mx-4 sm:hidden"></div>
              <a 
                href="tel:+48723574156" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center sm:hidden"
                onClick={closeMenu}
              >
                +48 723574156
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
