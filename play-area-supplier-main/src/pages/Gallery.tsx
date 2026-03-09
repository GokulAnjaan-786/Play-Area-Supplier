import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-playground.jpg";
import softplayImg from "@/assets/softplay.jpg";
import outdoorImg from "@/assets/outdoor-playground.jpg";
import trampolineImg from "@/assets/trampoline-park.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const galleryImages = [
  { src: heroImg, alt: "Colorful indoor playground structures", category: "Soft Play Systems" },
  { src: outdoorImg, alt: "Large outdoor playground slides and towers", category: "Playground Slides" },
  { src: trampolineImg, alt: "Expansive trampoline park setup", category: "Climbing Structures" },
  { src: softplayImg, alt: "Interactive kids entertainment center", category: "Preschool Playground Setups" },
  { src: outdoorImg, alt: "Community park outdoor play system", category: "Outdoor Play Towers" },
  { src: heroImg, alt: "Safe climbing frames for kids", category: "School Playground Installations" },
  { src: softplayImg, alt: "Modular swing setups", category: "Swings" },
  { src: trampolineImg, alt: "Bright climbing obstacles", category: "Climbing Structures" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-muted">
        <div className="absolute inset-0">
          <img src={trampolineImg} alt="Playground Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative z-10 text-center space-y-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-6xl font-display font-bold text-primary-foreground">
            Our <span className="text-secondary">Gallery</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Take a look at our completed play area installations.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="relative group rounded-2xl overflow-hidden aspect-square cursor-pointer shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <ZoomIn size={32} className="text-secondary mb-3 transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100" />
                  <p className="text-primary-foreground font-medium font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {img.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
