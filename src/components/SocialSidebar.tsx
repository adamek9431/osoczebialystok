import { Facebook, Instagram } from 'lucide-react';
import booksyLogo from 'figma:asset/f5609fe222c9ed4ff6fcbc60048b73e1dc9ebe1f.png';

export function SocialSidebar() {
  return (
    <>
      {/* Desktop - left sidebar */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/JuliaWieckowskaBeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black hover:bg-[#D4AF37] flex items-center justify-center transition-all rounded-full shadow-md hover:shadow-lg"
          aria-label="Facebook"
        >
          <Facebook className="w-4 h-4 text-[#D4AF37] hover:text-black transition-colors" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/julia.wieckowska.beauty/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black hover:bg-[#D4AF37] flex items-center justify-center transition-all rounded-full shadow-md hover:shadow-lg"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4 text-[#D4AF37] hover:text-black transition-colors" />
        </a>

        {/* Booksy */}
        
      </div>

      {/* Mobile - bottom right floating buttons */}
      <div className="fixed bottom-4 right-4 z-40 flex md:hidden flex-col gap-2">
        <a
          href="https://www.facebook.com/JuliaWieckowskaBeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-black active:bg-[#D4AF37] flex items-center justify-center rounded-full shadow-lg"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 text-[#D4AF37]" />
        </a>
        <a
          href="https://www.instagram.com/julia.wieckowska.beauty/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-black active:bg-[#D4AF37] flex items-center justify-center rounded-full shadow-lg"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 text-[#D4AF37]" />
        </a>
      </div>
    </>
  );
}