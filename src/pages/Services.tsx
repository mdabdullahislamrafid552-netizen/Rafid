import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

export default function Services() {
  const services = [
    {
      title: 'Ceramic Coating',
      description: 'The ultimate protection for your vehicle\'s paint. Our ceramic coatings provide a durable, hydrophobic layer that resists scratches, chemicals, and UV rays.',
      features: ['High Gloss Finish', 'Hydrophobic Properties', 'UV Protection', 'Chemical Resistance', 'Easy Maintenance'],
      price: 'Starting at $899',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Paint Correction',
      description: 'Restore your paint to perfection. We remove swirls, scratches, oxidation, and other imperfections to reveal a flawless, mirror-like finish.',
      features: ['Swirl Mark Removal', 'Scratch Removal', 'Oxidation Removal', 'Gloss Enhancement', 'Surface Leveling'],
      price: 'Starting at $499',
      image: 'https://images.unsplash.com/photo-1632823471465-4113d2e079a6?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Interior Detailing',
      description: 'A deep clean for your vehicle\'s interior. We clean, condition, and protect every surface, leaving your cabin fresh, hygienic, and looking like new.',
      features: ['Deep Vacuuming', 'Steam Cleaning', 'Leather Conditioning', 'Stain Removal', 'Odor Elimination'],
      price: 'Starting at $299',
      image: 'https://images.unsplash.com/photo-1552975084-6e027cd345c2?q=80&w=1974&auto=format&fit=crop',
    },
    {
      title: 'Exterior Detailing',
      description: 'Enhance your vehicle\'s curb appeal. Our exterior detailing services include a thorough wash, decontamination, clay bar treatment, and sealant application.',
      features: ['Hand Wash', 'Wheel Cleaning', 'Clay Bar Treatment', 'Iron Decontamination', 'Spray Sealant'],
      price: 'Starting at $199',
      image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              OUR <span className="text-primary">SERVICES</span>
            </h1>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              COMPREHENSIVE CARE FOR YOUR VEHICLE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative group overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h2 className="text-4xl font-display font-bold text-white mb-4">{service.title}</h2>
                <div className="w-20 h-1 bg-primary mb-6" />
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Check size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t border-white/10 pt-8">
                  <span className="text-2xl font-display font-bold text-white">{service.price}</span>
                  <Link to="/contact">
                    <Button>Book Now</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages CTA */}
      <section className="py-24 bg-muted/20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">CUSTOM PACKAGES AVAILABLE</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Looking for something specific? We can tailor a package to meet your vehicle's unique needs and your budget.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg">Get a Custom Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
