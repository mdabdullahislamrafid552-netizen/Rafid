import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Car Detailing"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight"
          >
            DETAILING <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">DONE RIGHT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 font-light tracking-wide max-w-3xl mx-auto"
          >
            PRECISION & SHINE. ELEVATING AUTOMOTIVE CARE TO AN ART FORM.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Book Appointment
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                TRUE NORTH <span className="text-primary">AUTO SPA</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                We are not just detailers; we are automotive preservationists. At True North Auto Spa, we believe that every vehicle deserves to look its absolute best. Our passion for perfection drives us to deliver results that exceed expectations.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Specializing in ceramic coatings, paint correction, and comprehensive detailing, we use only the finest products and techniques to protect and enhance your investment.
              </p>
              <Link to="/about">
                <Button variant="link" className="pl-0 text-lg">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1605218457332-dd9c397d95db?q=80&w=1974&auto=format&fit=crop"
                alt="Detailing Process"
                className="relative rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">OUR EXPERTISE</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ceramic Coating',
                description: 'Long-lasting protection and incredible gloss for your vehicle\'s paint.',
                image: 'https://images.unsplash.com/photo-1626074961596-e994c087d027?q=80&w=2070&auto=format&fit=crop',
              },
              {
                title: 'Paint Correction',
                description: 'Remove swirls, scratches, and imperfections to restore showroom shine.',
                image: 'https://images.unsplash.com/photo-1632823471465-4113d2e079a6?q=80&w=2070&auto=format&fit=crop',
              },
              {
                title: 'Interior Detailing',
                description: 'Deep cleaning and conditioning for a fresh, hygienic, and luxurious interior.',
                image: 'https://images.unsplash.com/photo-1552975084-6e027cd345c2?q=80&w=1974&auto=format&fit=crop',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-card hover:border-primary/50 transition-colors duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Link to="/services" className="text-primary font-medium uppercase tracking-wider text-sm hover:text-white transition-colors flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Years Experience', value: '10+' },
                  { label: 'Cars Detailed', value: '500+' },
                  { label: 'Satisfied Clients', value: '100%' },
                  { label: 'Premium Products', value: 'Top Tier' },
                ].map((stat, index) => (
                  <div key={index} className="bg-muted/50 p-8 rounded-lg border border-white/5 text-center hover:border-primary/30 transition-colors">
                    <h4 className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</h4>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                WHY CHOOSE <span className="text-primary">TRUE NORTH</span>
              </h2>
              <ul className="space-y-6">
                {[
                  'Certified Ceramic Coating Installers',
                  'Meticulous Attention to Detail',
                  'Premium Eco-Friendly Products',
                  'Fully Insured & Licensed',
                  'Satisfaction Guaranteed',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900 opacity-90" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            READY TO TRANSFORM YOUR VEHICLE?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book your appointment today and experience the True North difference.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-2xl">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
