import image_8cf892ae1493691c3a74683896550dd58b79f558 from 'figma:asset/8cf892ae1493691c3a74683896550dd58b79f558.png';
import image_f833a53168ff7ecf811b28a84889261a89b86caa from 'figma:asset/f833a53168ff7ecf811b28a84889261a89b86caa.png';
import image_8ff785aa312ce760f024425e32bc955fe9cc9c2b from 'figma:asset/8ff785aa312ce760f024425e32bc955fe9cc9c2b.png';
import image_15615fdb464e7d87d0e7d07aea197eead69e9994 from 'figma:asset/15615fdb464e7d87d0e7d07aea197eead69e9994.png';
import image_e6b42712dc5f170403b5193b9192f53282ea4fdb from 'figma:asset/e6b42712dc5f170403b5193b9192f53282ea4fdb.png';
import image_96bdbf3bc2c84d60275039cc42d4920776f4be74 from 'figma:asset/96bdbf3bc2c84d60275039cc42d4920776f4be74.png';
import image_6539c9bcd2c58d7cf7759a769a53bb0c5a999a45 from 'figma:asset/6539c9bcd2c58d7cf7759a769a53bb0c5a999a45.png';
import image_fcb17f85cc2b6b37f742b008cc889a36839e9b36 from 'figma:asset/fcb17f85cc2b6b37f742b008cc889a36839e9b36.png';
import image_02baeb380ded2b3e8a56bab83b25269b9ce51ca4 from 'figma:asset/02baeb380ded2b3e8a56bab83b25269b9ce51ca4.png';
import image_6296498b0b8845cb12c1150a8ecbd036fce5603f from 'figma:asset/6296498b0b8845cb12c1150a8ecbd036fce5603f.png';
import image_74bf7379cc312ff03d5f671cc163dcef451bfcbe from 'figma:asset/74bf7379cc312ff03d5f671cc163dcef451bfcbe.png';
import image_bf55eb32ea9c38f52e991ce47eec83e8f7d0fb74 from 'figma:asset/bf55eb32ea9c38f52e991ce47eec83e8f7d0fb74.png';
import image_78fb3ecf73bcfd03b947717ffabfcee1262372c0 from 'figma:asset/78fb3ecf73bcfd03b947717ffabfcee1262372c0.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, GraduationCap, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AboutMe() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="o-mnie" className="pt-40 pb-32 bg-gradient-to-br from-[#F5F5DC] to-white relative overflow-visible" itemScope itemType="https://schema.org/Person" aria-label="O mnie - Julia Więckowska kosmetolog pielęgniarka Białystok">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Nagłówek na mobile */}
            <motion.div
              className="order-1 lg:hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-black text-center text-[28px] leading-tight">
                Profesjonalna <span className="text-[#D4AF37]">opieka</span><br />na najwyższym poziomie
              </h2>
            </motion.div>

            {/* Zdjęcie po lewej */}
            <motion.div
              className="order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative max-w-lg mx-auto">
                {/* Dekoracyjne tło */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C542]/20 rounded-[3rem] blur-2xl"></div>

                {/* Główne zdjęcie */}
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-3xl opacity-20"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/30">
                    <ImageWithFallback
                      src={image_8cf892ae1493691c3a74683896550dd58b79f558}
                      alt="Profesjonalna pielęgniarka"
                      className="w-full h-full object-cover aspect-[4/5]"
                    />
                  </div>
                </div>

                {/* Floating stats */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-black rounded-2xl p-6 shadow-xl border border-[#D4AF37]/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-center">
                    <div className="text-3xl text-[#D4AF37] mb-1">6+</div>
                    <div className="text-[#E8DCC4] text-sm">Lat<br />w Branży Beauty</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Tekst po prawej */}
            <motion.div
              className="order-3 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Nagłówek na desktop */}
              <h2 className="mb-6 text-black hidden lg:block text-[32px]">
                Profesjonalna <span className="text-[#D4AF37]">opieka</span> na najwyższym poziomie
              </h2>

              <p className="text-[#666666] mb-6 leading-relaxed">
                Jestem studentką 3ciego roku pielęgniarstwa z wieloletnim doświadczeniem
                w zabiegach regeneracyjnych. Moją pasją jest pomaganie klientom w odkrywaniu naturalnego
                piękna poprzez bezpieczne i skuteczne zabiegi autologiczne.
              </p>

              <p className="text-[#666666] mb-8 leading-relaxed">
                Specjalizuję się w zabiegach wykorzystujących fibrynę i osocze bogatopłytkowe.
                Każdy zabieg poprzedzam dokładną konsultacją, aby dobrać optymalne rozwiązanie
                dostosowane do indywidualnych potrzeb i oczekiwań klienta.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: GraduationCap, title: 'Wykształcenie', desc: 'Studentka 3ciego roku pielęgniarstwa', delay: 0.4 },
                  { icon: Award, title: 'Certyfikaty', desc: 'Zabiegi autologiczne, Full Face Natural®', delay: 0.5 },
                  { icon: Heart, title: 'Za co kocham zabiegi?', desc: 'Bezpieczeństwo, naturalność, mocna stymulacja, uniwersalność', delay: 0.6 },
                  { icon: Users, title: 'Podejście', desc: 'Indywidualne, po wcześniejszej konsultacji', delay: 0.7 }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-[#D4AF37]/10 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: item.delay }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-black mb-1">{item.title}</div>
                      <div className="text-[#666666] text-sm">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a
                  href="#kontakt"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all"
                >
                  Umów się na konsultację
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
