import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Sparkles, Zap, Heart, Atom, Grid3x3 } from 'lucide-react';
import { motion } from 'motion/react';

interface Treatment {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

interface RelatedTreatmentsProps {
  currentPath: string;
}

export function RelatedTreatments({ currentPath }: RelatedTreatmentsProps) {
  const allTreatments: Treatment[] = [
    {
      title: 'Osocze PRP',
      description: 'Naturalne odmładzanie z wykorzystaniem osocza bogatopłytkowego',
      path: '/osocze-bogatoplytkowe-prp-bialystok',
      icon: <Droplet className="w-6 h-6" />
    },
    {
      title: 'Fibryna PRF',
      description: 'Zaawansowana regeneracja bez dodatków chemicznych',
      path: '/fibryna-bogatoplytkowa-prf-bialystok',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Full Face Natural®',
      description: 'Kompleksowe odmłodzenie twarzy naturalnymi metodami',
      path: '/full-face-natural-bialystok',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Osocze na włosy',
      description: 'Skuteczna terapia wypadających włosów metodą osocza',
      path: '/osocze-na-skore-glowy-bialystok',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Autologiczne Egzosomy',
      description: 'Regeneracja skóry na poziomie molekularnym z wykorzystaniem egzosomów',
      path: '/autologiczne-egzosomy-bialystok',
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: 'Mezoterapia mikroigłowa',
      description: 'Skuteczna regeneracja skóry metodą microneedling',
      path: '/mezoterapia-mikroiglowa-bialystok',
      icon: <Grid3x3 className="w-6 h-6" />
    }
  ];

  // Filter out current treatment
  const relatedTreatments = allTreatments.filter(t => t.path !== currentPath);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Zobacz także <span className="text-[#D4AF37]">inne zabiegi</span>
            </h2>
            <p className="text-lg text-[#666666]">
              Odkryj pełną ofertę zabiegów z wykorzystaniem osocza i fibryny
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={treatment.path}
                  className="group block h-full bg-[#F9F7F4] rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#D4AF37]/20"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-lg flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                      {treatment.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2 group-hover:text-[#D4AF37] transition-colors">
                        {treatment.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#666666] mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#D4AF37] group-hover:gap-3 transition-all">
                    <span className="text-sm">Dowiedz się więcej</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}