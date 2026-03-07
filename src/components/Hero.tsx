import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import image_78fb3ecf73bcfd03b947717ffabfcee1262372c0 from 'figma:asset/78fb3ecf73bcfd03b947717ffabfcee1262372c0.png';
import overlayImage from 'figma:asset/b0464d8bda8dcc5d011d5e9263cbbc561227a8c8.png';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-white pt-20 pb-32 overflow-visible" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-12">
          {/* Lewa strona - Tekst */}
          <motion.div
            className="space-y-8 lg:pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl text-black leading-tight font-[Poppins]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              itemProp="name"
            >
              Regeneracja<br />
              i <span className="text-[#D4AF37]">odnowa</span><br />
              skóry
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              itemProp="description"
            >
              Naturalne zabiegi z wykorzystaniem fibryny i osocza bogatopłytkowego.
              Odkryj moc regeneracji Twojego organizmu.
            </motion.p>

            {/* Hidden SEO keywords */}
            <div className="sr-only" aria-hidden="true">
              Osocze bogatopłytkowe Białystok, osocze bialystok, ostrzykiwanie osoczem Białystok, PRP Białystok zabieg,
              zabiegi odmładzające, wampirzy lifting Białystok, fibryna bogatopłytkowa Białystok, fibryna pod oczy Białystok,
              zabiegi anti-aging Białystok, odmładzanie osoczem Białystok, regeneracja skóry PRP Białystok,
              medycyna estetyczna osocze Białystok, Full Face zabieg, mezoterapia skóry głowy, PRF Białystok
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all group"
              >
                Umów bezpłatną konsultację
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#zabiegi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-[#1a1a1a] transition-all"
              >
                Poznaj zabiegi
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-[#D4AF37]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div>
                <div className="text-3xl md:text-4xl text-[#D4AF37] mb-1">6+</div>
                <div className="text-sm text-[#666666]">Lat w Branży Beauty</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-[#D4AF37] mb-1">100%</div>
                <div className="text-sm text-[#666666]">Naturalne składniki</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-[#D4AF37] mb-1"> 82%</div>
                <div className="text-sm text-[#666666]">Odzysku płytek wg. klasyfikacji DEPA</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Prawa strona - Zdjęcie */}
          <motion.div
            className="relative lg:h-full flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Dekoracyjne tło */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C542]/10 rounded-full blur-3xl"></div>

            {/* Główne zdjęcie */}
            <div className="relative max-w-lg w-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-[3rem] opacity-20 blur-xl"></div>

              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src={image_78fb3ecf73bcfd03b947717ffabfcee1262372c0}
                  alt="Julia Więckowska - kosmetolog pielęgniarka, zabiegi osoczem bogatopłytkowym PRP PRF Białystok, wampirzy lifting, fibryna pod oczy"
                  className="w-full h-full object-cover aspect-[3/4]"
                />

                {/* Gradient overlay */}
                <ImageWithFallback
                  src={overlayImage}
                  alt="Zabiegi regeneracyjne skóry PRP fibryna Białystok"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Floating card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-black rounded-2xl p-6 shadow-2xl border border-[#D4AF37]/30 max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="text-[#D4AF37] text-sm mb-1">Certyfikowane</div>
                <div className="text-white">Zabiegi PRP & PRF</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-[#D4AF37]/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full"></div>
        </div>
      </motion.div>

      {/* Container na styku sekcji */}
      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="inline-block px-6 py-3 bg-white rounded-full border border-[#D4AF37]/20 shadow-2xl">
          <span className="text-[#D4AF37]">Sprawdzone efekty</span>
        </div>
      </motion.div>
    </section>
  );
}
