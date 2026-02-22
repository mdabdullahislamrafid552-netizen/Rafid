import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'Ceramic Coating', image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, category: 'Paint Correction', image: 'https://images.unsplash.com/photo-1632823471465-4113d2e079a6?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, category: 'Interior', image: 'https://images.unsplash.com/photo-1552975084-6e027cd345c2?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, category: 'Exterior', image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, category: 'Ceramic Coating', image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, category: 'Paint Correction', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop' },
  { id: 7, category: 'Interior', image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop' },
  { id: 8, category: 'Exterior', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop' },
];

const categories = ['All', 'Ceramic Coating', 'Paint Correction', 'Interior', 'Exterior'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

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
              OUR <span className="text-primary">WORK</span>
            </h1>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              A SHOWCASE OF PERFECTION.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-muted border border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer border border-white/5"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-display font-bold tracking-widest uppercase border border-white/30 px-4 py-2 rounded-sm">
                      View
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
