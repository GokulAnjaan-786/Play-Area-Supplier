import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import softplayImg from "@/assets/softplay.jpg";
import outdoorImg from "@/assets/outdoor-playground.jpg";
import trampolineImg from "@/assets/trampoline-park.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const productsData = [
  { img: outdoorImg, title: "Playground Slides", desc: "Durable and safe slides in various sizes and colors." },
  { img: softplayImg, title: "Swings", desc: "Classic child-safe swings for pure joy and development." },
  { img: trampolineImg, title: "Climbing Frames", desc: "Engaging climbing structures that build strength and coordination." },
  { img: outdoorImg, title: "Play Towers", desc: "Multi-level play experiences combining imagination and physical fun." },
  { img: softplayImg, title: "Outdoor Play Systems", desc: "Comprehensive large-play systems for parks and big spaces." },
  { img: trampolineImg, title: "Custom Playground Equipment", desc: "Bespoke designs tailored specifically to your play area vision." },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-muted">
        <div className="absolute inset-0">
          <img src={outdoorImg} alt="Outdoor playground" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative z-10 text-center space-y-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-6xl font-display font-bold text-primary-foreground">
            Our <span className="text-secondary">Products</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Explore our wide range of premium play equipment.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-display font-bold text-xl text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">{item.desc}</p>
                  <div className="pt-2 border-t border-border">
                    <Link to="/contact" className="inline-flex items-center gap-1 text-secondary text-sm font-semibold hover:gap-2 transition-all group-hover:text-primary">
                      Enquire Now <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
