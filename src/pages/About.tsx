import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

export default function About() {
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
              ABOUT <span className="text-primary">TRUE NORTH</span>
            </h1>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              PASSION. PRECISION. PERFECTION.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" // Placeholder for owner image
                alt="Jordain McPherson - Owner"
                className="rounded-lg shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold text-white mb-2">JORDAIN MCPHERSON</h2>
              <p className="text-primary font-medium uppercase tracking-widest mb-6">Owner / Detailer</p>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  "I started True North Auto Spa with a simple mission: to provide the highest level of automotive care possible. For me, detailing isn't just a job; it's a craft."
                </p>
                <p>
                  With years of experience and a relentless pursuit of perfection, Jordain has established True North as a premier destination for luxury car owners who demand the best.
                </p>
                <p>
                  Every vehicle that enters our shop is treated with the utmost respect and care, as if it were our own. We use only the finest products and techniques to ensure your investment is protected and looks better than the day it left the showroom.
                </p>
              </div>
              <div className="mt-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" // Placeholder signature
                  alt="Signature"
                  className="h-16 invert opacity-50"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">OUR MISSION</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                title: 'Quality',
                description: 'We never compromise on quality. From the products we use to the time we spend, excellence is our standard.',
              },
              {
                title: 'Integrity',
                description: 'We believe in honest, transparent service. We treat every client and every vehicle with respect and integrity.',
              },
              {
                title: 'Innovation',
                description: 'We stay at the forefront of the industry, constantly learning and adopting the latest techniques and technologies.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-white/5 rounded-lg bg-background hover:border-primary/30 transition-colors"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-8">EXPERIENCE THE DIFFERENCE</h2>
          <Link to="/contact">
            <Button size="lg">Contact Us Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
