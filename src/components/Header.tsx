import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import image_25909a0558481bbf84b9fdcc4c4b411887b1789a from 'figma:asset/25909a0558481bbf84b9fdcc4c4b411887b1789a.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(prev => !prev);
  }, []);

  // Handle navigation to sections
  const handleSectionClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    closeMenu();
    
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, navigate, closeMenu]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const treatments = useMemo(() => [
    { name: 'Osocze bogatopłytkowe (PRP)', url: '/osocze-bogatoplytkowe-prp-bialystok' },
    { name: 'Fibryna bogatopłytkowa (PRF)', url: '/fibryna-bogatoplytkowa-prf-bialystok' },
    { name: 'Full Face Natural®', url: '/full-face-natural-bialystok' },
    { name: 'Osocze na skórę głowy', url: '/osocze-na-skore-glowy-bialystok' },
    { name: 'Autologiczne Egzosomy', url: '/autologiczne-egzosomy-bialystok' },
    { name: 'Mezoterapia mikroigłowa', url: '/mezoterapia-mikroiglowa-bialystok' },
  ], []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D4AF37]/10 shadow-sm" role="banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-full overflow-hidden">
              <img 
                src={image_25909a0558481bbf84b9fdcc4c4b411887b1789a}
                alt="Julia Więckowska - Osocze bogatopłytkowe PRP PRF Białystok logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-black" style={{ fontFamily: 'var(--font-cinzel)' }}>Julia Więckowska</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8" role="navigation" aria-label="Główna nawigacja">
            <a 
              href="/#korzyści" 
              className="text-[#666666] hover:text-[#D4AF37] transition-colors"
              onClick={(e) => handleSectionClick(e, 'korzyści')}
            >
              Korzyści
            </a>
            <a 
              href="/#o-mnie" 
              className="text-[#666666] hover:text-[#D4AF37] transition-colors"
              onClick={(e) => handleSectionClick(e, 'o-mnie')}
            >
              O mnie
            </a>
            
            {/* Zabiegi Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
            >
              <button 
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-[#666666] hover:text-[#D4AF37] transition-colors py-2"
              >
                Zabiegi
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-[#D4AF37]/20 py-3 z-50">
                  {treatments.map((treatment, index) => (
                    <Link
                      key={index}
                      to={treatment.url}
                      className="block px-6 py-4 text-[#666666] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all border-b border-[#D4AF37]/5 last:border-b-0"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="text-base">{treatment.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="/#cennik" 
              className="text-[#666666] hover:text-[#D4AF37] transition-colors"
              onClick={(e) => handleSectionClick(e, 'cennik')}
            >
              Cennik
            </a>
            <a 
              href="/#kontakt" 
              className="text-[#666666] hover:text-[#D4AF37] transition-colors"
              onClick={(e) => handleSectionClick(e, 'kontakt')}
            >
              Kontakt
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="tel:+48723574156" 
              className="hidden lg:block text-[#666666] hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap"
            >
              +48 723 574 156
            </a>
            <a 
              href="https://booksy.com/pl-pl/284841_july-julia-wieckowska-beauty-salon-bialystok_medycyna-estetyczna_5869_bialystok/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:block px-4 py-2 lg:px-6 lg:py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all text-sm lg:text-base text-center whitespace-nowrap"
            >
              Umów wizytę
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="xl:hidden p-2 text-[#666666] hover:text-[#D4AF37] transition-colors"
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
          <div className="xl:hidden py-4 border-t border-[#D4AF37]/10">
            <nav className="flex flex-col">
              <a 
                href="/#korzyści" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center"
                onClick={(e) => handleSectionClick(e, 'korzyści')}
              >
                Korzyści
              </a>
              <div className="h-px bg-[#D4AF37]/20 mx-4"></div>
              <a 
                href="/#o-mnie" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center"
                onClick={(e) => handleSectionClick(e, 'o-mnie')}
              >
                O mnie
              </a>
              <div className="h-px bg-[#D4AF37]/20 mx-4"></div>
              
              {/* Zabiegi with submenu */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-center gap-2 text-[#666666] hover:text-[#D4AF37] transition-colors py-3"
                >
                  Zabiegi
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="bg-[#F9F7F4] py-3 mt-2 mx-4 rounded-lg">
                    {treatments.map((treatment, index) => (
                      <Link
                        key={index}
                        to={treatment.url}
                        className="block px-6 py-4 text-[#666666] hover:text-[#D4AF37] transition-colors border-b border-[#D4AF37]/10 last:border-b-0 text-center"
                        onClick={closeMenu}
                      >
                        {treatment.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="h-px bg-[#D4AF37]/20 mx-4"></div>
              <a 
                href="/#cennik" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center"
                onClick={(e) => handleSectionClick(e, 'cennik')}
              >
                Cennik
              </a>
              <div className="h-px bg-[#D4AF37]/20 mx-4"></div>
              <a 
                href="/#kontakt" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center"
                onClick={(e) => handleSectionClick(e, 'kontakt')}
              >
                Kontakt
              </a>
              <div className="h-px bg-[#D4AF37]/20 mx-4 sm:hidden"></div>
              <a 
                href="tel:+48723574156" 
                className="text-[#666666] hover:text-[#D4AF37] transition-colors py-3 text-center sm:hidden"
                onClick={closeMenu}
              >
                +48 723 574 156
              </a>
              <div className="h-px bg-[#D4AF37]/20 mx-4"></div>
              <a 
                href="https://booksy.com/pl-pl/284841_july-julia-wieckowska-beauty-salon-bialystok_medycyna-estetyczna_5869_bialystok/" 
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full text-center transition-all"
                onClick={closeMenu}
              >
                Umów wizytę
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}