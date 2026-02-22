import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Loader2 } from 'lucide-react';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
              CONTACT <span className="text-primary">US</span>
            </h1>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              READY TO ELEVATE YOUR VEHICLE?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8">GET IN TOUCH</h2>
              <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                Whether you have a question about our services or want to book an appointment, we're here to help. Reach out to us via phone, email, or the form below.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">PHONE</h3>
                    <a href="tel:+15873787829" className="text-gray-400 hover:text-primary transition-colors text-lg">
                      +1 (587) 378-7829
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri: 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">EMAIL</h3>
                    <a href="mailto:truenorthautospa@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-lg">
                      truenorthautospa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">INSTAGRAM</h3>
                    <a
                      href="https://www.instagram.com/truenorthautospa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors text-lg"
                    >
                      @truenorthautospa
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">LOCATION</h3>
                    <p className="text-gray-400 text-lg">
                      Serving Calgary & Surrounding Areas
                    </p>
                    <p className="text-gray-500 text-sm mt-1">Mobile Service Available</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-muted/20 p-8 md:p-12 rounded-lg border border-white/5"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8">SEND A MESSAGE</h2>
              
              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Thank You!</h3>
                  <p className="text-gray-300">Your message has been sent. We'll get back to you shortly.</p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Interested Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Ceramic Coating">Ceramic Coating</option>
                      <option value="Paint Correction">Paint Correction</option>
                      <option value="Interior Detailing">Interior Detailing</option>
                      <option value="Exterior Detailing">Exterior Detailing</option>
                      <option value="Full Package">Full Package</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us about your vehicle and what you're looking for..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
